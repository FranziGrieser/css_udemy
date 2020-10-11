$(document).ready(function() {
    // sticky navigation
    $(".js--section-features").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    }, {
      offset: "61px"
    });

    // scroll to buttons
    $(".js--scroll-to-plan").click( function() {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
    });

    $(".js--scroll-to-features").click( function() {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
    });

    // animations
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animate__animated animate__fadeIn");
      },
      {
        offset: "70%",
      });
    $(".js--wp-2").waypoint(function(direction) {
        $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
      },
      {
        offset: '70%',
      });
    $(".js--wp-3").waypoint(function(direction) {
        $(".js--wp-3").addClass("animate__animated animate__fadeIn");
      },
      {
        offset: '60%',
      });
    $(".js--wp-4").waypoint(function(direction) {
        $(".js--wp-4").addClass("animate__animated animate__pulse");
      },
      {
        offset: '50%',
      });

    // mobile nav
    $(".js--nav-icon").click(function(){
      var nav = $(".js--main-nav");
      var icon = $(".js--nav-icon i");

      nav.slideToggle(200);
      if (icon.hasClass("ion-navicon-round")) {
          icon.addClass("ion-close-round");
          icon.removeClass("ion-navicon-round");
      } else {
        icon.addClass("ion-navicon-round");
        icon.removeClass("ion-close-round");
      }
    });
})
