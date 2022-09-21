$(function () {

  $(".menu a, .logo, .header__arrow").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu__btn').click(function (event) {
    $('.menu__btn,.menu__list').toggleClass('active');
  })

  var mixer = mixitup('.works__gallery');
});
