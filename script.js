//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var fieldsetLoadingClass = 'loading';
const timingDelay = 1200;

$('#login-register').on('click', () => {
  $('.fieldset-steps').toggleClass('active');
})

$("#refresh-password-return-login").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = $('#fieldset-steps-login #fieldset-login');
  $(current_fs).addClass(fieldsetLoadingClass);
  setTimeout(() => {
  next_fs.show();
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          scale = 1;
          // left = now * 50 + "%";
          left = 0;
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        easing: "easeInOutBack",
      }
    );
    $(current_fs).removeClass(fieldsetLoadingClass);
  }, timingDelay);
});

$("#refresh-password-link").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = $('#fieldset-support #refresh-password-fieldset');
  $(current_fs).addClass(fieldsetLoadingClass);
  setTimeout(() => {
  next_fs.show();
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          scale = 1;
          // left = now * 5 + "%";
          left = 0;
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        easing: "easeInOutBack",
      }
    );
    $(current_fs).removeClass(fieldsetLoadingClass);
  }, timingDelay);
});

$(".next").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  $(current_fs).addClass(fieldsetLoadingClass);
  setTimeout(() => {
  next_fs.show();
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          scale = 1;
          // left = now * 5 + "%";
          left = 0;
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        easing: "easeInOutBack",
      }
    );
    $(current_fs).removeClass(fieldsetLoadingClass);
  }, timingDelay);
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");
  previous_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        // scale = 0.8 + (1 - now) * 0.2;
        // left = (1 - now) * 50 + "%";
        scale = 1;
        left = 0;
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack",
    }
  );
});

$(".submit").click(function () {
  return false;
});
