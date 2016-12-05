document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/gallery") {
    var photoGallery = new ImageGallery();
    photoGallery.addGallery("allPhotos");

    /// gallery menu ///
    $("[data-gallery-link]").click(function(){
      showContentContainer($(this));
    });

    /// photo menu ///
    $("[data-photo-link]").click(function() {
      photoGallery.addGallery($(this).data("photo-link"));
      showContentContainer($(this));
    });
  }

  function showContentContainer(element) {
    var contentContainer = element.parent().data("content-container"),
        contentName = Object.keys(element.data())[0],
        content = element.data(contentName);
    element.siblings(".active").removeClass("active");
    $(contentContainer).children(".active").removeClass("active");
    $("#"+content+"").addClass("active");
    element.addClass("active");
  }
});

