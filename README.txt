Tabletop Scene Board v4.1 — cache/update fix

WHAT CHANGED
- Keeps all V4 features, including Health Manager.
- The main app page now checks the live GitHub Pages version before using cache.
- If you are offline, the last cached page still opens.
- Old Scene Board caches are automatically removed when this service worker activates.
- The app visibly says "Campaign · Scene Board v4.1" so you can confirm the correct build loaded.
- The service worker registers with a versioned URL to force browsers to fetch the update.

UPLOAD TO GITHUB
Replace/upload these files in the repository root:
- index.html
- sw.js
- manifest.webmanifest
- icon-192.png
- icon-512.png

After GitHub Pages deploys:
1. Open the website in Chrome.
2. Refresh once.
3. Look for "Campaign · Scene Board v4.1".
4. You should also see Duplicate, Set Background / Video, Lock Position, and Health Manager.
5. If an already-installed PWA still shows the old UI, close it completely and reopen it after visiting the site once in Chrome. If needed, uninstall/reinstall the PWA one final time.
