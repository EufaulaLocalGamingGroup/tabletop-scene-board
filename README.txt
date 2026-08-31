Tabletop Scene Board PWA v3

WHAT'S NEW
- Share Campaign uses your phone/tablet native share sheet when supported.
- Export File remains as a fallback.
- Import Campaign loads a campaign file someone sends you.
- Multiple named scenes remain supported.
- Each scene can have its own background.
- Hidden characters remain completely invisible in the player scene.
- Save/Load use browser storage on the current device.

REPLACE YOUR GITHUB VERSION
Upload these files to the ROOT of the same GitHub repository and replace the existing copies:
- index.html
- manifest.webmanifest
- sw.js
- icon.svg
- README.txt

After GitHub Pages updates, refresh the site. If the installed PWA still shows the old version, close it fully and reopen it. Chrome may briefly cache the prior service worker.

SHARING
Open a campaign and press Share Campaign. On supported Android/iPhone browsers, choose Messages, Discord, email, Drive, etc. The recipient opens the same Scene Board site and presses Import Campaign.

If native file sharing is unavailable, use Export File and send the downloaded .scene-board.json manually.
