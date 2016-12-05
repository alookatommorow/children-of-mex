var crossFaderRunning = false,
    haveCrossFader = false,
    COMIcrossFader;

document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/about") {
    if (!haveCrossFader) {
      COMIcrossFader = new crossFader();
      haveCrossFader = true;
    }
    COMIcrossFader.init();
    crossFaderRunning = true;
  } else {
    if (crossFaderRunning) {
      COMIcrossFader.stop();
      crossFaderRunning = false;
    }
  }
})