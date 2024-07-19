$(function () {
  $(".open-overlay").click(function () {
    let overlay_navigation = $(".overlay-navigation"),
      top_bar = $(".bar-top"),
      middle_bar = $(".bar-middle"),
      bottom_bar = $(".bar-bottom");

    overlay_navigation.toggleClass("overlay-active");

    if (overlay_navigation.hasClass("overlay-active")) {
      console.log("테스트 if has overlay-active");
      top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
      middle_bar
        .removeClass("animate-out-middle-bar")
        .addClass("animate-middle-bar");
      bottom_bar
        .removeClass("animate-out-bottom-bar")
        .addClass("animate-bottom-bar");
      overlay_navigation
        .removeClass("overlay-slide-up")
        .addClass("overlay-slide-down");
      overlay_navigation.velocity("transition.slideLeftIn", {
        duration: 100,
        delay: 0,
        begin: function () {
          $("nav ul li").velocity("transition.perspectiveLeftIn", {
            stagger: 150,
            delay: 0,
            complete: function () {
              $("nav ul li a").velocity(
                {
                  opacity: [1, 0],
                },
                {
                  delay: 10,
                  duration: 100,
                }
              );
              $(".open-overlay").css("pointer-events", "auto");
            },
          });
        },
      });

      // 서브메뉴 클릭시 이동
      $("nav ul li")
        .off("click")
        .on("click", function () {
          top_bar
            .removeClass("animate-top-bar")
            .addClass("animate-out-top-bar");
          middle_bar
            .removeClass("animate-middle-bar")
            .addClass("animate-out-middle-bar");
          bottom_bar
            .removeClass("animate-bottom-bar")
            .addClass("animate-out-bottom-bar");
          overlay_navigation
            .removeClass("overlay-slide-down")
            .addClass("overlay-slide-up");
          overlay_navigation.removeClass("overlay-active");

          // let pages = ["index.html", "hanbok.html", "grim.html", "sori.html", "hansik.html"];
          // let index = $(this).index();

          $("nav ul li").velocity("transition.perspectiveRightOut", {
            stagger: 150,
            delay: 0,
            complete: function () {
              overlay_navigation.velocity("transition.fadeOut", {
                delay: 0,
                duration: 100,
                complete: function () {
                  $("nav ul li a").velocity(
                    {
                      opacity: [0, 1],
                    },
                    {
                      delay: 0,
                      duration: 0,
                    }
                  );
                  // Show the corresponding section

                  $(".open-overlay").css("pointer-events", "auto");

                  // 페이지 이동
                  window.location.href = pages[index];
                },
              });
            },
          });
        });
    } else {
      console.log("테스트 else no overlay-active");
      $(".open-overlay").css("pointer-events", "none");
      top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
      middle_bar
        .removeClass("animate-middle-bar")
        .addClass("animate-out-middle-bar");
      bottom_bar
        .removeClass("animate-bottom-bar")
        .addClass("animate-out-bottom-bar");
      overlay_navigation
        .removeClass("overlay-slide-down")
        .addClass("overlay-slide-up");
      $("nav ul li").velocity("transition.perspectiveRightOut", {
        stagger: 150,
        delay: 0,
        complete: function () {
          overlay_navigation.velocity("transition.fadeOut", {
            delay: 0,
            duration: 100,
            complete: function () {
              $("nav ul li a").velocity(
                {
                  opacity: [0, 1],
                },
                {
                  delay: 0,
                  duration: 50,
                }
              );
              $(".open-overlay").css("pointer-events", "auto");
            },
          });
        },
      });
    }
  }); /* click */
}); /* ready */
