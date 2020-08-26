
  $('.slider').slick({
    slidesToShow: 4,
    arrows: true ,
    dots: true,
    infinite: true,
    speed: 10000,
    autoplaySpeed:0,
    cssEase: 'linear',
    autoplay:true,

     responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
        
      }
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow:2
        
      }
    },
    
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2
        
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Smooth scrolling using jQuery easing
    $('[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
// Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#sticker',
      offset: 80
    });
  


$(document).ready(function(){
  $("#sticker").sticky({
    topSpacing:0
  });
});


var image = document.getElementsByClassName('parallax1');
new simpleParallax(image, {
 orientation :'right'
});

var image = document.getElementsByClassName('parallax2');
new simpleParallax(image, {
 orientation :'up left'
});

var image = document.getElementsByClassName('parallax3');
new simpleParallax(image, {
 orientation :'up right'
});



jQuery(function( $ ){

  var $body=$("body"),
  $TweenMax=$(".Illustration");

  TweenMax.set( $TweenMax, { transformStyle: 'preserve-3d'  }); 
  $body.mousemove(function(e) {

    var sxPos =  e.pageX / $body.width()  * 100 - 50;
    var syPos =  e.pageY / $body.height() * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to( $TweenMax, 1, { 
      rotationY: 0.25 * 
      sxPos, rotationX: 0.50 * syPos, 
      rotationZ: '-0.1',
      transformPerspective:500, 
      transformOrigin:'center center' 
    });

  });
});


