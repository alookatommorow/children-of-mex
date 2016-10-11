document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/") {
    new ImageRotator().init();
  }
})
