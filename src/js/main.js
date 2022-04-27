
$("#vehicles-list").mCustomScrollbar({
   theme: "dark",
});

function move(value) {
   $("#vehicle-list").mCustomScrollbar("scrollTo", value, {
      scrollEaseing: "easeOut",
   });
}

$(".vehicles-nav ul li a").click(function () {
   if ($(this).attr("id") === "cars-nav") {
      move("#cars");
   }
   if ($(this).attr("id") === "suvs-nav") {
      move("#suvs");
   }
   if ($(this).attr("id") === "minivans-nav") {
      move("#minivans");
   }
   if ($(this).attr("id") === "enviromentals-nav") {
      move("#enviromentals");
   }
   if ($(this).attr("id") === "futures-nav") {
      move("#futures");
   }
});

var count = "";
$("#navbar > a").click(function () {
   if (count === "") {
      count = $(this).attr("id");
      $(this).addClass("active");
      if (count === "vehicles-link") {
         $("#vehicles").removeClass("hide-vehicles");
         $(".vehicles-nav").addClass("animate__fadeInDown");
         $("#vehicles-list").addClass("animate__fadeInUp");
         $("#vehicles-close").addClass("animate__fadeInUp");
      }
   } else {
      if (count === $(this).attr("id")) {
         count = "";
         $(this).removeClass("active");
         $(".vehicles-nav").addClass("animate__fadeOutUp");
         $("#vehicles-list").addClass("animate__fadeOutDown");
         $("#vehicles-close").addClass("animate__fadeOutDown");
         setTimeout(function () {
            $("#vehicles").addClass("hide-vehicles");
            $(".vehicles-nav").removeClass("animate__fadeOutUp");
            $("#vehicles-list").removeClass("animate__fadeOutDown");
            $("#vehicles-close").removeClass("animate__fadeOutDown");
         }, 700);
      } else {
         $("#navbar > a").removeClass("active");
         $(this).addClass("active");
         count = $(this).attr("id");
         if (count !== "vehicles-link") {
            $(".vehicles-nav").addClass("animate__fadeOutUp");
            $("#vehicles-list").addClass("animate__fadeOutDown");
            setTimeout(function () {
               $("#vehicles").addClass("hide-vehicles");
               $(".vehicles-nav").removeClass("animate__fadeOutUp");
               $("#vehicles-list").removeClass("animate__fadeOutDown");
               $("#vehicles-close").removeClass("animate__fadeOutDown");
            }, 700);
         } else {
            $("#vehicles").removeClass("hide-vehicles");
            $(".vehicles-nav").addClass("animate__fadeInDown");
            $("#vehicles-list").addClass("animate__fadeInUp");
            $("#vehicles-close").addClass("animate__fadeInUp");
         }
      }
   }
});

// VEHICLE CLOSE
$("#vehicles-close").click(function () {
   $(".vehicles-nav").addClass("animate__fadeOutUp");
   $("#vehicles-list").addClass("animate__fadeOutDown");
   setTimeout(function () {
      $("#vehicles").addClass("hide-vehicles");
      $(".vehicles-nav").removeClass("animate__fadeOutUp");
      $("#vehicles-list").removeClass("animate__fadeOutDown");
      // $('#vehicles-close').removeClass('animate__fadeOutDown')
   }, 700);
   $("#navbar > a").removeClass("active");
   count = "";
});

$(".vehicles-product").addClass("animate__animated animate__fadeInUp");

const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: "horizontal",
   loop: true,

   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   // And if we need scrollbar
   scrollbar: {
      el: ".swiper-scrollbar",
   },
});

$(".carousel-indicators-config li").click(function () {
   $(".carousel-indicators-config li").removeClass("active");
   $(this).addClass("active");
});

$(".indicators-xs-header").click(function () {
   $(".carousel-indicator-xs ol").slideToggle();
   if ($(".indicators-xs-header i").hasClass("transform-rotate")) {
      $(".indicators-xs-header i").removeClass("transform-rotate");
   } else {
      $(".indicators-xs-header i").addClass("transform-rotate");
   }
});

$(".carousel-indicator-xs ol li").click(function () {
   $(".indicators-title span").html($(this).html());
   $(".carousel-indicator-xs ol").slideUp();
});

var count = 0;
$(".carousel-control-prev").click(function () {
   $(".carousel-indicators-config li").removeClass("active");
   if (count == 0) {
      count = 4;
   } else {
      count--;
   }

   $(".carousel-indicators-config li").each(function (i) {
      if (i == count) {
         $(this).addClass("active");
         $(".indicators-title span").html($(this).html());
      }
   });
});

$(".carousel-control-next").click(function () {
   $(".carousel-indicators-config li").removeClass("active");
   if (count == 4) {
      count = 0;
   } else {
      count++;
   }

   $(".carousel-indicators-config li").each(function (i) {
      if (i == count) {
         $(this).addClass("active");
         $(".indicators-title span").html($(this).html());
      }
   });
});

$(".back-to-top").click(function () {
   $('body,html').animate({ scrollTop: 0 }, 1000)
})

function collapse() {
   var width = $(window).width()
   if (width >= 768.98) {
      $('.collapse-ul').removeClass('collapse')
   } else {
      $('collapse-ul').addClass('collapse')
   }
}

$(window).resize(function () {
   collapse()
})

$(document).ready(function () {
   collapse()
})


new WOW().init()