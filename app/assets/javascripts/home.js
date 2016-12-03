var rotatorRunning = false,
    rotator;

document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/") {
    rotator = new ImageRotator();
    rotator.init();
    rotatorRunning = true;
  } else {
    if (rotatorRunning) {
      rotator.stop();
      rotatorRunning = false;
    }
  }
})


