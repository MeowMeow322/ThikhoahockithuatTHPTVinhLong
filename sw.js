// Service worker: lưu trang và thư viện vào bộ nhớ trình duyệt để mở được khi mất mạng.
// Đổi số phiên bản (v1 -> v2) mỗi khi cập nhật trang để người dùng nhận bản mới.
const CACHE = 'mindart-v4';
const CORE = ['./', './index.html', './manifest.webmanifest', './favicon.png', './icon-192.png', './icon-512.png'];
const SKIP = /youtube\.com|youtu\.be|googlevideo\.com|ytimg\.com/;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || !r.url.startsWith('http') || SKIP.test(r.url)) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const hit = await cache.match(r, { ignoreSearch: r.mode === 'navigate' });
    const net = fetch(r).then((res) => {
      if (res && (res.ok || res.type === 'opaque') && res.status !== 206) cache.put(r, res.clone()).catch(() => {});
      return res;
    }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || (r.mode === 'navigate' ? cache.match('./index.html') : Response.error());
  }));
});
