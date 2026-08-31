Tabletop Scene Board PWA

FILES
- index.html
- manifest.webmanifest
- sw.js
- icon.svg

HOW TO RUN
A PWA needs to be served over HTTPS or localhost for installation/offline service-worker features.

Easy options:
1. GitHub Pages / Netlify / Cloudflare Pages: upload these files and open the HTTPS address.
2. Laptop test: run a simple local web server in this folder, then open localhost.
   Example with Python installed:
       python -m http.server 8000
   Then open:
       http://localhost:8000

CAMPAIGNS
- Save stores the campaign in IndexedDB on the current browser/device.
- Load shows campaigns saved on that device.
- Export downloads a JSON campaign containing the background and character images.
- Import loads that JSON on another device.
- New creates a fresh campaign.

INSTALL
- Android/Chrome/Edge: browser menu -> Install app / Add to Home screen.
- iPhone/iPad/Safari: Share -> Add to Home Screen.
- Desktop Chrome/Edge: use the Install icon in the address bar/menu when available.

CASTING
Use your device's screen-mirroring/casting feature, or connect a laptop by HDMI. Press TV View to hide GM controls.


MULTIPLE SCENES
- Each campaign can now contain multiple named scenes.
- Use New Scene to add locations such as Woods, Cabin, School, Lake, or Police Station.
- Use the Scene dropdown to switch instantly.
- Set Scene Background changes only the currently selected scene.
- Rename and Delete manage scene entries.
- Characters remain available while switching scenes.
- Old exported/saved campaign files from version 1 are automatically migrated into a single Scene 1.
