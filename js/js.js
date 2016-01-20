//MOBILE NAVI
var cacheScreenWidth = 0;
$(function () {
    var active = false;
    $("body").on("click", ".mobile-navi-button", function (event) {
        $('#header #navigation .content nav.element .menu').slideToggle(150);
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
