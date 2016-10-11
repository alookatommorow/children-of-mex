document.addEventListener("turbolinks:load", function() {
  var pageIndex = {
    "/contact/": "Contact",
    "/": "Home",
    "/faq": "Volunteer FAQ",
    "/about": "About",
    "/gallery": "Gallery",
    "/news": "News and Events"
  }
  var pageTitle = pageIndex[window.location.pathname];
  $("a:contains("+pageTitle+")").addClass("active");

  /// toggle nav menu caret display ////
  $("#show-menu").click(function() {
    if(window.innerWidth <= 600) {
      $(".fa-caret-down").toggle();
      $(".fa-caret-up").toggle();
    }
  })
});
