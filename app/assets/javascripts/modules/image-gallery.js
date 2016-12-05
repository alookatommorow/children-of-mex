function ImageGallery(imageNames, galleryId) {

  var currentIndex = 0,
      active = false,
      $photos,
      lastIndex,
      $thumbs;

  this.init = function() {
    populate();
    instantiateVars();
  }

  function populate() {
    imageNames.forEach(function (image) {
      $(galleryId).children(".carousel-image-container").append("<div class='gallery-image'><img src='"+generateUrl(image)+"'></div>");
      $(galleryId).children(".photo-thumbnails").append("<div class='circle-container'><div class='circle gallery-thumbnail'></div></div>")
    });
  }

  function instantiateVars() {
    $photos = $(galleryId + ' .carousel-image-container div');
    lastIndex = $photos.length - 1;
    $thumbs = $(galleryId + " .circle-container");
    $photos.eq(currentIndex).show();
    $thumbs.first().children().addClass("active-photo");
  }

  function selectNextThumb(next) {
    $(galleryId+" .active-photo").removeClass("active-photo");
    next.addClass("active-photo");
  }

  function showNext() {
    var $currentPhoto = $photos.eq(currentIndex);
    var $nextThumb = $thumbs.eq(currentIndex + 1).children();
    if (currentIndex === lastIndex) {
      $currentPhoto.hide();
      $photos.first().show();
      selectNextThumb($thumbs.first().children());
      currentIndex = 0;
    } else {
      $currentPhoto.hide();
      $currentPhoto.next().show();
      selectNextThumb($nextThumb);
      currentIndex++;
    }
  }

  function showPrev() {
    var $currentPhoto = $photos.eq(currentIndex),
        $nextThumb = $thumbs.eq(currentIndex - 1).children();
    if (currentIndex === 0) {
      $currentPhoto.hide();
      $photos.last().show();
      selectNextThumb($nextThumb);
      currentIndex = lastIndex;
    } else {
      $currentPhoto.hide();
      $currentPhoto.prev().show();
      selectNextThumb($nextThumb);
      currentIndex--;
    }
  }

  $(" .carousel-button").click(function() {
    // console.log($(".photo-group.active").attr("id"))
    if ("#"+$(".photo-group.active").attr("id") === galleryId) {
      if ($(this).data("carousel") === "prev") {
        showPrev();
      } else {
        showNext();
      }
    };
  });

  $(galleryId + " .carousel-image-container").on("click", ".gallery-image", function() {
    showNext();
  });

  $(galleryId + " .photo-thumbnails").on("click", ".gallery-thumbnail", function() {
    nextIndex = $(this).parent().index();
    var $currentPhoto = $photos.eq(currentIndex);
    $currentPhoto.hide();
    $photos.eq(nextIndex).show();
    selectNextThumb($thumbs.eq(nextIndex).children());
    currentIndex = nextIndex;
  });

  //key navigation logic
  if ($("#photo").hasClass("active")) {
    $(document).on('keydown', function(event) {
      if ("#"+$(".photo-group.active").attr("id") === galleryId) {
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
