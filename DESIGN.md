---
name: Alper Emek — Portfolio
description: A topographic map sheet printed in registered colour plates; one black keyline, four flat plate colours, paper ground.
colors:
  paper: "#f4efe4"
  paper-2: "#ebe4d5"
  key: "#1a1a1a"
  key-soft: "#3b3630"
  hydro: "#2f6f9f"
  hydro-text: "#24587d"
  hydro-2: "#cfe0ec"
  contour: "#a0522d"
  contour-text: "#7d3c1e"
  contour-2: "#ead2c3"
  veg: "#6b9a5a"
  veg-text: "#3f6b33"
  veg-2: "#d9e4cf"
  seal: "#b52d24"
  seal-dot: "#c8352b"
  on-plate: "#f4efe4"
  console-keyword: "#9fc4e0"
  console-string: "#e8b79a"
  console-function: "#b9d19a"
typography:
  display:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(58px, 7vw, 96px)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(36px, 4.2vw, 52px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(26px, 2.5vw, 34px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.2
  note:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(20px, 1.8vw, 25px)"
    fontWeight: 400
    lineHeight: 1.25
    fontVariation: "italic"
  meta:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
    fontVariation: "italic"
  body:
    fontFamily: "'Source Sans 3', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Source Sans 3', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
  control:
    fontFamily: "'Source Sans 3', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
  mono:
    fontFamily: "'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: "21px"
    letterSpacing: "0.02em"
rounded:
  none: "0"
  stamp: "3px"
  seal: "50%"
spacing:
  hair: "1.5px"
  rule: "3px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  gutter: "clamp(20px, 3.4vw, 48px)"
  plate-y: "clamp(48px, 6vw, 80px)"
components:
  cartouche:
    backgroundColor: "transparent"
    textColor: "{colors.key}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
    height: "38px"
  cartouche-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.key}"
  cartouche-printed:
    backgroundColor: "{colors.key}"
    textColor: "{colors.on-plate}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
  cartouche-primary:
    backgroundColor: "{colors.contour}"
    textColor: "{colors.on-plate}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
    height: "44px"
  cartouche-primary-hover:
    backgroundColor: "{colors.contour-text}"
    textColor: "{colors.on-plate}"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.seal}"
    rounded: "{rounded.stamp}"
    padding: "8px 12px"
    height: "38px"
  stamp-hover:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.paper}"
  stamp-lg:
    backgroundColor: "transparent"
    textColor: "{colors.seal}"
    rounded: "{rounded.stamp}"
    padding: "14px 20px"
    height: "52px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.key}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 9px 3px"
  keyline-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.key}"
    rounded: "{rounded.none}"
  focus:
    backgroundColor: "{colors.hydro}"
    textColor: "{colors.on-plate}"
    rounded: "{rounded.none}"
    padding: "28px 32px 30px"
  console-sql:
    backgroundColor: "{colors.key}"
    textColor: "{colors.paper}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "12px 18px 10px"
  console-result:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.key}"
    rounded: "{rounded.none}"
    padding: "12px 18px 10px"
---

# Design System: Alper Emek — Portfolio

## Overview

**Creative North Star: "The Registered Plate Print"**

