document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/gallery") {
    new ImageGallery().init();
  }
});