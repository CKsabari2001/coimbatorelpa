(function ($) {
  "use strict";
  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          700
        );
        return false;
      }
    }
  });
})(window.jQuery);

// // Custom JS
const mainBannerEl = document.querySelector(".main-banner");
const imgEL = mainBannerEl.querySelector("img");
const screenWidth = window.innerWidth;

if (screenWidth > 768) {
  imgEL.src = "/assets/images/heading-bg.jpg";
} else {
  imgEL.src = "/assets/images/mobile-heading-bg.jpg";
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var header = $("header").height();

  if (scroll >= header + 250 - scroll) {
    $("header").addClass("background-header");
  } else {
    $("header").removeClass("background-header");
  }
});

$(document).ready(function () {
  $(".custom-img-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
