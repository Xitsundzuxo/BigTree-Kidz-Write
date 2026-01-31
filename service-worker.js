self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("bigtree-kidz-write").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/app.js",
        "/draw.js",
        "/speech.js",
        "/styles/style.css"
      ]);
    })
  );
});
