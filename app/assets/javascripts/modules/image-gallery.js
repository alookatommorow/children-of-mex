function ImageGallery() {
  var photoGallery = {
    allPhotos: ["IMG0456", "DSC00461", "DSC01000", "DSC01506", "DSC01718", "DSC01723", "DSC01782", "DSC00635", "DSC02794", "DSC02850", "DSC02873", "DSC02879", "DSC02891", "IMG0119", "IMG0131", "IMG0148", "IMG0166", "IMG0170", "DSC00896", "IMG0174", "IMG0179", "IMG0267", "IMG0285", "IMG0363", "IMG0474", "IMG0488", "IMG0529", "IMG0668", "IMG0741"],
    sixteen: ["IMG0456", "DSC02794", "DSC02850", "DSC02873", "DSC02879", "DSC02891", "IMG0119", "IMG0131", "IMG0148", "IMG0166", "IMG0170", , "IMG0174", "IMG0179", "IMG0267", "IMG0285", "IMG0363", "IMG0474", "IMG0488", "IMG0529", "IMG0668", "IMG0741"],
    fifteen: ["DSC00461", "DSC01000", "DSC01506", "DSC01718", "DSC01723", "DSC01782", "DSC00635", "DSC00896"],
  },
      currentIndex = 0,
      activeGallery = "allPhotos",
      galleryData = {
        allPhotos: {},
        sixteen: {},
        fifteen: {},
      };

  this.addGallery = function(gallery) {
    if (Object.keys(galleryData[gallery]).length === 0) {
      createImageContainers(gallery);
      instantiateVars(gallery);
      setListeners(gallery);
    }
    activeGallery = gallery;
  }

  function createImageContainers(gallery) {
    photoGallery[gallery].forEach(function(image) {
      $("#"+gallery).children(".carousel-image-container").append("<div class='gallery-image'><img src='"+generateUrl(image)+"'></div>");
      $("#"+gallery).children(".photo-thumbnails").append("<div class='circle-container'><div class='circle gallery-thumbnail'></div></div>")
    });
  }

  function instantiateVars(gallery) {
    galleryData[gallery]["photos"] = $("#"+gallery + ' .carousel-image-container div');
    galleryData[gallery]["lastIndex"] = galleryData[gallery]["photos"].length - 1;
    galleryData[gallery]["currentIndex"] = 0;
    galleryData[gallery]["thumbs"] = $("#"+gallery + " .circle-container");
    galleryData[gallery]["photos"].eq(currentIndex).show();
    galleryData[gallery]["thumbs"].first().children().addClass("active-photo");
  }

  function selectNextThumb(next) {
    $("#"+ activeGallery + " .active-photo").removeClass("active-photo");
    next.addClass("active-photo");
  }

  function showPrev() {
    var $currentPhoto = galleryData[activeGallery]["photos"].eq(galleryData[activeGallery]["currentIndex"]),
        $nextThumb = galleryData[activeGallery]["thumbs"].eq(galleryData[activeGallery]["currentIndex"] - 1).children();
    if (galleryData[activeGallery]["currentIndex"] === 0) {
      $currentPhoto.hide();
      galleryData[activeGallery]["photos"].last().show();
      selectNextThumb($nextThumb);
      galleryData[activeGallery]["currentIndex"] = galleryData[activeGallery]["lastIndex"];
    } else {
      $currentPhoto.hide();
      $currentPhoto.prev().show();
      selectNextThumb($nextThumb);
      galleryData[activeGallery]["currentIndex"]--;
    }
  }

  function showNext() {
    var $currentPhoto = galleryData[activeGallery]["photos"].eq(galleryData[activeGallery]["currentIndex"]),
        $nextThumb = galleryData[activeGallery]["thumbs"].eq(galleryData[activeGallery]["currentIndex"] + 1).children();
    $currentPhoto.hide();
    if (galleryData[activeGallery]["currentIndex"] === galleryData[activeGallery]["lastIndex"]) {
      galleryData[activeGallery]["photos"].first().show();
      selectNextThumb(galleryData[activeGallery]["thumbs"].first().children());
      galleryData[activeGallery]["currentIndex"] = 0;
    } else {
      $currentPhoto.next().show();
      selectNextThumb($nextThumb);
      galleryData[activeGallery]["currentIndex"]++;
    }
  }

  function setListeners(gallery) {
    $("#"+gallery+ " .carousel-image-container").on("click", ".gallery-image", function() {
      showNext();
    });

    $("#"+gallery+ " .carousel-image-container").on("click", ".gallery-image", function() {
      showNext();
    });

    $("#" + gallery + " .photo-thumbnails").on("click", ".gallery-thumbnail", function() {
      var nextIndex = $(this).parent().index();
      var $currentPhoto = galleryData[activeGallery]["photos"].eq(currentIndex);
      $currentPhoto.hide();
      $photos.eq(nextIndex).show();
      selectNextThumb(galleryData[activeGallery]["thumbs"].eq(nextIndex).children());
      currentIndex = nextIndex;
    });
  }

  $(" .carousel-button").click(function() {
    if ($(".photo-group.active").attr("id") === activeGallery) {
      if ($(this).data("carousel") === "prev") {
        showPrev();
      } else {
        showNext();
      }
    };
  });

  //key navigation logic
  if ($("#photo").hasClass("active")) {
    $(document).on('keydown', function(event) {
      if ($(".photo-group.active").attr("id") === activeGallery
        ) {
        event = event || window.event;
        switch(event.which || event.keyCode) {
          case 37: // left
            showPrev();
          break;

          case 39: //right
            showNext();
          break;

          default: return; // exit this handler for other keys
        }
      }
    });
  }
}
