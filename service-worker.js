// FishWindow v6 — unregister legacy caches.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>event.waitUntil(Promise.all([self.registration.unregister(),self.clients.claim()])));
