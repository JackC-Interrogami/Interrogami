/* Service worker di Interrogami: salva l'app nel telefono così si apre anche senza rete.
   Le chiamate a Gemini passano sempre da internet. */
const CACHE = "interrogami-v4";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.hostname.endsWith("googleapis.com") && url.hostname !== "fonts.googleapis.com") return; // Gemini: sempre in rete
  const sameOrigin = url.origin === self.location.origin;
  const cdn = /fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com/.test(url.hostname);
  if (!sameOrigin && !cdn) return;
  // prima la rete (così gli aggiornamenti arrivano subito), se manca la rete usa la copia salvata
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r && (r.ok || r.type === "opaque")) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request).then((m) => m || (sameOrigin ? caches.match("./index.html") : undefined)))
  );
});
