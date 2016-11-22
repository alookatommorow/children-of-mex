document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/about") {
    setInterval(crossFade, 7000);
  }
})