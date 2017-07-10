// require('ScrollMagic', 'ScrollMagic.debug', function(ScrollMagic) {
//     // init controller
//     var controller = new ScrollMagic.Controller({
//             globalSceneOptions: {triggerHook: "onCenter"}
//         });
//     // init scene
//     var scene = new ScrollMagic.Scene({
//             duration: 300,
//             offset: 100
//         })
//         .addTo(controller)
//         .addIndicators();
// });
//
// var controller = new ScrollMagic.Controller();
//
// // create a scene
// new ScrollMagic.Scene({
//         duration: 100,    // the scene should last for a scroll distance of 100px
//         offset: 50        // start this scene after scrolling for 50px
//     })
//     .setPin("#my-sticky-element") // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller


import $ from "jquery";
import slick from "slick-carousel";
import smoothScroll from "smooth-scroll";

$(".hymn-slider").slick({

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});

smoothScroll.init({
  speed: 1000 // Integer. How fast to complete the scroll in milliseconds
});
