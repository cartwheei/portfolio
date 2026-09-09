/* Page logic: language, rendering from CONTENT, console, globe wiring, scroll registration. */
(function () {
  const C = window.CONTENT;
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = root.lang === 'en' ? 'en' : 'tr';
  const T = function () { return C[lang]; };
  const $ = function (s, r) { return (r || document).querySelector(s); };
  const $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  const esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  const get = function (o, k) { return k.split('.').reduce(function (a, b) { return a == null ? a : a[b]; }, o); };
  const store = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };

  /* ---------- rendering ---------- */
  function renderStatic() {
    const t = T();
    document.title = t.title;
    $('meta[name="description"]').setAttribute('content', t.description);
    $$('[data-i18n]').forEach(function (el) { const v = get(t, el.dataset.i18n); if (v != null) el.textContent = v; });
    $$('[data-i18n-aria]').forEach(function (el) { const v = get(t, el.dataset.i18nAria); if (v != null) el.setAttribute('aria-label', v); });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  }

  function renderFacts() {
    $('#facts').innerHTML = T().facts.map(function (f) {
      const v = f[1];
      const dd = (v && typeof v === 'object')
        ? '<span class="count" data-to="' + v.count + '" data-suffix="' + esc(v.suffix || '') + '">' + (reduce ? v.count + (v.suffix || '') : '0') + '</span>' + esc(v.text || '')
        : esc(v);
      return '<div class="fact"><dt>' + esc(f[0]) + '</dt><dd>' + dd + '</dd></div>';
    }).join('');
    startCounters();
  }

  // Counters climb on the shared clock: 0 to the target with an ease-out, once per render.
  let counters = [];
  function startCounters() {
    counters = reduce ? [] : $$('.count').map(function (el) { return { el: el, to: +el.dataset.to, suffix: el.dataset.suffix || '', start: performance.now() + 250, dur: 1400, done: false }; });
  }

  function picture(p) {
    const im = C.images[p.img];
    if (im.gif) {
      return '<img src="' + im.poster + '" data-gif="' + im.gif + '" alt="' + esc(p.alt) + '" width="1000" height="1000" loading="lazy">';
    }
    return '<picture><source type="image/webp" srcset="' + im.webp + '"><img src="' + im.png + '" alt="' + esc(p.alt) + '" loading="lazy"></picture>';
  }

  function linksHtml(x) {
    const list = x.links ? x.links.slice() : [];
    if (x.link && C.links[x.link]) list.unshift({ link: x.link, label: x.linkLabel });
    const out = list.filter(function (l) { return C.links[l.link]; }).map(function (l) {
      return '<a class="cartouche" href="' + C.links[l.link] + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    });
    return out.length ? '<p class="links">' + out.join('') + '</p>' : '';
  }

  function pressHtml(x) {
    if (!x.press || !x.press.length) return '';
    return '<p class="press"><span>' + esc(T().pressLabel) + '</span> ' + x.press.filter(function (r) { return C.links[r[1]]; }).map(function (r) {
      return '<a href="' + C.links[r[1]] + '" target="_blank" rel="noopener">' + esc(r[0]) + '</a>';
    }).join('<span class="sep">·</span>') + '</p>';
  }

  function renderProjects() {
    $('#projects-list').innerHTML = T().projects.map(function (p) {
      const bullets = (p.bullets || []).length ? '<ul>' + p.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' : '';
      const tags = (p.tags || []).length ? '<p class="tags">' + p.tags.map(function (g) { return '<span class="tag">' + esc(g) + '</span>'; }).join('') + '</p>' : '';
      const link = linksHtml(p) + pressHtml(p);
      const figure = p.img && C.images[p.img] ? '<figure class="print"><div class="print-frame">' + picture(p) + '</div></figure>' : '';
      return '<article class="proj' + (figure ? '' : ' no-print') + '" id="proj-' + p.id + '">' +
        '<div class="proj-text">' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p class="meta">' + esc(p.meta) + '</p>' +
          bullets + tags + link +
        '</div>' +
        figure +
      '</article>';
    }).join('');
  }

  function renderNow() {
    const n = T().now;
    $('#now-intro').textContent = n.intro;
    $('#now-focus').innerHTML = '<h3>' + esc(n.focus.title) + '</h3><p>' + esc(n.focus.text) + '</p>';
    $('#now-list').innerHTML = n.items.map(function (i) {
      return '<div class="now-item"><h3>' + esc(i.title) + '</h3><p>' + esc(i.text) + '</p></div>';
    }).join('');
  }

  function renderExperience() {
    const t = T();
    $('#exp').innerHTML =
      '<thead><tr><th scope="col">' + esc(t.th.period) + '</th><th scope="col">' + esc(t.th.org) + '</th><th scope="col">' + esc(t.th.role) + '</th><th scope="col">' + esc(t.th.place) + '</th></tr></thead>' +
      '<tbody>' + t.exp.map(function (e) {
        return '<tr><td class="period" data-th="' + esc(t.th.period) + '">' + esc(e.period) + '</td><td class="org" data-th="' + esc(t.th.org) + '">' + esc(e.org) + '</td><td data-th="' + esc(t.th.role) + '">' + esc(e.role) + '</td><td class="place" data-th="' + esc(t.th.place) + '">' + esc(e.place) + '</td></tr>';
      }).join('') + '</tbody>';
  }

  function renderEducation() {
    const t = T();
    $('#edu').innerHTML = '<h3>' + esc(t.eduHead) + '</h3>' + t.edu.map(function (e) {
      return '<div class="entry"><span class="years">' + esc(e.years) + '</span><div><h4>' + esc(e.school) + '</h4><p>' + esc(e.text) + '</p></div></div>';
    }).join('');
    $('#pub').innerHTML = '<h3>' + esc(t.pubHead) + '</h3>' + t.pub.map(function (e) {
      return '<div class="entry"><span class="years">' + esc(e.years) + '</span><div><h4>' + esc(e.title) + '</h4><p>' + esc(e.text) + '</p>' + linksHtml(e) + pressHtml(e) + '</div></div>';
    }).join('');
  }

  function renderContact() {
    $('#contact-list').innerHTML = T().contact.map(function (c, i) {
      const ext = c[1] === 'mail' ? '' : ' target="_blank" rel="noopener"';
      return '<a class="stamp stamp-lg' + (i % 2 ? ' alt' : '') + '" href="' + C.links[c[1]] + '"' + ext + '>' + esc(c[0]) + '</a>';
    }).join('');
  }

  function renderPlaces() {
    const t = T();
    $('#places').innerHTML =
      '<button type="button" class="cartouche place" data-place="" aria-pressed="true">' + esc(t.globe.all) + '</button>' +
      C.points.map(function (p) {
        return '<button type="button" class="cartouche place" data-place="' + p.id + '" aria-pressed="false">' + esc(p.name[lang]) + '</button>';
      }).join('');
  }

  function renderAll() {
    // Each renderer runs on its own so one failure cannot blank the sections after it.
    [renderStatic, renderFacts, renderProjects, renderNow, renderExperience, renderEducation, renderContact, renderPlaces, observeReveals, observeGif]
      .forEach(function (fn) { try { fn(); } catch (err) { console.error(fn.name, err); } });
  }

  /* ---------- console ---------- */
  const queryEl = $('#query');
  const rowsEl = $('#rows');
  const statusEl = $('#status');
  const resTitleEl = $('#resTitle');
  const histEl = $('#history');
  let typing = null; // {text, start, done}
  let current = null; // selected place id
  const history = [];

  function queryText(id) {
    if (!id) {
      return 'SELECT p.name, count(*) AS n\nFROM   places p\nJOIN   work w ON ST_Contains(p.geom, w.geom)\nGROUP  BY p.name\nORDER  BY n DESC;';
    }
    const p = C.points.find(function (x) { return x.id === id; });
    return 'SELECT title, kind, year\nFROM   work w\nJOIN   places p ON ST_Contains(p.geom, w.geom)\nWHERE  p.name = \'' + p.name[lang] + '\'\nORDER  BY year DESC;';
  }

  function highlight(sql) {
    return esc(sql)
      .replace(/'([^']*)'/g, '<span class="s">\'$1\'</span>')
      .replace(/\b(SELECT|FROM|JOIN|ON|WHERE|GROUP|BY|ORDER|DESC|AS)\b/g, '<span class="k">$1</span>')
      .replace(/\b(ST_Contains|count)\b/g, '<span class="f">$1</span>');
  }

  function runQuery(id) {
    current = id;
    const t = T();
    const text = queryText(id);
    const rows = id ? t.rows[id] : t.summary;
    const name = id ? C.points.find(function (x) { return x.id === id; }).name[lang] : null;
    resTitleEl.textContent = name ? t.console.result + ' · ' + name : t.console.result;
    rowsEl.innerHTML = '';
    rowsEl.classList.remove('is-done');
    statusEl.textContent = t.console.typing;
    const finish = function () {
      queryEl.innerHTML = highlight(text) + '<span class="caret" aria-hidden="true"></span>';
      statusEl.textContent = rows.length + ' ' + t.console.rows;
      rowsEl.innerHTML = rows.map(function (r) {
        if (r.place) {
          const p = C.points.find(function (x) { return x.id === r.place; });
          return '<li><button type="button" class="row sum" data-place="' + r.place + '"><span class="a">' + esc(p.name[lang]) + ' <small>' + esc(r.b) + '</small></span><span class="c">' + r.n + '</span></button></li>';
        }
        return '<li><a class="row" href="' + r.href + '"><span class="a">' + esc(r.a) + '</span><span class="b">' + esc(r.b) + '</span><span class="c">' + esc(r.c) + '</span></a></li>';
      }).join('');
      rowsEl.classList.add('is-done');
    };
    if (reduce) { typing = null; finish(); return; }
    typing = { text: text, start: performance.now(), finish: finish, done: false };
  }

  function tick() {
    counters.forEach(function (c) {
      if (c.done) return;
      const k = Math.max(0, Math.min(1, (performance.now() - c.start) / c.dur));
      const e = 1 - Math.pow(1 - k, 3);
      c.el.textContent = Math.round(c.to * e) + (k >= 1 ? c.suffix : '');
      if (k >= 1) c.done = true;
    });
    if (typing && !typing.done) {
      const n = Math.min(typing.text.length, Math.floor((performance.now() - typing.start) / 1000 * 96));
      queryEl.textContent = typing.text.slice(0, n);
      queryEl.insertAdjacentHTML('beforeend', '<span class="caret" aria-hidden="true"></span>');
      if (n >= typing.text.length) { typing.done = true; typing.finish(); }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function pushHistory(line) {
    history.push(line);
    while (history.length > 3) history.shift();
    histEl.innerHTML = history.map(function (h) { return '<span>' + esc(h) + '</span>'; }).join('');
  }

  /* ---------- globe ---------- */
  let globe = null;
  const coordsEl = $('#coords');
  function fmt(v, pos, neg) { const a = Math.abs(v).toFixed(1); return a + '° ' + (v >= 0 ? pos : neg); }
  function initGlobe() {
    if (!window.d3 || !window.topojson || !window.initGlobe) return;
    globe = window.initGlobe($('#globe'), C.points, {
      lang: lang,
      onSelect: function (id, source) {
        if (source === 'hover') { runQuery(id); return; }
        if (source === 'leave') { if (globe.selected() !== current) runQuery(globe.selected()); return; }
        runQuery(id);
        $$('#places .place').forEach(function (b) { b.setAttribute('aria-pressed', String((b.dataset.place || null) === (id || null))); });
      },
      onCenter: function (lon, lat) {
        lon = ((lon + 540) % 360) - 180;
        coordsEl.textContent = fmt(lon, 'E', 'W') + ' · ' + fmt(lat, 'N', 'S');
      }
    });
  }

  $('#places').addEventListener('click', function (e) {
    const b = e.target.closest('.place');
    if (!b || !globe) return;
    globe.select(b.dataset.place || null, 'button');
  });
  rowsEl.addEventListener('click', function (e) {
    const b = e.target.closest('button.row');
    if (b && globe) globe.select(b.dataset.place, 'row');
  });

  /* ---------- switches ---------- */
  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      root.lang = lang;
      store('lang', lang);
      renderAll();
      if (globe) globe.setLang(lang);
      pushHistory('\\set lang ' + lang);
      runQuery(current);
    });
  });

  /* ---------- scroll: registration reveal, nav spy, lazy gif, globe pause ---------- */
  let revealObs = null;
  function observeReveals() {
    if (revealObs) revealObs.disconnect();
    revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); revealObs.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    $$('.plate, .proj').forEach(function (el) { revealObs.observe(el); });
  }

  const navLinks = $$('.nav a');
  const spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      navLinks.forEach(function (a) {
        const on = a.getAttribute('href') === '#' + id;
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  $$('main section[id]').forEach(function (s) { spy.observe(s); });

  let gifObs = null;
  function observeGif() {
    if (gifObs) gifObs.disconnect();
    if (reduce) return;
    gifObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        const img = en.target;
        const gif = new Image();
        gif.onload = function () { img.src = img.dataset.gif; img.classList.add('is-live'); };
        gif.src = img.dataset.gif;
        gifObs.unobserve(img);
      });
    }, { rootMargin: '0px 0px 200px 0px' });
    $$('img[data-gif]').forEach(function (img) { gifObs.observe(img); });
  }

  const heroObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (globe) globe.setInView(en.isIntersecting); });
  }, { threshold: 0 });
  heroObs.observe($('#globe'));

  /* ---------- scale line: approximate map scale at the globe centre for this screen ---------- */
  const scaleText = $('#scaleText');
  const scaleBar = $('#scaleBar');
  function updateScale() {
    const svg = $('#globe svg');
    if (!svg) return;
    const w = svg.getBoundingClientRect().width;
    if (!w) return;
    const kmPerPx = (600 / w) * (6371 / 284);          // viewBox units per px × km per unit
    const pxPerMetre = 96 / 0.0254;                     // CSS reference pixel
    const denom = kmPerPx * 1000 * pxPerMetre;
    const rounded = Math.round(denom / 1e6) * 1e6;
    scaleText.textContent = '≈ 1 : ' + String(rounded).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    scaleBar.style.width = Math.max(12, Math.round(1000 / kmPerPx)) + 'px';
  }
  if ('ResizeObserver' in window) new ResizeObserver(updateScale).observe($('#globe'));
  window.addEventListener('resize', updateScale);

  /* ---------- nav placement: on narrow screens the nav leaves the sticky head ---------- */
  const narrow = window.matchMedia('(max-width: 720px)');
  const head = $('.sheet-head');
  const nav = $('.nav');
  function placeNav() {
    if (narrow.matches) { if (nav.parentNode === head) head.after(nav); }
    else if (nav.parentNode !== head) { head.insertBefore(nav, $('.switches')); }
  }
  if (narrow.addEventListener) narrow.addEventListener('change', placeNav); else narrow.addListener(placeNav);
  placeNav();

  /* ---------- back to top: appears once the hero has scrolled past ---------- */
  const toTop = $('#toTop');
  let toTopQueued = false;
  function updateToTop() {
    toTopQueued = false;
    toTop.classList.toggle('is-visible', window.scrollY > 640);
  }
  window.addEventListener('scroll', function () { if (!toTopQueued) { toTopQueued = true; requestAnimationFrame(updateToTop); } }, { passive: true });
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
    const first = $('.nav a');
    if (first) first.focus({ preventScroll: true });
  });
  updateToTop();

  /* ---------- boot ---------- */
  renderAll();
  initGlobe();
  updateScale();
  runQuery(null);
  requestAnimationFrame(function () { document.body.classList.add('is-loaded'); });
})();
