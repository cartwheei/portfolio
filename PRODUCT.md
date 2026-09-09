# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step. d3 (geo, drag, timer) and topojson-client for the globe, loaded as pinned CDN scripts. Deployed on Netlify (https://alperemek.netlify.app/) from the GitHub repo cartwheei/portfolio. Replaces the current `index.html`, `css/`, `js/` structure. Confirmed by the user 2026-09-09.

## Users

Primary: peers, researchers, and hiring contacts in GIS, remote sensing, and geospatial software who arrive from a LinkedIn, GitHub, or publication link, on desktop or phone, to answer "what does this person build and how well". Turkish and English speakers in roughly equal measure; the site is bilingual EN + TR.

## Product Purpose

Personal portfolio of Alper Emek, GIS software developer. Presents independent projects, a publication, an award, education, work history, and contact links. Success: a first-time visitor understands within seconds that this is a full-stack web GIS developer, and reaches a project link or the contact email.

## Positioning

Full-stack web GIS: interactive maps, dashboards, REST APIs, spatial databases, backed by a remote-sensing and deep-learning record (published U-Net building detection on SAR imagery, first prize at SuperMap GIS Contest 2020). The site demonstrates GIS craft in its own interface (a working globe, spatial-query framing) instead of only describing it.

## Operating Context

Content is small and stable: 3 projects, 1 publication, 1 award, 2 degrees, 4 experience rows, 5 contact links. Visitors come from external links and scan; nobody logs in or returns daily. Hosting is static Netlify from `master`.

## Capabilities and Constraints

- Bilingual EN + TR with a visible toggle; every string exists in both languages. Default language TR, as in the approved design export.
- Employer content (decided 2026-09-09, supersedes the 2026-09-08 "no employer content" decision): the Experience table (organisation, role, period, place) stays, in the Experience section only. No employer name or job title appears in the hero, the lead claim, or the globe console.
- Confirmed interactions to build: (1) the globe + PostGIS console hero, enhanced: clickable and keyboard-reachable points, jump to the related project, real query/result pairing, touch support; (2) page rhythm: scroll reveals, coordinate/EPSG counters, light/dark theme toggle.
- Declined 2026-09-09: a real web map section (MapLibre/Leaflet) and project showcase sliders (before/after, layer toggles).
- The CV is never linked or embedded (it contains a phone number). No `docs/` content exists in the repo today.
- Static site, no backend, no analytics decided.
- Terminology: PostGIS, `ST_Contains`, EPSG:4326, SAR, U-Net, WebGIS, SuperMap, ISPRS Archives.

## Brand Commitments

- Name on the site: "Alper Emek" (legal name Recai Alper Emek; current tab title uses it, the site body does not).
- Binding footer/contact links: email recaialperemek@gmail.com, LinkedIn https://www.linkedin.com/in/alper-emek-362520159/, GitHub https://github.com/cartwheei, Twitter https://twitter.com/AlperEmek, Facebook https://www.facebook.com/alper.emekk/.
- Replaceable assets: graduation photo `img/alper.PNG` and globe logo `img/alper_logo.png` may be replaced or dropped.
- Pinned composition (2026-09-09): the hero of the Claude Design export at `claude-export/Alper Emek Portfolio.html`: name and facts on the left, globe with places and a psql/result console on the right. Palette, typography, section order, and the rest of the visual grammar are open.

## Evidence on Hand

- `img/spacenet.gif`: SAR building-detection animation (SpaceNet 6), 2.9 MB. `img/supermap.png`: Rochester real-estate WebGIS screenshot, 1.1 MB. `img/bitirme2.png`: BSc thesis desktop UI screenshot (weak as a hero image). `img/gis.jpg`: generic map texture. `img/alper.PNG` 3.3 MB photo, `img/alper_logo.png`.
- External proof: ISPRS Archives XLIV-4/W3-2020 paper https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLIV-4-W3-2020/215/2020/ ; LinkedIn post on the SuperMap 2020 first prize (with Görkem Acar) https://www.linkedin.com/posts/alper-emek-362520159_gis-supermap-webgis-activity-6727545753889185792-Lct5 ; ResearchGate thesis https://www.researchgate.net/publication/329940084_GORUNTU_SINIFLANDIRMA_ARAYUZU_PYTHON_VE_K-ORTALAMA_YONTEMI
- Facts in the design export (bilingual copy): experience rows Netcad Yazılım A.Ş. 06/2022– and 06/2021–06/2022 (Istanbul), Geotech Maps Ltd. 02–06/2021 (Ankara), Enge Harita Mühendislik Ltd. 09/2018–05/2020 (Antalya, co-founder); education Akdeniz Üniversitesi MSc GIS & Remote Sensing 2019–2022, Yıldız Teknik Üniversitesi BSc Geomatics Engineering 2013–2018; stack groups (front-end & maps, back-end, databases, GIS & remote sensing).
- Absent, never to be fabricated: testimonials, client names beyond the above, metrics, downloads, pricing.

## Product Principles

1. Prove GIS craft in the interface itself: the globe and console are working demonstrations, not decoration.
2. Projects, publication, and award lead; employment is supporting evidence in its own section.
3. Both languages are first-class; nothing exists in one language only.
4. Ship as static files; no dependency that needs a build or a backend.
5. Real content only; no invented claims, clients, or numbers.

## Accessibility & Inclusion

Globe points and every control reachable by keyboard; auto-rotation and reveals respect `prefers-reduced-motion`; body and label text meets WCAG AA contrast in both themes; language switch announced to assistive tech.
