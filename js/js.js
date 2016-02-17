//MOBILE NAVI
var cacheScreenWidth = 0;
$(function () {
    var active = false;
    $("body").on("click", ".mobile-navi-button", function (event) {
        $('#header #navigation .content nav.element .menu').slideToggle(150);
        $('#navigation .language-content').fadeOut(20);
    });

    $(window).resize(function () {
      if(cacheScreenWidth < $(window).width()) {
        if (window.matchMedia('(min-width: 1000px)').matches) {
            $('#header #navigation .content nav.element .menu').fadeIn(1);
        }
      }

      cacheScreenWidth = $(window).width();

    });
});

$(function () {
    $("body").on("click", "#navigation .locale", function (event) {
      $('#navigation .language-content').fadeToggle(20);
    });
});

//STICKY NAVI
var stickyNaviBuffer = 150;
var stickyNaviActive = false;
var stickyNaviBreakPoint = $("#header #banner").height() + stickyNaviBuffer;

$(function() {
    $(window).on('scroll', function() {

      if(window.pageYOffset > stickyNaviBreakPoint) {

        //enable sticky navi
        if(stickyNaviActive == false) {

          stickyNaviService_enable();

        }

      } else {

        //disable sticky navi
        if(stickyNaviActive == true) {

          stickyNaviService_disable();

        }

      }

    });
});

function stickyNaviService_enable() {

  var navigation_sticky = $("#header .navigation-sticky");
  var navigation_border = $("#header .navigation-border");

  navigation_sticky.css("top", "-100px");

  navigation_sticky.css("position", "fixed");

  navigation_border.fadeIn(20);

  //show navigation
  navigation_sticky.animate({

    top: "0"

  }, 300, function() {
    // Animation complete.
  });

  /*
  //add border
  navigation_border.animate({

    width: "100%"

  }, 1, function() {
    // Animation complete.
  });
  */

  stickyNaviActive = true;

}

function stickyNaviService_disable() {

  var navigation_sticky = $("#header .navigation-sticky");
  var navigation_border = $("#header .navigation-border");

  navigation_border.fadeOut(100);

  navigation_sticky.hide();
  navigation_sticky.css("position", "relative");
  navigation_sticky.css("top", "0");
  navigation_sticky.slideToggle(350);

  /*
  //hide navigation
  navigation_sticky.animate({

    top: "-100px"

  }, 400, function() {
    // Animation complete.
  });
  */

  /*
  //remove border
  navigation_border.animate({

    width: "0%"

  }, 1, function() {
    navigation_sticky.hide();
    navigation_sticky.css("position", "relative");
    navigation_sticky.css("top", "0");
    navigation_sticky.slideToggle(200);
  });
  */

  stickyNaviActive = false;


}
