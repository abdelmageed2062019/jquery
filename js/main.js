$(document).ready(function () {
  //scroll to//
  $(".scroll-link").click(function () {
    let targetId = $(this).attr("href");
    let targetElement = $(targetId);
    if (targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top,
        },
        1000
      );
    }
  });

  //show and hide side nav//
  $(".openIcon").click(function () {
    $("aside").addClass("opened");
    $(".openIcon").addClass("opened");
  });

  $(".close").click(function () {
    $("aside").removeClass("opened");
    $(".openIcon").removeClass("opened");
  });

  //accordion//
  $(document).ready(function () {
    $(".accordion p:first").slideDown();

    $(".accordion h3").click(function () {
      $(this).next("p").slideToggle(600);
      $(".accordion p").not($(this).next("p")).slideUp();
    });
  });

  //invitation date//
  let targetDateString = "Thu Jan 30 2024 13:30:03";
  let targetDate = new Date(targetDateString);

  const countdownInterval = setInterval(function () {
    let now = new Date();
    let diffDate = targetDate - now;

    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

    $(".days").html(days + " " + "D");
    $(".hours").html(hours + " " + "H");
    $(".min").html(minutes + " " + "M");
    $(".sec").html(seconds + " " + "S");
  }, 1000);

  // calculate the number of words //
  $("#message").keyup(function () {
    let messageLength = $(this).val().length;
    let remainds = 100 - messageLength;

    if (remainds < 0) {
      $(".word-num").html("your available character finished");
    } else {
      $(".word-num").html(remainds);
    }
  });
});
