var allPhotos = ["IMG0456", "DSC00461", "DSC01000", "DSC01506", "DSC01718", "DSC01723", "DSC01782", "DSC00635", "DSC02794", "DSC02850", "DSC02873", "DSC02879", "DSC02891", "IMG0119", "IMG0131", "IMG0148", "IMG0166", "IMG0170", "DSC00896", "IMG0174", "IMG0179", "IMG0267", "IMG0285", "IMG0363", "IMG0474", "IMG0488", "IMG0529", "IMG0668", "IMG0741"],
    sixteen = ["IMG0456", "DSC02794", "DSC02850", "DSC02873", "DSC02879", "DSC02891", "IMG0119", "IMG0131", "IMG0148", "IMG0166", "IMG0170", , "IMG0174", "IMG0179", "IMG0267", "IMG0285", "IMG0363", "IMG0474", "IMG0488", "IMG0529", "IMG0668", "IMG0741"],
    fifteen = ["DSC00461", "DSC01000", "DSC01506", "DSC01718", "DSC01723", "DSC01782", "DSC00635", "DSC00896"],
    allGallery = [],
    sixteenGallery = [],
    fifteenGallery = [];

document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/gallery") {
    var photoGallery = new ImageGallery();
        photoGallery.addGallery("allPhotos");

    $("[data-photo-link]").click(function() {
      photoGallery.addGallery($(this).data("photo-link"));
      showContentContainer($(this));
    });

    /// gallery logic ///
    $("[data-gallery-link]").click(function(){
      showContentContainer($(this));
    });
  }

  function showContentContainer(element) {
    var contentContainer = element.parent().data("content-container")
    var contentName = Object.keys(element.data())[0];
    var content = element.data(contentName);
    element.siblings(".active").removeClass("active");
    $(contentContainer).children(".active").removeClass("active");
    $("#"+content+"").addClass("active");
    element.addClass("active");
  }

});

