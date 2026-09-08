Scene Board V6.10.3

Adds per-character walkie-talkie props and a GM Investigation Board with read-only Player Notes.

Scene Board v6.10.5 — Investigation Photo Framing

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


V6.10.3 update:
- Fixes the mobile Setup hotkey so it reliably enters Session Setup on phones and can return to GM Mode.
- Adds a dedicated Investigation Board button directly in Session Setup for pre-session editing.
- Keeps the Investigation Board fully editable by the GM in both Setup and Session modes.


V6.10.3: Fixed Walkie-Talkie plus/minus sizing controls so both directions use reliable numeric 2 px steps within the 10–120 px range.

V6.10.5 update:
- Adds an optional subtle red glow to each walkie-talkie for better visibility.
- Glow is per-character, saved with the campaign, and mirrored to Player Display.

V6.10.5: Investigation Board card photos can now be unlocked and repositioned directly, pinch/wheel zoomed, adjusted with zoom controls, reset, and locked. Photo framing syncs to Player Display.

V6.10.5 update:
- Investigation card photos can be reframed after upload. Unlock a photo, drag to reposition, pinch on touch screens or use mouse wheel/trackpad to zoom, then lock it.
- Photo Framing controls are in a dropdown directly under Add / Change Photo.
- Red-string connections are brighter and slightly thicker for visibility.
- Investigation cards are more opaque; hidden GM-prep cards remain visually distinct without becoming hard to read.
