/* Page logic: language, theme, rendering from CONTENT, console, globe wiring, scroll registration. */
(function () {
  const C = window.CONTENT;
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = root.lang === 'en' ? 'en' : 'tr';
  let theme = root.dataset.theme === 'plate' ? 'plate' : 'paper';
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
    const tb = $('#themeToggle');
    tb.textContent = theme === 'plate' ? t.theme.toPaper : t.theme.toPlate;
    tb.setAttribute('aria-pressed', String(theme === 'plate'));
  }

  function renderFacts() {
    $('#facts').innerHTML = T().facts.map(function (f) {
      return '<div class="fact"><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>';
    }).join('');
  }

  function picture(p) {
    const im = C.images[p.img];
    if (im.gif) {
      return '<img src="' + im.poster + '" data-gif="' + im.gif + '" alt="' + esc(p.alt) + '" width="1000" height="1000" loading="lazy">';
    }
    return '<picture><source type="image/webp" srcset="' + im.webp + '"><img src="' + im.png + '" alt="' + esc(p.alt) + '" loading="lazy"></picture>';
  }

  function renderProjects() {
    $('#projects-list').innerHTML = T().projects.map(function (p) {
      return '<article class="proj" id="proj-' + p.id + '">' +
        '<div class="proj-text">' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p class="meta">' + esc(p.meta) + '</p>' +
          '<ul>' + p.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
          '<p class="tags">' + p.tags.map(function (g) { return '<span class="tag">' + esc(g) + '</span>'; }).join('') + '</p>' +
          '<a class="cartouche" href="' + C.links[p.link] + '" target="_blank" rel="noopener">' + esc(p.linkLabel) + '</a>' +
        '</div>' +
        '<figure class="print"><div class="print-frame">' + picture(p) + '</div></figure>' +
      '</article>';
    }).join('');
  }

  function renderStack() {
    $('#stack-list').innerHTML = T().stack.map(function (g) {
      return '<div class="stack-col"><h3>' + esc(g[0]) + '</h3><ul>' + g[1].map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>';
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
      return '<div class="entry"><span class="years">' + esc(e.years) + '</span><div><h4>' + esc(e.title) + '</h4><p>' + esc(e.text) + '</p><a class="cartouche" href="' + C.links[e.link] + '" target="_blank" rel="noopener">' + esc(e.linkLabel) + '</a></div></div>';
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
    renderStatic(); renderFacts(); renderProjects(); renderStack(); renderExperience(); renderEducation(); renderContact(); renderPlaces();
    observeReveals(); observeGif();
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
    if (typing && !typing.done) {
      const n = Math.min(typing.text.length, Math.floor((performance.now() - typing.start) / 1000 * 72));
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
  $('#themeToggle').addEventListener('click', function () {
    theme = theme === 'plate' ? 'paper' : 'plate';
    root.dataset.theme = theme;
    store('theme', theme);
    renderStatic();
    pushHistory('\\pset theme ' + theme);
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

  /* ---------- boot ---------- */
  renderAll();
  initGlobe();
  updateScale();
  runQuery(null);
  requestAnimationFrame(function () { document.body.classList.add('is-loaded'); });
})();
