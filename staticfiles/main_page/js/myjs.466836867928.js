$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 0,
    stagePAdding: 0,
    center: true,
  });

  $(".navigation__link").click(function () {
    $("#navi_toggle").prop("checked", false);
  });

  var scrollLink = $('.scroll');
  //Smooth Scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').stop().animate({
      scrollTop: $(this.hash).offset().top - 130
    }, 800);
  });

  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 210;

      if (sectionOffset <= scrollbarLocation) {
        $(this).addClass('navigation__link--active');
        $(this).parents().siblings().children().removeClass('navigation__link--active');
      }
    })
  })

  setTimeout(function () {
    $('#alert').fadeOut('slow');
  }, 2000)
});
