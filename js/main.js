$(function(){
  $(".logo, .menu .menu__link, .scroll-down").on("click", function (event) {
    event.preventDefault();
    const id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  
  $('.menu-btn, .menu__link').on('click', function(){
    $('.menu-btn, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(window).scroll(function() {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > 10) {
      $('.header__fixed').addClass('header__fixed--bg');
    } else {
      $('.header__fixed').removeClass('header__fixed--bg');
    }
  });

  $(function() {
    const headerFixed = $('.header__fixed');
    const headerTopDistance = headerFixed.offset().top;

    if (headerTopDistance > 0) {
        headerFixed.addClass('header__fixed--bg');
    } else {
        headerFixed.removeClass('header__fixed--bg');
    }
  });
  
});

var mixer = mixitup('.portfolio__gallery');