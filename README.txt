Scene Board V6.10.1

Adds per-character walkie-talkie props and a GM Investigation Board with read-only Player Notes.

Scene Board v6.9.1 — Player Display Rework

What changed:
- Short-code Player Display pairing through the Scene Board Cloudflare signaling service.
- GM hosts and receives a code such as ABCD-12; Player joins using only that code.
- WebRTC offer/answer/ICE exchange is automatic.
- Campaign/media still travels directly GM ↔ Player over WebRTC; Cloudflare is signaling only.
- Initial Player Display sync is chunked with backpressure to improve reliability with larger images/media.
- GM receives an explicit “Player Display Ready” acknowledgement after the Player loads the scene/media.
- Resend Scene and clear failure/readiness messages are available.
- Player-safe initial sync sends only the current scene and currently visible characters; GM notes/background library are stripped.

Recommended: keep GM and Player devices on the same local network.


V6.10.1 update:
- Walkie-talkie size range expanded to 10–120 px with finer 2 px +/- steps.
- Walkie artwork replaced with a darker, more realistic late-70s/80s handheld radio style.
