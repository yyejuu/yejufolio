$(function () {

  //nav hover
  $('header nav>ul.gnb>li').hover(function () {
    $(this).find('ul.sub').stop().slideDown();
  }, function () {
    $(this).find('ul.sub').stop().slideUp();
  });

  /* aos */
  $(document).ready(function () {
    AOS.init();
  });
});