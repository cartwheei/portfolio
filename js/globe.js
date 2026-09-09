/* Orthographic globe drawn as registered print plates: blue (sea, graticule), green (land),
   brown (borders), key (coastline, rim), seal (places). Depends on d3 v7 and topojson-client v3. */
window.initGlobe = function initGlobe(el, points, opts) {
  const d3 = window.d3;
  const topojson = window.topojson;
  const S = 600;
  const R = 284;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cb = Object.assign({ onSelect: function () {}, onCenter: function () {}, lang: 'tr' }, opts || {});
  // Turkish dotted i must upper-case to İ (Eskişehir → ESKİŞEHİR); use the tr locale for Turkish UI or Turkish spellings.
  const upper = function (s, lang) { return s.toLocaleUpperCase(lang === 'tr' || /[şğıİŞĞ]/.test(s) ? 'tr-TR' : 'en-US'); };

  const svg = d3.select(el).append('svg')
    .attr('viewBox', '0 0 ' + S + ' ' + S)
    .attr('class', 'globe-svg')
    .attr('aria-hidden', 'true');

  const defs = svg.append('defs');
  defs.append('clipPath').attr('id', 'globe-disc').append('circle').attr('cx', S / 2).attr('cy', S / 2).attr('r', R);
  const pat = defs.append('pattern').attr('id', 'globe-hatch').attr('width', 7).attr('height', 7)
    .attr('patternUnits', 'userSpaceOnUse').attr('patternTransform', 'rotate(45)');
  pat.append('line').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', 7).attr('class', 'g-hatch');

  const proj = d3.geoOrthographic().scale(R).translate([S / 2, S / 2]).clipAngle(90).rotate([-30, -36]);
  const path = d3.geoPath(proj);

  // Plates, in print order. Keyline is drawn last so it sits on top, but appears first in time (see CSS).
  const blue = svg.append('g').attr('class', 'pl pl-blue').attr('clip-path', 'url(#globe-disc)');
  blue.append('circle').attr('cx', S / 2).attr('cy', S / 2).attr('r', R).attr('class', 'g-sea');
  blue.append('circle').attr('cx', S / 2).attr('cy', S / 2).attr('r', R).attr('fill', 'url(#globe-hatch)').attr('class', 'g-sea-hatch');
  const grat = blue.append('path').datum(d3.geoGraticule().step([15, 15])()).attr('class', 'g-grat');

  const green = svg.append('g').attr('class', 'pl pl-green').attr('clip-path', 'url(#globe-disc)');
  const landG = green.append('path').attr('class', 'g-land');

  const brown = svg.append('g').attr('class', 'pl pl-brown').attr('clip-path', 'url(#globe-disc)');
  const bordG = brown.append('path').attr('class', 'g-borders');

  const key = svg.append('g').attr('class', 'pl pl-key');
  const coastG = key.append('path').attr('class', 'g-coast').attr('clip-path', 'url(#globe-disc)');
  key.append('circle').attr('cx', S / 2).attr('cy', S / 2).attr('r', R).attr('class', 'g-rim');

  const ptG = svg.append('g').attr('class', 'pl pl-seal');

  let land = null, borders = null, coast = null;
  let hover = null, selected = null, dragging = false, paused = false, inView = true;
  let vel = 0, targetVel = reduce ? 0 : 0.0045;
  let tween = null; // {from:[l,p], to:[l,p], t0, dur}
  let dirty = true;  // re-render only when something moved or a state changed

  const visible = function (d) {
    const r = proj.rotate();
    return d3.geoDistance([d.lon, d.lat], [-r[0], -r[1]]) < 1.45;
  };

  const pts = ptG.selectAll('g').data(points).join('g')
    .attr('class', 'g-pt')
    .attr('tabindex', 0)
    .attr('role', 'button')
    .attr('aria-label', function (d) { return d.name[cb.lang]; })
    .on('mouseenter', function (e, d) { hover = d.id; targetVel = 0; dirty = true; cb.onSelect(d.id, 'hover'); })
    .on('mouseleave', function () { hover = null; if (!selected && !reduce) targetVel = 0.0045; dirty = true; cb.onSelect(selected, 'leave'); })
    .on('click', function (e, d) { e.stopPropagation(); api.select(d.id, 'click'); })
    .on('keydown', function (e, d) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); api.select(d.id, 'key'); }
    })
    .on('focus', function (e, d) { targetVel = 0; api.select(d.id, 'focus'); });

  pts.append('circle').attr('class', 'g-halo').attr('r', 20);
  pts.append('circle').attr('class', 'g-ring').attr('r', 12);
  pts.append('circle').attr('class', 'g-dot').attr('r', 6.5);
  pts.append('text').attr('class', 'g-label')
    .attr('x', function (d) { return d.dx == null ? 13 : d.dx * 1.2; })
    .attr('y', function (d) { return d.dy == null ? 5 : d.dy * 1.2; })
    .attr('text-anchor', function (d) { return d.anchor || 'start'; })
    .text(function (d) { return upper(d.name[cb.lang], cb.lang); });

  // Clicking open sea clears the selection.
  svg.on('click', function () { if (selected) api.select(null, 'clear'); });

  // Label placement: the active label always prints; others hide when their box would
  // overlap an already-placed label or sit too close to the limb.
  function placeLabels() {
    const r = proj.rotate();
    const centre = [-r[0], -r[1]];
    const active = hover || selected;
    const kept = [];
    const order = points.slice().sort(function (a, b) { return (b.id === active) - (a.id === active); });
    const show = {};
    order.forEach(function (d) {
      const dist = d3.geoDistance([d.lon, d.lat], centre);
      if (dist >= 1.45) { show[d.id] = false; return; }
      if (d.id !== active && dist > 1.28) { show[d.id] = false; return; }
      const xy = proj([d.lon, d.lat]);
      const w = d.name[cb.lang].length * 10.6 + 6, h = 18;
      const dx = d.dx == null ? 13 : d.dx * 1.2, dy = d.dy == null ? 5 : d.dy * 1.2;
      let x0 = xy[0] + dx;
      if (d.anchor === 'end') x0 -= w; else if (d.anchor === 'middle') x0 -= w / 2;
      const box = [x0, xy[1] + dy - 14, x0 + w, xy[1] + dy + 4];
      const clash = kept.some(function (k) { return box[0] < k[2] && box[2] > k[0] && box[1] < k[3] && box[3] > k[1]; });
      if (clash && d.id !== active) { show[d.id] = false; return; }
      kept.push(box); show[d.id] = true;
    });
    pts.select('text').classed('lbl-hidden', function (d) { return !show[d.id]; });
  }

  function render() {
    grat.attr('d', path);
    if (land) landG.attr('d', path(land));
    if (borders) bordG.attr('d', path(borders));
    if (coast) coastG.attr('d', path(coast));
    pts.attr('transform', function (d) { const xy = proj([d.lon, d.lat]); return 'translate(' + xy[0] + ',' + xy[1] + ')'; })
      .classed('is-hidden', function (d) { return !visible(d); })
      .classed('is-active', function (d) { return d.id === (hover || selected); })
      .attr('tabindex', function (d) { return visible(d) ? 0 : -1; });
    placeLabels();
  }

  let last = 0, lastCenter = 0;
  const timer = d3.timer(function (t) {
    const dt = Math.min(50, t - last); last = t;
    if (tween) {
      const k = Math.max(0, Math.min(1, (d3.now() - tween.t0) / tween.dur));
      const e = 1 - Math.pow(1 - k, 3);
      proj.rotate([tween.from[0] + (tween.to[0] - tween.from[0]) * e, tween.from[1] + (tween.to[1] - tween.from[1]) * e]);
      if (k >= 1) tween = null;
      dirty = true;
    } else {
      const goal = (paused || !inView || dragging || document.hidden) ? 0 : targetVel;
      vel += (goal - vel) * 0.06;
      if (Math.abs(vel) > 1e-5) {
        const r = proj.rotate();
        proj.rotate([r[0] + vel * dt, r[1]]);
        dirty = true;
      } else if (vel !== 0) { vel = 0; }
    }
    if (dirty) { render(); dirty = false; }
    if (t - lastCenter > 120) {
      lastCenter = t;
      const r = proj.rotate();
      cb.onCenter(-r[0], -r[1]);
    }
  });

  svg.call(d3.drag()
    .on('start', function () { dragging = true; tween = null; el.classList.add('is-dragging'); })
    .on('drag', function (e) {
      const r = proj.rotate();
      proj.rotate([r[0] + e.dx * 0.35, Math.max(-65, Math.min(65, r[1] - e.dy * 0.35))]);
      dirty = true;
    })
    .on('end', function () { dragging = false; el.classList.remove('is-dragging'); }));

  svg.on('mouseenter', function () { paused = true; }).on('mouseleave', function () { paused = false; });

  // Local copy first; the public world-atlas package is the fallback if the local file is unreachable.
  const loadAtlas = function () {
    return fetch('data/countries-110m.json')
      .then(function (r) { if (!r.ok) throw new Error('local atlas ' + r.status); return r.json(); })
      .catch(function () {
        return fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then(function (r) { return r.json(); });
      });
  };
  loadAtlas()
    .then(function (topo) {
      land = topojson.feature(topo, topo.objects.land);
      borders = topojson.mesh(topo, topo.objects.countries, function (a, b) { return a !== b; });
      coast = topojson.mesh(topo, topo.objects.land);
      el.classList.add('is-ready');
      render();
    })
    .catch(function (err) { console.warn('globe data', err); el.classList.add('is-ready'); });

  const api = {
    select: function (id, source) {
      selected = id;
      if (id) {
        const d = points.find(function (p) { return p.id === id; });
        const from = proj.rotate();
        let to0 = -d.lon;
        // shortest path around the globe
        while (to0 - from[0] > 180) to0 -= 360;
        while (to0 - from[0] < -180) to0 += 360;
        const to = [to0, -Math.max(-55, Math.min(55, d.lat)) + 8];
        tween = reduce ? null : { from: from, to: to, t0: d3.now(), dur: 750 };
        if (reduce) proj.rotate(to);
        targetVel = 0;
      } else if (!reduce) {
        targetVel = 0.0045;
      }
      render();
      cb.onSelect(id, source || 'api');
    },
    selected: function () { return selected; },
    setLang: function (lang) {
      cb.lang = lang;
      pts.attr('aria-label', function (d) { return d.name[lang]; });
      pts.select('text').text(function (d) { return upper(d.name[lang], lang); });
    },
    setInView: function (v) { inView = v; },
    stop: function () { timer.stop(); }
  };
  return api;
};
