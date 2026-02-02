self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // HOME offline
  if (url.pathname === "/" || url.pathname === "") {
    event.respondWith(
      caches.match("/index.html").then((res) => {
        return res || fetch("/index.html");
      })
    );
    return;
  }
});
