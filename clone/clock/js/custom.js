$(function () {
  //메뉴 버튼 클릭 시
  $('ul#menu li').click(function (event) {
    event.preventDefault();
    //변수 ht에 브라우저의 높이값 저장
    let ht = $(window).height();
    //변수 i에 클릭한 li의 순서값 저장
    let i = $(this).index();
    //브라우저의 높이값 * 인덱스값은 현재 박스의 스크롤 위치값과 동일
    let nowTop = i * ht;
    $('html, body').stop().animate({
      scrollTop: nowTop,
    }, 1300, 'easeOutBounce');
  });

  //스크롤 이벤트 - 메뉴 on class
  $(window).on('scroll', function () {
    let ht = $(this).height();
    let sct = $(this).scrollTop();
    const sectionLength = $('#wrap section').length;
    for (let i = 0; i < sectionLength; i++) {
      if (sct >= ht * i && sct < ht * (i + 1)) {
        $('ul#menu li').removeClass('on');
        $('ul#menu li').eq(i).addClass('on');
      }
    }
  });

  //마우스 휠 이벤트
  $('section').on('wheel', function (e) {
    e.preventDefault();
    let nav;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      nav = $(this).prev();
    } else {
      nav = $(this).next();
    }
    if (nav.length) {
      let moveTop = nav.offset().top;
      $('html, body').stop().animate({
        scrollTop: moveTop,
      }, 1300, 'easeOutBack');
      console.log(nav);
    }
  });

  //마우스 무브 이벤트
  $('section').on('mousemove', function (e) {
    let posX = e.pageX;
    let posY = e.pageY;
    /* console.log(posX + '/' + posY); */

    //첫번째 박스 이미지 위치값을 마우스 커서의 위치값과 연동
    $('.p11').css({
      bottom: 20 - (posY / 30),
      right: 20 - (posY / 30),
    });
    $('.p12').css({
      bottom: -40 + (posX / 20),
      right: 130 + (posX / 20),
    });
    $('.p13').css({
      top: 180 - (posY / 40),
      right: 60 - (posX / 40),
    });
    $('.p21').css({
      bottom: -480 + (posX / 30),
      right: -180 + (posY / 30),
    });
    $('.p22').css({
      bottom: -40 + (posX / 20),
      right: 130 + (posX / 30),
    });
    $('.p31').css({
      bottom: 30 - (posX / 40),
      right: 180 + (posY / 40),
    });
    $('.p32').css({
      bottom: -270 + (posY / 30),
      right: 180 + (posX / 20),
    });
    $('.p33').css({
      bottom: -130 + (posX / 40),
      right: -70 + (posY / 20),
    });
    $('.p41').css({
      bottom: -120 + (posY / 40),
      right: 20 + (posY / 20),
    });
    $('.p42').css({
      bottom: -180 + (posX / 30),
      right: 0 + (posY / 30),
    });
  });
});