var crossFaderRunning = false,
    crossFader;

document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/about") {
    crossFader = new crossFader();
    crossFader.init();
    crossFaderRunning = true;
  } else {
    if (crossFaderRunning) {
      crossFader.stop();
      crossFaderRunning = false;
    }
  }
})