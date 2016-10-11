document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/gallery") {
    new ImageGallery().init();
  }

  /// gallery logic ///
  $("[data-media-link]").click(function(){
    var content = $(this).data("media-link");
    $(".gallery.well .active").removeClass("active")
    $(""+content+"").addClass("active");
    $(this).addClass("active")
  });
});