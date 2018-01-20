document.addEventListener("turbolinks:load", function() {
  var pageIndex = {
    "/contact": "Contact",
    "/apply": "Apply",
    "/": "Home",
    "/faq": "FAQ",
    "/about": "About",
    "/gallery": "Gallery",
    "/news": "News/Events",
    "/testimonials": "Testimonials"
  },
  pageTitle = pageIndex[window.location.pathname];

  $("a:contains("+pageTitle+")").addClass("active");

  /// toggle nav menu caret display ////
  $("#show-menu").click(function() {
    if(window.innerWidth <= 600) {
      $(".fa-caret-down").toggle();
      $(".fa-caret-up").toggle();
    }
  })
});
