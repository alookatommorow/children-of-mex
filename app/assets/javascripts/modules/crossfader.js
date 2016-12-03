function crossFader(){
  var $active = $('.about-images .active'),
      $next = ($active.next().length > 0) ? $active.next() : $('.about-images img:first'),
      interval;

  this.init = function() {
    interval = setInterval(crossFade, 7000);
  }

  this.stop = function() {
    clearInterval(interval);
  }

  function crossFade() {
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500, function() {//fade out the top image
      $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
    });
  }
}