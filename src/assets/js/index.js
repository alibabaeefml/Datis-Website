// Initialize fullpage
jQuery(function ($) {
    $("#fullpage-container").fullpage({
        slidesNavigation: true,
        scrollHorizontally: true,

        afterSlideLoad: function (section, origin, destination, direction) {
            console.log({
                section: section,
                origin: origin,
                destination: destination,
                direction: direction,
            });
        },
        onSlideLeave: function (section, origin, destination, direction) {
            console.log({
                section: section,
                origin: origin,
                destination: destination,
                direction: direction,
            });
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
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3500,
    },
});

// slide three making card auto  
$(document).ready(function () {
    let make_completed = false
    $(function () {
        $('#slide-three').on("mouseenter", function () {

            if (make_completed) {
                console.log('Maked');
                return;
            }

            var $card = $('#slide-three-card');
            $card.delay(1000)
                .animate({ padding: '1rem' })
                .animate({ "height": "80px" })
                .queue(function (next) {
                    $('#slide-three-one').css({ "height": "fit-content" })
                    next();
                })
                .delay(1500)
                .animate({ height: '270px' })
                .queue(function (next) {
                    $('#slide-three-two').css({ "height": "fit-content" })
                    next();
                })
                .delay(1500)
                .animate({ height: '300px' })
                .queue(function (next) {
                    $('#slide-three-three').css({ "height": "fit-content" })
                    next();
                })
                .delay(1500)
                .animate({ height: '360px' })
                .queue(function (next) {
                    $('#slide-three-four').css({ "height": "fit-content" })
                    next();
                })
                .delay(1500)
                .animate({ height: '430px' })
                .queue(function (next) {
                    $('#slide-three-five').css({ "height": "fit-content" })
                    next();
                })
                .delay(1500)
                .animate({ height: '500px' })
            $card.delay(1000).queue(function (next) {
                $(this).css({ height: 'fit-content' })
                next();
            })
            make_completed = true
        });
    });

});


//  type wirter for section one part center 
const text = `
    &lt!DOCTYPE html>
    <br>&lthtml>
    <br>&ltbody>
    <br>
    <br>&lt?php
    <br>// Echo session variables that were set on previous page
    <br>echo "Favorite color is " .
    <br>$_SESSION["favcolor"] . ".&ltbr>";
    <br>echo "Favorite animal is " . $_SESSION["favanimal"] . ".";
    <br>?>
    <br>
    <br>&lt/body>
    <br>&lt/html>`;

const letters = text.split("");
const headline = document.querySelector("p#typewriter");
const headline_dark = document.querySelector("p#typewriter-dark");
let delay;

const randomDelay = () => {
    return Math.floor(Math.random() * 150);
};

const ticker = (pos, deleteText = false) => {
    window.setTimeout(function () {
        pos = deleteText ? pos - 1 : pos + 1;

        headline.innerHTML = text.substring(0, pos);
        headline_dark.innerHTML = text.substring(0, pos);

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
