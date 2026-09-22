// FishWindow v5: disable legacy cache to prevent stale app versions.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>event.waitUntil(
  Promise.all([self.registration.unregister(), self.clients.claim()])
));
