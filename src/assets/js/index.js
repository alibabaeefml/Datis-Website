// Initialize fullpage
jQuery(function () {
  $("#fullpage-container").fullpage({
    slidesNavigation: true,
    scrollHorizontally: true,

    afterLoad: function (section, origin, destination, direction) {
      if (section && section.item == $("#section-one").get(0)) {
        $("#section-two .title_fa, .title_en, .specialties-list").css(
          "opacity",
          "100%"
        );
        $(".specialties-list").width("75%");
        $(".specialties-list").removeClass("scale-0");
      }
      if (section && section.item == $("#section-three").get(0)) {
        // slide three making card auto
        $(document).ready(function () {
          let make_completed = false;

          if (make_completed) {
            console.log("Maked");
            return;
          }

          var $card = $("#slide-three-card");
          $card
            .delay(1000)
            .animate({ padding: "1rem" })
            .animate({ height: "80px" })
            .queue(function (next) {
              $("#slide-three-one").css({ height: "fit-content" });
              next();
            })
            .delay(1500)
            .animate({ height: "100%" })
            .queue(function (next) {
              $("#slide-three-two").css({ height: "fit-content" });
              next();
            });
          make_completed = true;
        });

        //  type wirter for section one part center
        const text = `
.my-card{
  height:100%;
}
`;

        const letters = text.split("");
        const headline = document.querySelector("p#typewriter");
        const headline_dark = document.querySelector("p#typewriter-dark");
        let delay;

        const randomDelay = () => {
          return Math.floor(Math.random() * 50);
        };

        const ticker = (pos, deleteText = false) => {
          window.setTimeout(function () {
            pos = deleteText ? pos - 1 : pos + 1;

            headline.innerText = text.substring(0, pos);
            headline_dark.innerText = text.substring(0, pos);

            if (deleteText && pos === 0) return false;

            if (letters.length > pos && deleteText === false) {
              delay = randomDelay();
              ticker(pos);
            }
          }, delay);
        };

        window.setTimeout(() => {
          ticker(0);
        }, 500);
      }
    },
    onLeave: function (section, origin, destination, direction) {},
  });
});

// Initialize Swiper
var swiper = new Swiper(".index-commenters-list", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 10,
  mousewheel: true,
  watchSlidesProgress: true,
});

var swiper_comments = new Swiper(".index-comments-list", {
  mousewheel: true,
  thumbs: {
    swiper: swiper,
  },

  navigation: {
    nextEl: ".index-comments-down",
    prevEl: ".index-comments-up",
  },
});

var swiper_card = new Swiper(".swiper-card", {
  slidesPerView: 2,
  slideToClickedSlide: true,
  spaceBetween: 0,
  speed: 1500,
  // loop: true,
  autoplay: {
    delay: 1500,
  },
});
