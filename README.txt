TABLETOP SCENE BOARD V6.4.1 — HOTFIX

FIXED
- Bottom navigation buttons work again.
- Background upload works again.
- Foreground upload works again.
- GM Notes / Health / Display controls initialize normally.
- The V6.4 transition options remain:
  Instant
  Fade to Black
  Slide In From Left
  Slide In From Right
  Slide In From Bottom
  Slide In From Top
- 0–5 second transition duration remains.

CAUSE
A leftover fragment from the older Fade transition function remained after the V6.4 transition upgrade. That created a JavaScript syntax error, which prevented the rest of the app's controls from initializing.

This package is cumulative and includes all prior V6.x features and fixes.

GITHUB UPDATE
Replace:
index.html
sw.js
manifest.webmanifest
icon-192.png
icon-512.png

Confirm the header says “Campaign · Scene Board v6.4.1”.
