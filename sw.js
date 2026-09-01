const CACHE="scene-board-v6-6";
const STATIC_ASSETS=["./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC_ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
async function networkFirst(req){try{const r=await fetch(req,{cache:"no-store"});if(r&&r.ok){const c=await caches.open(CACHE);await c.put("./",r.clone())}return r}catch(e){return(await caches.match(req))||(await caches.match("./"))||new Response("<h1>Scene Board is offline</h1>",{headers:{"Content-Type":"text/html"}})}}
async function cacheFirst(req){const c=await caches.match(req);if(c)return c;const r=await fetch(req);if(r&&r.ok)(await caches.open(CACHE)).put(req,r.clone());return r}
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;if(e.request.mode==="navigate"||e.request.destination==="document")e.respondWith(networkFirst(e.request));else e.respondWith(cacheFirst(e.request))});
