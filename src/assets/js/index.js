jQuery(function () {
  // section two loader
  const section_two = () => {
    $(".specialties-title, .specialties-list").css("opacity", "1");
    $(".specialties-list").removeClass("scale-0");
    if (innerWidth > 1024) {
      setTimeout(() => {
        $(".specialties-list").width("75%");
      }, 500);
    }
  };
  // section three loader
  const section_three = () => {
    // Section Three Typewriting css-code
    let front_code_text = `
    .card-profiles li div {
    border-radius:50rem;
    }
    .add-profile-btn {
    background-color:#00DCA7;
    color:#fff;
    }

    `;
    const apply_front_code = () => {
      setTimeout(() => {
        $(".card-profiles li div, .card-profiles li button").addClass(
          "rounded-full"
        );
      }, 5000);
      setTimeout(() => {
        $(".add-profile-btn").addClass("bg-[#00DCA7]");
      }, 10000);
      setTimeout(() => {
        $(".add-profile-btn").addClass("text-white");
      }, 10500);
    };
    apply_front_code();
    typewrite(front_code_text, $("#section-three .typewriter-dark").get(0));
  };
  // section four loader
  const section_four = () => {
    const enter_password = () => {
      // enter password
      $("#sample_pass_inp").css("border-color", "red");
      $("#datis_pass_inp").css("border-color", "rgb(72, 1, 255)");
      typewrite(`password`, $("#sample_pass_inp").get(0), null, "input", 150);
      typewrite(`password`, $("#datis_pass_inp").get(0), null, "input", 150);

      setTimeout(() => {
        $(".pass-input").css("border-color", "rgb(209, 213, 219)");
        $("#sample_page_loader").removeClass("scale-0");
        counter(0, 100, 10, "#datis_load_time");
        counter(0, 600, 10, "#sample_load_time");
        setTimeout(() => {
          $("#datis_webpage").width("100%");
        }, 800);
        setTimeout(() => {
          $("#sample_webpage").width("100%");
          $("#sample_page_loader").addClass("scale-0");
        }, 6000);
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
      if (!globalThis.slide_4_loaded) {
        globalThis.slide_4_loaded = true;
        $(".web-card").css({ "margin-inline": "auto", opacity: 1 });
        enter_phone();
      }
    };
    view_load_animation();
  };
  // section five loader
  const section_five = () => {
    typewrite(
      "جستجوی مربوط به سایت شما",
      $("#google_search_inp").get(0),
      null,
      "input",
      0
    );
    const switch_google_results = async () => {
      let difference = parseInt(
        $("#gr_item_2").offset().top - $("#gr_item_1").offset().top
      );
      $("#gr_item_4").css("translate", `0px ${-difference}px`);
      $("#gr_item_3").css("translate", `0px ${difference}px`);
      setTimeout(() => {
        $("#gr_item_4").css("translate", `0px ${-difference * 2}px`);
        $("#gr_item_2").css("translate", `0px ${difference}px`);
      }, 2000);
      setTimeout(() => {
        $("#gr_item_4").css("translate", `0px ${-difference * 3}px`);
        $("#gr_item_1").css("translate", `0px ${difference}px`);
      }, 4000);
    };

    const load_google_results_view = () => {
      if (!globalThis.slide_5_loaded) {
        globalThis.slide_5_loaded = true;
        setTimeout(() => {
          $("#google_results_view").removeClass("hidden");
          $("#seo_desc_div").animate({ left: "133px" }, 1000);
          counter(0, 100, 70, "#seo_percentage");
        }, 4000);
        setTimeout(() => {
          switch_google_results();
        }, 7000);
      }
    };
    load_google_results_view();
  };
  // Initialize Swiper
  var swiper = new Swiper(".index-commenters-list", {
    direction: "horizontal",
    breakpoints: {
      640: {
        direction: "vertical",
      },
    },
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: true,
  });

  var swiper_comments = new Swiper(".index-comments-list", {
    mousewheel: true,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: "#comment_swiper_down_btn",
      prevEl: "#comment_swiper_up_btn",
    },
  });

  var swiper_card = new Swiper(".swiper-card", {
    slidesPerView: 1,
    slideToClickedSlide: true,
    speed: 1500,
    breakpoints: {
      800: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: "#card_swiper_right",
      prevEl: "#card_swiper_left",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
  });
  $(
    () =>
      new Swiper(".consultants-to-be", {
        slidesPerView: 2,
        spaceBetween: 15,
        autoplay: true,
        loop: true,
      })
  );

  // TypeWriter Function
  const typewrite = (
    text = "pass some txt",
    container = "$('body')",
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
  // Initialize fullpage
  if (!isMobile()) {
    $("#fullpage-container").fullpage({
      license: "gplv3-license",
      slidesNavigation: true,
      scrollHorizontally: true,
      afterLoad: function (section, origin) {
        origin.item == $("#section-one").get(0)
          ? $("#fullpage-container").css("transform", "unset")
          : null;
        if (section && section.item == $("#section-one").get(0)) {
          section_two();
        }
      },
      afterSlideLoad() {
        if ($("#slide-three.active").length) {
          section_three();
        }
        if ($("#slide-four.active").length) {
          section_four();
        }
        if ($("#slide-five.active").length) {
          section_five();
        }
      },
    });
  } else {
    // watch for scroll into views then fire section_view loader
    const section_loaded = {};
    const observer = new window.IntersectionObserver(([entry, num]) => {
      const run = (id, cb) => {
        if (
          entry.isIntersecting &&
          entry.target.id == id &&
          !section_loaded[id]
        ) {
          cb();
          section_loaded[id] = true;
        }
      };
      run("section-two", section_two);
      run("slide-three", section_three);
      run("slide-four", section_four);
      run("slide-five", section_five);
    });
    observer.observe($("#section-two").get(0));
    observer.observe($("#slide-three").get(0));
    observer.observe($("#slide-four").get(0));
    observer.observe($("#slide-five").get(0));
    $("#section-one").addClass("sm:h-[900px]");
  }
});
