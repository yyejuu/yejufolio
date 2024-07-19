$(function () {
  $('.A_left>ul>li').click(subNav);
  function subNav() {
    let i = $(this).index();
    console.log(i);
    $('.A_left>ul>li,ul.A_change>li').removeClass('on');
    $('.A_left>ul>li').eq(i).addClass('on')
    $('ul.A_change>li').eq(i).addClass('on')
  }


  let swiper = new Swiper(".B .con", {
    spaceBetween: 30,
    autoplay: {
      delay: 3800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".B .swiper-button-next",
      prevEl: ".B .swiper-button-prev",
    },
  });

  $('header ul>li').hover(function () {
    $('header ul>li>ul.sub').stop().slideDown();
  }, function () {
    $('header ul>li>ul.sub').stop().slideUp();
  });

  let nav
  $('ul.gnb>li, header>h1, main .page .middle p').click(function (e) {
    e.preventDefault();
    $selector = $(this).children('a').attr('href')
    nav = $($selector).offset().top;
    $('html,body').animate({
      scrollTop: nav,
    }, 500);
  });

  $('ul.sub>li').click(subNav);

});