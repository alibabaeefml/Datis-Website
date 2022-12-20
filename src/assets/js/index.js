// Counter
const counter = (
  start_no = Number,
  end_no = Number,
  delay = Number,
  element = String
) => {
  let interval = setInterval(() => {
    start_no++;
    $(element).text(start_no);
    if (start_no === end_no) {
      clearInterval(interval);
    }
  }, delay);
};

// Initialize fullpage
jQuery(function () {
  // TypeWriter Function
  const typewrite = (
    text = "pass some txt",
    container,
    callback = null,
    type = null,
    delay = null
  ) => {
    if (!container.innerText && !container.value) {
      const letters = text.split("");

      const randomDelay = () => {
        return Math.floor(Math.random() * 150);
      };
      const ticker = (pos, deleteText = false) => {
        window.setTimeout(
          function () {
            pos = deleteText ? pos - 1 : pos + 1;
            if (type === "input") {
              container.value = text.substring(0, pos);
            }
            container.innerText = text.substring(0, pos);

            if (deleteText && pos === 0) return false;

            if (letters.length > pos && deleteText === false) {
              ticker(pos);
              callback ? callback() : null;
            }
          },
          delay ? delay : randomDelay()
        );
      };
      window.setTimeout(() => {
        ticker(0);
      }, 1000);
    }
  };
  // Section One Typewriting php-code
  let section_one_code = `
  <!DOCTYPE html>
          <html>
          <body>

          <?php
          // Echo session variables that were set on previous page
          echo "Favorite color is " .
          $_SESSION["favcolor"] . ".<br>";
          echo "Favorite animal is " . $_SESSION["favanimal"] . ".";
          ?>

        </body>
        </html> 

  `;
  typewrite(section_one_code, $("#section-one .typewriter").get(0));

  $("#fullpage-container").fullpage({
    slidesNavigation: true,
    scrollHorizontally: true,
    afterLoad: function (section, origin, destination, direction) {
      if (section && section.item == $("#section-one").get(0)) {
        $("#section-two .title_fa, .title_en, .specialties-list").css(
          "opacity",
          "100%"
        );
        $(".specialties-list").removeClass("scale-0");
        setTimeout(() => {
          $(".specialties-list").width("75%");
        }, 500);
      }
    },
    afterSlideLoad() {
      if ($("#slide-three.active").length) {
        // Section Three Typewriting css-code
        let section_three_code = `
        .my-card {
          height: 100%;
        }
        .avatars-div {
          justify-content: space-between;
        }
        .rounded {
          border-radius: 40px;
        }
        `;
        const match_card_style = () => {
          if (
            $("#section-three .typewriter-dark").text().includes("height: 100%")
          ) {
            $("#slide-three-card").removeClass("h-0");
          }
          if (
            $("#section-three .typewriter-dark")
              .text()
              .includes("space-between")
          ) {
            $("#avatars-ul").addClass("justify-between");
          }
          if (
            $("#section-three .typewriter-dark")
              .text()
              .includes("border-radius: 40px")
          ) {
            $(".rounded-none").removeClass("rounded-none");
          }
        };
        typewrite(
          section_three_code,
          $("#section-three .typewriter-dark").get(0),
          match_card_style
        );
      }
      if ($("#slide-four.active").length) {
        const enter_password = () => {
          // enter password
          $("#sample_pass_inp").css("border-color", "red");
          $("#datis_pass_inp").css("border-color", "rgb(72, 1, 255)");
          typewrite(
            `password`,
            $("#sample_pass_inp").get(0),
            null,
            "input",
            150
          );
          typewrite(
            `password`,
            $("#datis_pass_inp").get(0),
            null,
            "input",
            150
          );

          setTimeout(() => {
            $(".pass-input").css("border-color", "rgb(209, 213, 219)");
            $("#sample_page_loader").toggleClass("scale-0");
            counter(0, 100, 10, "#datis_load_time");
            counter(0, 800, 10, "#sample_load_time");
            setTimeout(() => {
              $("#datis_webpage").width("100%");
            }, 800);
            setTimeout(() => {
              $("#sample_webpage").width("100%");
            }, 8000);
          }, 3500);
        };
        const enter_phone = () => {
          // enter phone number
          $("#sample_phone_inp").css("border-color", "red");
          $("#datis_phone_inp").css("border-color", "rgb(72, 1, 255)");
          typewrite(
            `09120000000`,
            $("#datis_phone_inp").get(0),
            null,
            "input",
            150
          );
          typewrite(
            `09650000000`,
            $("#sample_phone_inp").get(0),
            null,
            "input",
            150
          );
          setTimeout(() => {
            $(".phone-input").css("border-color", "rgb(209, 213, 219)");
            enter_password();
          }, 3500);
        };

        const view_load_animation = () => {
          if (!globalThis.view_loaded) {
            globalThis.view_loaded = true;
            $(".web-card").css({ margin: 0, opacity: 1 });
            setTimeout(() => {
              $(".speed-indicator").css({ margin: 0, opacity: 1 });
              enter_phone();
            }, 500);
          }
        };
        view_load_animation();
      }
      if ($("#slide-five.active").length) {
        typewrite(
          "جستجوی مربوط به سایت شما",
          $("#google_search_inp").get(0),
          null,
          "input",
          0
        );
        const switch_google_results = async () => {
          counter(0, 100, 40, "#seo_percentage");
          $("#gr_item_4").css("translate", "0px -156px");
          $("#gr_item_3").css("translate", "0px 156px");
          setTimeout(() => {
            $("#gr_item_4").css("translate", "0px -312px");
            $("#gr_item_2").css("translate", "0px 156px");
          }, 2000);
          setTimeout(() => {
            $("#gr_item_4").css("translate", "0px -468px");
            $("#gr_item_1").css("translate", "0px 156px");
          }, 4000);
        };

        const load_google_results_view = () => {
          setTimeout(() => {
            $("#google_results_view").removeClass("hidden");
            $("#seo_desc_div").animate({ left: "133px" }, 1000);
          }, 4000);
          setTimeout(() => {
            switch_google_results();
          }, 7000);
        };
        load_google_results_view();
      }
    },
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
  width: 700,
  autoplay: {
    delay: 1500,
  },
});
