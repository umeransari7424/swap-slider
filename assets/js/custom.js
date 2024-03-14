// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 40) {
//       $("header").addClass("onscroll");
//     } else {
//       $("header").removeClass("onscroll");
//     }
//   });

var A;
var B = 0;
var C = 5;
var heightArea = $('header.header-fixed').outerHeight();

$(window).scroll(function(event){
    A = true;
});

setInterval(function() {
    if (A) {
        hasScrolled();
        A = false;
    }
}, 0);

function hasScrolled() {
    var D = $(this).scrollTop();
    if(Math.abs(B - D) <= C)
        return;
    
    if (D > B && D > heightArea){
        // Scroll Down
        $('header.header-fixed').addClass('onscroll').addClass('is-fixed');;
    } else {
        // Scroll Up
        if(D + $(window).height() < $(document).height()) {
            $('header.header-fixed').removeClass('is-fixed').addClass('onscroll');
        }
    }
    
    B = D;
}


// $(document).ready(function() {
//     $('header.header-fixed').each(function() {
//       var $this = $(this);
//       var fixedMenu = true;

//       if (fixedMenu) {
//         if ($this.length > 0) {
//           var t = $(document).scrollTop(),
//             w = $this.offset().top,
//             s = $this.height(),
//             h = w + s + 58;

//           $(window).scroll(function() {
//             var n = $(document).scrollTop(),
//               f = $this.offset().top,
//               m = f - s;

//             if (n < m) {
//               if (n > h) {
//                 $this.addClass('is-fixed');
//               } else if (n < w) {
//                 $this.removeClass('is-fixed');
//               }

//               if (n > t) {
//                 $this.removeClass('show');
//               } else {
//                 $this.addClass('show');
//               }

//               t = $(document).scrollTop();
//             }
//           });
//         }
//       }
//     });
//   });

jQuery(document).ready(function () {
    // Open dropdown on click
    jQuery('.mobile-burder-bar a.btn').on('click', function (e) {
        jQuery('.mobile-menu').toggleClass('slider-menu-show');

        if(jQuery('.mobile-menu').hasClass('slider-menu-show')){
            jQuery('.slide-menu').addClass('show');
        }else{
            jQuery('.slide-menu').removeClass('show');
        }
    });
});
let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function () {
          var activeSlide = this.slides[this.activeIndex];
          var slideClass = activeSlide.classList[1]; // Get the second class (e.g., slide_1, slide_2, slide_3)
          var newText = '';
          switch (slideClass) {
            case 'slide_1':
              newText = 'Giana raised $2,685 for her team.';
              break;
            case 'slide_2':
              newText = 'Jaden helped his team by raising $3,254.';
              break;
            case 'slide_3':
              newText = 'Kiera sold $3,198 for her camp.';
              break;
            case 'slide_4':
              newText = 'Shelcie raised $6,140 for her team.';
              break;
            case 'slide_5':
              newText = 'Roger raised $1,621 for his band.';
              break;
            case 'slide_6':
              newText = 'Violet raised $6,140 for her school.';
              break;
            // Add cases for additional slides if needed
          }
          document.querySelector('.ch-text').textContent = newText;
        }
      }
   });
   document.addEventListener('DOMContentLoaded', function () {
    let swiper1 = new Swiper(".get-poppin-steps-slider", {
      effect: "fade",
      grabCursor: false ,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      }
    });
  
    // Add event listener for click on .js-carousel-numbers .step
    document.querySelectorAll('.js-carousel-numbers .step').forEach(function(step, index) {
      step.addEventListener('click', function() {
        // Slide to the corresponding slide index when clicked
        swiper1.slideTo(index);
      });
    });

    // Initialize the left slider
    let leftSwiper = new Swiper(".get-poppin-steps-left-slider", {
      effect: "fade",
      slidesPerView: 1,
      allowTouchMove: false, // Prevents user from manually swiping the left slider
    });

    // Connect the left slider to the main slider
    leftSwiper.controller.control = swiper1;
    swiper1.controller.control = leftSwiper;
});
document.addEventListener('DOMContentLoaded', function () {
  let slidesPerViewValue = window.innerWidth >= 768 ? 3.5 : 'auto';
  let spaceBetweenValue = window.innerWidth >= 768 ? 30 : 0;
  let explorelivepop = new Swiper(".explore-live-Pop-slider", {
    effect: "slide",
    grabCursor: false,
    allowTouchMove: false,
    slidesPerView: slidesPerViewValue,
    spaceBetween: spaceBetweenValue,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  let possiblein4days = new Swiper(".possible-in-4days-slider", {
    effect: "slide",
    grabCursor: false,
    allowTouchMove: false,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    }
    
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Get the elements
  var playButton = document.querySelector('.play-button');
  var videoContainer = document.querySelector('.video-container');
  var videoIframe = document.createElement('iframe');

  // Set iframe attributes
  videoIframe.setAttribute('src', 'https://player.vimeo.com/video/659432854?title=0&byline=0&portrait=0&playsinline=0&autoplay=1&autopause=0&app_id=122963');
  videoIframe.setAttribute('width', '100%');
  videoIframe.setAttribute('height', '100%');
  videoIframe.setAttribute('frameborder', '0');
  videoIframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');

  // Add event listener to play button
  playButton.addEventListener('click', function () {
    // Append the iframe to the videoContainer
    videoContainer.appendChild(videoIframe);
    
    // Add class to videoContainer
    videoContainer.classList.add('vvv');

    // Hide the play button
    playButton.style.display = 'none';
  });
});