The site is one topographic map sheet printed in colour separation. A single black keyline plate draws every boundary: the sheet frame, the sticky head strip, every table rule, every box, the coastline of the globe. Four flat plate colours (hydrography blue, contour brown, vegetation green, publisher's seal red) are pressed into that keyline one at a time, each owning one field of the page. Nothing is a gradient, nothing floats, nothing is rounded except a rubber stamp. Depth exists only as registration: a colour plate sits a few pixels off the black until it slides into place.

Density is that of a printed sheet, not a dashboard. Text is set in a map-title serif (Bitter) with a sans (Source Sans 3) for running copy and tables, and a monospace (JetBrains Mono) reserved for the psql console and coordinates. Labels are small, tracked, uppercase table headings in the keyline ink; notes that read like water names are set in Bitter italic in the hydro blue. The sheet has one ground: paper. There is no dark theme; the plate colours are printed once, on paper, and read the same way in every viewport.

The world was translated from Edo woodblock block registration (kento notches, one block per colour, red publisher seal) to topographic colour separation. It rejects the category defaults: no dark hero with a glowing network globe, no grid of same-size cards, no single-accent white modernist grid, no shadows.

**Key Characteristics:**
- One keyline ink draws every edge; two rule weights only, 3px frame and 1.5px inner.
- Four flat plate colours, each sealed to one section; a section never mixes plates.
- Paper ground, square cuts, zero radius everywhere except red stamps.
- Registration is the only motion: plates translate 4-16px into place with one ease and one duration.
- Controls are cartouches with a kento notch; active state prints the plate colour solid.
- Photographs print grayscale under a multiply field of the section's plate colour.

## Colors

A paper ground carrying one black keyline and four flat printing-plate colours, each with a text-safe dark and a pale tint. Single theme: paper only.

### Primary
- **Keyline Ink** (`key`): the one black plate. Every border, rule, frame, coastline, body text, and the printed fill of a pressed toggle.
- **Sheet Paper** (`paper`): the ground of the whole sheet and of every keyline box. **Paper 2** (`paper-2`) is the recessed paper: cartouche hover, sea fill on the globe, print frame backing, the result cell.
- **Soft Ink** (`key-soft`): secondary text (table heads, hints, colophon, fact labels, result sub-lines). Never used for borders.
- **On Plate** (`on-plate`): the text colour printed on any solid plate fill (pressed toggle, active nav cartouche, active place chip, the primary contour cartouche). Numerically equal to `paper`; kept as its own token so a filled control never reaches for literal white.

### Secondary
The four printing plates. Each has three values: the **plate** (flat fill, markers, list bullets, active nav cartouche), the **plate text** (italic notes and meta at AA on paper), and the **tint** (section ground). A section owns exactly one plate.
- **Hydro Blue** (`hydro` / `hydro-text` / `hydro-2`): the Now section (its tint as ground and, once, as the solid fill of the focus box with `on-plate` text), the globe's sea hatch and graticule, the title-role and hero role line, the contact note, result-row counts, education years, text selection. It is the voice of notes and water names.
- **Contour Brown** (`contour` / `contour-text` / `contour-2`): the Experience section, globe country borders, the primary call-to-action cartouche, experience periods, table-row hover.
- **Vegetation Green** (`veg` / `veg-text` / `veg-2`): the Projects section and globe land. Because green is the lightest plate, an active green nav cartouche keeps keyline text instead of paper.
- **Seal Red** (`seal`, dot `seal-dot`): the publisher's mark. Contact stamps, the Contact plate heading colour, globe place points and pulse ring, the active place cartouche, result-row hover text, and the focus ring. Never a section tint, never a rule.

### Neutral
- **Console Syntax** (`console-keyword`, `console-string`, `console-function`): the three highlight inks inside the psql cell, pale blue / pale brown / pale green echoes of the three plates. Console only.

### Named Rules
**The Keyline Rule.** Every edge on the sheet is drawn in `key` at 3px (frame, head strip, section tops, box borders, table heads) or 1.5px (inner rules, cartouche and tag borders, row dividers). Plate colours never draw a border except as the border of their own solid fill.

**The One Plate Rule.** A section carries a single plate: its tint as ground, its plate text for italic meta, its plate for bullets, markers, and the image overlay. Two plate colours never meet inside one section field; only the globe and the hero name register several plates, and there the black keyline sits on top.

**The Seal Reserve Rule.** Red is the publisher's seal, not an accent: links-as-stamps, globe points, the active place, the focus ring. It never fills a field, never tints a section, never draws a rule.

## Typography

**Display Font:** Bitter (with Georgia, Times New Roman, serif); weights 500, 700, 800, italic 400 and 500, from Google Fonts.
**Body Font:** Source Sans 3 (with Segoe UI, Roboto, Helvetica, Arial, sans-serif); weights 400, 600.
**Label/Mono Font:** JetBrains Mono (with SFMono-Regular, Menlo, Consolas, monospace); weights 400, 500.

**Character:** A printed map title (heavy slab serif, tight leading, slightly negative tracking) over a plain cartographic sans set with tabular numerals. Bitter italic in a plate colour is the annotation voice, the way water names are lettered in italic on a sheet. Mono appears only where the interface is literally a terminal or a coordinate readout.

### Hierarchy
- **Display** (Bitter 800, `clamp(58px, 7vw, 96px)`, 0.94, -0.015em): the name only. Printed in three registered plates: blue and brown copies offset (-1.5px, 1px) and (1.5px, -1px) under the black, multiply-blended on paper.
- **Headline** (Bitter 700, `clamp(36px, 4.2vw, 52px)`, 1.02, -0.012em): section headings in the left column of each plate; sticky at 112px on desktop.
- **Title** (Bitter 700, `clamp(26px, 2.5vw, 34px)`, 1.12, -0.01em): project titles. The Now focus title steps up one notch to `clamp(28px, 2.6vw, 36px)`/1.08 in `on-plate` on the solid hydro box.
- **Subtitle** (Bitter 700, 20px, 1.2): education/publication column heads (with a keyline rule under), entry titles; Now item titles at 21px. The head-strip name is Bitter 800 at 21px; globe labels Bitter 700 at 17px with a paper stroke.
- **Note** (Bitter italic 400, `clamp(20px, 1.8vw, 25px)`, 1.25): hero role line and contact note, always in `hydro-text`. Project meta uses the same voice at 17px in the section's plate text.
- **Meta** (Bitter italic 500, 16px, 1.5): years, periods, result-row counts; coloured by the plate that owns the field (`hydro-text` for education and results, `contour-text` for experience).
- **Body** (Source Sans 3 400, 17px, 1.55): running copy; 18px for the Now intro (66ch) and focus copy (62ch, 1.5), 16px in tables, entries, and Now items (52ch), 16.5px in lists; measure 52-66ch.
- **Label** (Source Sans 3 600, 12px, 0.1em, uppercase): table heads, fact labels, globe head strip, result title, tags (0.06em). Always a heading of a table or box, never a kicker above a title.
- **Control** (Source Sans 3 600, 13px, 0.1em, uppercase): cartouche text; hero action cartouches drop to sentence case at 15px.
- **Mono** (JetBrains Mono 400, 13.5px/21px): the psql query; 12px in head strips, coordinates, scale line, colophon; 0.02em tracking.

### Named Rules
**The Water-Name Rule.** Any secondary line of annotation (role, note, meta, years, counts) is Bitter italic in the owning plate's text colour. It is never uppercase, never tracked, never grey.

**The Console-Only Mono Rule.** JetBrains Mono appears only in the psql cell, the globe head strip, coordinates, the scale line, and the colophon. It never sets body copy, headings, or controls.

## Layout

The page is one sheet: a 3px keyline frame with 22px paper margin around it (14px under 720px, 10px under 420px) and four 20px registration marks centred on the corners. Inside, a sticky head strip divides into cells with 3px vertical rules: title cartouche, section nav, the TR/EN language switch, three red seals. The hero is a 5/7 grid (name and facts left, keyline globe box and console right) with a horizontal gutter of `clamp(20px, 3.4vw, 48px)` and column gap `clamp(32px, 4.5vw, 72px)`.

Below the hero, each section is a plate: a 3px rule on top, vertical padding `clamp(48px, 6vw, 80px)` above and `clamp(56px, 6vw, 88px)` below, a 3/9 grid with the headline in the narrow left column (sticky at 112px) and the body right. Section bodies use hairline-divided grids rather than cards: projects are 7/5 text/print rows separated by 1.5px rules with 40px vertical padding; the Now section is a solid hydro focus box over an 18px intro (3px keyline, 28px 32px 30px padding) and a two-column grid of items, each opened by a 1.5px rule; experience is a real table; education and publication are two columns of 108px-year entries.

Rhythm inside cells is 12px/18px (cell padding), 16px (table cells), 18px/22px (Now item top/bottom), 28px (Now intro, focus, and item-grid spacing); control gaps are 8-12px. Breakpoints: 1100px hides the head-strip seals; 960px collapses hero, plate, project, Now, and two-column grids to one column and tightens the focus box to 22px 20px 24px; 720px moves the nav out of the head strip into a 2x2 block of cartouches under it, puts the console cells in one column, and turns the experience table into one block per row with `data-th` labels; 420px hides the title role and makes hero actions full width.

## Elevation & Depth

There are no shadows anywhere. Depth is registration: a colour plate is a flat field that sits translated (-10px, 6px) off the keyline at 0 opacity and slides to (0, 0) at full opacity when the section enters view. Photographs get the same treatment: a grayscale image under a `multiply` field of the section's plate colour at 0.55 opacity, offset (-8px, 6px) until registered; hover lifts the print (-3px, -3px) and thins the field to 0.28. The hero name carries permanent blue and brown misregistration copies under the black. Hatch textures (45° hairlines in hydro, horizontal 13px contour lines in contour) are the only surface texture and sit inside the tint at 22% plate colour.

### Named Rules
**The Flat Impression Rule.** No `box-shadow`, no blur, no glow, no gradient fills. If something must read as "above", it is a solid plate translated off the keyline, or a 3px keyline box. The single permitted blend is `multiply` for a colour plate over a grayscale image.

## Shapes

Square cuts everywhere: 0 radius on boxes, cartouches, tags, table cells, prints. The two exceptions are the publisher's stamps (3px radius on a 2px seal border, rotated -2° or +1.6°) and the round stamp / registration marks / globe points (50%). Every cartouche carries a kento registration notch: a 7px square clipped from the top-left corner with `clip-path`, its two open sides closed by 1.5px hairlines in keyline ink; on a printed (filled) cartouche the hairlines drop and the notch simply shows the ground. Borders are 3px (frame, structural) or 1.5px (inner, control) and always in the keyline ink or the solid fill's own colour. List bullets are 7px keyline-less squares in hydro; project lists use square markers in the plate colour.

## Components

### Cartouche (buttons, links, nav, toggles)
A boxed label with a registration notch. The only control shape on the sheet.
- **Shape:** square, 1.5px keyline border, 7px kento notch top-left (`clip-path: polygon(0 7px, 7px 7px, 7px 0, 100% 0, 100% 100%, 0 100%)`), min-height 38px, padding 9px 14px; 34px/7px 10px in switches and place chips, 44px/12px 18px in hero actions.
- **Default:** transparent on paper, keyline text, Control type (600 13px uppercase 0.1em).
- **Hover:** ground turns to `paper-2`; 0.2s. **Active (pressed):** translate (1px, 1px), 0.18s registration ease.
- **Printed (aria-pressed / aria-current):** fills solid. Toggles print `key` with `on-plate` text; nav cartouches print their section's plate (`--plate` set by `data-plate`), green keeps keyline text; place chips print `seal`. The notch hairlines disappear on a printed cartouche.
- **Primary (`.fill-contour`):** solid `contour`, `on-plate` text, hover darkens to `contour-text`. Used once, for the hero call to action.
- **Segmented (`.seg`):** adjacent cartouches overlap borders by 1.5px.
- **Focus:** 2px `seal` outline, offset -4px inside the box.

### Stamp (contact links)
A rubber seal: 2px `seal` border, 3px radius, `seal` text in Bitter 700 13px, rotated -2° (`.alt` +1.6°), transparent ground. Round variant 40px circle for the LinkedIn mark. Large variant 52px / 14px 20px / 18px for the Contact plate. Hover and focus fill solid `seal`, text turns paper, rotation squares to 0 at scale 0.98.

### Tag
Uppercase Source Sans 600 12px at 0.06em in a 1.5px keyline box, padding 4px 9px 3px, transparent. Technology tags under project meta; no states.

### Keyline Box (globe box, print, focus, table, sheet)
- **Corner Style:** square.
- **Border:** 3px `key` for the sheet, head strip, globe box, prints, focus box, table heads; 1.5px for the Now item rules, experience table body, inner rules.
- **Background:** `paper`; `paper-2` for print backing and the result cell.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Internal Padding:** 10px 16px head strips, 12px 18px cells, 16px table cells, 28px 32px 30px the focus box.

### Sheet Head (navigation)
Sticky at top 0 inside the frame, `paper` ground, 3px keyline rule below and between cells. Cells: title cartouche (Bitter 800 21px name, Bitter italic 15px role in `hydro-text`), four nav cartouches (Projeler / Şu an / Deneyim / Eğitim, EN Work / Now / Experience / Education; `data-plate` veg, hydro, contour, key; active prints the section plate as the visitor scrolls), TR/EN segment, three stamps. Under 1100px the stamps drop; under 720px the nav leaves the strip and prints as a 2x2 block of cartouches below it.

### Plate (section field)
A section owning one plate: `--tint`, `--plate-text`, `--plate` set by `.plate-veg` / `.plate-hydro` / `.plate-contour` / `.plate-key` / `.plate-seal`. The tint is drawn on `::before` and registers in on `.is-in` (IntersectionObserver). Hydro carries a 45° hairline hatch, contour horizontal contour lines; key and seal plates have transparent tints.

### Print (project image)
A 3px keyline figure, 3:2 frame, `paper-2` backing. Image grayscale (contrast 1.1) under a multiply field of the section plate at 0.55; registers in with the row; hover lifts the print (-3px, -3px), scales the image 1.02, and lets 60% of the colour through.

### Globe
An orthographic d3 globe drawn as registration layers: `.pl-key` (coastline 1.1px and 3px rim in `key`), `.pl-blue` (sea in `paper-2` with hydro hatch, 15° graticule in `hydro`), `.pl-brown` (borders 0.8px `contour`), `.pl-green` (land `veg`), `.pl-seal` (6.5px `seal-dot` points with a 1.5px paper stroke, 12px pulse ring, Bitter 700 17px labels with a 4px paper stroke). Active point fills `key` at 1.25 scale with an infinite ring pulse. The globe redraws only when rotation or hover state changed (a dirty flag in the frame loop), so an idle sheet costs nothing. Head strip: mono layer name, hydro coordinates, soft hint. Scale line: a 30px half-filled keyline bar, mono scale text, mono projection. Place chips are cartouches that print `seal` when active.

### Console (psql + result)
Two cells under a 3px rule, split by a 3px vertical rule. Left, the psql cell: `key` ground, paper mono text at 13.5px/21px typed at 96 characters per second, keyword/string/function inks, a blinking 8x15 caret, and a 60%-opacity history list of the last three meta-commands (`\set lang tr` / `\set lang en`). Right, the result cell: `paper-2` ground, Label title, rows divided by 1.5px hairlines; each row is a link or button with 600 name, soft sub-line, and an italic `hydro-text` count or year; hover turns the name `seal`. Rows enter with a 0.35s slide staggered 0.05s.

### Now (current work)
The hydro plate's body, three pieces in one column: the **focus box** first (the keyword the section opens on), then an intro paragraph (Source Sans 3 18px/1.55, 66ch), then the **item grid**.
- **Focus box:** the one solid plate field on the sheet. 3px `key` border, `hydro` fill, `on-plate` text, padding 28px 32px 30px (22px 20px 24px under 960px), 28px below. Title Bitter 700 `clamp(28px, 2.6vw, 36px)`/1.08 at -0.01em with 12px under; copy 18px/1.5, 62ch. No hatch, no radius, no shadow; it is a plate printed solid inside its own tint. One per section.
- **Item grid:** two equal columns, gap `clamp(24px, 3vw, 48px)`, one column under 960px. Each item opens with a 1.5px `key` rule, padding 18px 0 22px; title Bitter 700 21px/1.2 with 8px under; copy Source Sans 3 16px/1.5, 52ch. No boxes, no bullets, no tags.

### Experience Table
Full-width 1.5px keyline table, Label heads over a 3px rule, 16px cells, periods in italic `contour-text`, org 600, place soft; row hover tints `contour-2`. Under 720px it collapses to one block per row with `data-th` labels.

### Motion
One ease, `cubic-bezier(.2, .8, .2, 1)`, and one duration, 0.7s, for every registration. On load: name plates (1s, blue at 0.15s, brown at 0.45s), then globe plates keyline-first, blue 0.3s, brown 0.6s, green 0.9s, seal 1.2s (`reg-b`/`reg-r`/`reg-g`/`reg-s`, sliding 5-7px). Per section on scroll: tint and print register in over 0.7s. Micro: 0.18-0.2s for control states, 0.5s for print hover, 1.6s ease-out infinite ring pulse, 1s stepped caret blink. Under `prefers-reduced-motion: reduce` every animation and transition is removed and all plates sit registered.

## Do's and Don'ts

### Do:
- **Do** draw every edge in the keyline ink at 3px or 1.5px; add a rule before adding space.
- **Do** give a new section exactly one plate (tint ground, plate text for italics, plate for markers) and register it in on scroll with the 0.7s ease.
- **Do** make every control a cartouche with the kento notch; an active state prints solid in its plate colour.
- **Do** set annotation lines (roles, meta, years, counts) in Bitter italic in the owning plate's text colour.
- **Do** print images grayscale under a multiply field of the section plate inside a 3px keyline frame.
- **Do** keep red for stamps, globe points, the active place, and focus; a red stamp is always rotated and always a link.

### Don't:
- **Don't** use box-shadow, blur, glow, or gradient fills; depth is a translated flat plate.
- **Don't** round corners except the 3px stamp and 50% seals, marks, and points.
- **Don't** mix two plate colours inside one section field or draw a border in a plate colour.
- **Don't** set body, headings, or controls in JetBrains Mono; it belongs to the console and coordinates only.
- **Don't** use uppercase tracked labels as kickers above titles; Label type heads a table, box, or strip.
- **Don't** introduce cards with equal boxes; sections are hairline-divided rows, columns, and tables on the plate.
- **Don't** add a second ease or duration for registration; everything registers with `cubic-bezier(.2, .8, .2, 1)` over 0.7s.
- **Don't** add a second theme or ground; the sheet is paper only, and a solid fill takes `on-plate` text, never literal white.
