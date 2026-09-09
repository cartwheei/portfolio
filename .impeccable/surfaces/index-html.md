---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief — index.html (portfolio home)

## Scope and mode

Single-page portfolio, the whole site. Visitor mode: Experience. The work (a working globe joined to a PostGIS-style console) leads from the first viewport; the interface recedes into map-sheet furniture.

## Audience, job, action

GIS peers, researchers, hiring contacts arriving from LinkedIn/GitHub/ISPRS links, desktop and phone, TR and EN. Job: learn what Alper builds and how well, in under a minute. Actions: open a project link, read the publication, email.

## Proof and content

Real content only (PRODUCT.md, Evidence on Hand): 3 projects with images, ISPRS paper, SuperMap 2020 first prize, 2 degrees, 4 experience rows (Experience section only, never in the hero), 5 contact links. Bilingual EN + TR, TR default.

## Constraints

Static HTML/CSS/JS + d3/topojson, no build. Pinned hero composition: name and facts left, globe + psql/result console right. Employer names only in the Experience table. CV never linked. Keyboard-reachable globe points, reduced-motion respected, AA contrast in both themes.

## Direction contract

THESIS: The portfolio is a topographic map sheet printed in registered color plates. One black keyline plate draws every boundary, and each section is a single flat color plate (green vegetation, blue hydrography, brown contour, red publisher seals) that registers into the keyline. It refuses the category arrangement of a dark hero with a glowing network globe over a grid of same-size cards, and it refuses the export's single-accent white-ground modernist grid.

OWN-WORLD: Paper ground #f4efe4; keyline ink #1a1a1a as 3px frame rules and 1.5px inner rules; four plate colors used as flat sealed fields, never gradients: hydro blue #2f6f9f (tint #cfe0ec, 45° hatch), contour brown #a0522d (tint #ead2c3), vegetation green #6b9a5a (tint #d9e4cf), seal red #c8352b reserved for links-as-stamps and globe points. Registration marks (⊕) at the sheet corners. Controls are cartouches: boxed labels, active state prints its plate color, inactive shows keyline only; contact links are red rotated stamps. Type: Bitter 800 display and 700 headings (printed map-title serif), Bitter italic 400 in hydro blue for the notes that read like water names, Source Sans 3 400/600 body and tables, JetBrains Mono only in the psql console and coordinates. Dark theme is the plate view: ground #15130f, keyline becomes paper, plate hues hold, tints darken. Images print through one plate: grayscale under a multiply field of that section's color inside a keyline frame.

STORY: A visitor sees a map sheet come into register: name in the title cartouche, the globe drawn keyline-first, plates landing. They understand this person makes maps and spatial software, spins the globe, hovers or taps a place, watches the console query it and list the work there, jumps to a project, reads the plates below, and leaves through a red stamp to email or LinkedIn.

FIRST VIEWPORT: Sheet frame with corner registration marks. Sheet head strip: title cartouche "Alper Emek / GIS yazılım geliştirici" left, four nav cartouches (Projeler, Yetenekler, Deneyim, Eğitim) center, TR/EN and plate-view (theme) cartouches, three red stamps (e-posta, in, GitHub) right. Below, 5/7 grid: left the role line in blue italic, the name at clamp(56px, 6.4vw, 96px) Bitter 800, a four-row facts table (Alan, Yayın, Ödül, Konum) under a 3px rule, primary cartouche "Projeler" filled contour brown and the email as an outlined cartouche. Right, a keyline box: head strip "places.geom · EPSG:4326 · sürükle / noktaya gel", the d3 orthographic globe (blue hatched sea and graticule, green land, black coastline, red seal points with Bitter labels for İstanbul, Ankara, Antalya, Rotterdam, Rochester), a scale line, and under it the two-cell console: black psql cell typing the ST_Contains query on the shared clock, paper result cell listing rows that link to sections. Signature interaction: the registration sequence, keyline first, then blue, brown, green plates sliding 4–6px into register 300 ms apart on load and again per section on scroll; language and theme switches echo as psql meta-commands in the console.

FORM: Registered plate print, translated from the dealt challenger "edo woodblock block registration" (catalog id graphic-worlds-publishing-ukiyoe-block-registration) to topographic map color separation. Not on my grounded list; chosen by the user over the assigned direction (my candidate 7, hypsometric atlas plate) and my pick (candidate 1, desktop GIS workspace). Seed key a03a6900. Build path: code (no image generation in this harness). Decision sketches: .impeccable/mocks/decision/challenger-ukiyoe-sketch.html and assigned-sketch.html.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- Whether to load the SAR GIF (2.9 MB) lazily in view or keep only the poster; default: poster, GIF swapped in when the row is in view.
- Twitter link label: "Twitter" kept as the user gave it.
