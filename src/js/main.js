// $(document).ready(function () {
//     $('.selected').click(function () {
//         alert($(this).next().css("background", "yellow").attr("class"));
//     });
// });

$(window).on('click', function (event) {
    // element over which click was made
    var clickOver = $(event.target)
    if (event.target.closest(".nav-route")) return;
    else if ($('.navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar-toggler').length === 0) {
        // Click on navbar toggler button
        $('.navbar-toggler[aria-expanded="true"]').click();
    }
});



var darkmode = addEventListener("change", () => {
    var sunny = document.querySelector("body")
    // Theme switch
    var themeSwitch = document.getElementById("themeSwitch");
    if (themeSwitch) {
        sunnydark(); // if user has already selected a specific theme -> apply it
        themeSwitch.addEventListener("change", () => {
            sunnyreset(); // update color theme
        });

        function sunnydark() {
            var darkThemeSelected =
                localStorage.getItem("themeSwitch") !== null &&
                localStorage.getItem("themeSwitch") === "dark";

            // update checkbox
            themeSwitch.checked = darkThemeSelected;
            // update body data-theme attribute
            darkThemeSelected
                ? themeSwitch.setAttribute("data-theme", "dark")
                : themeSwitch.removeAttribute("data-theme");
        }

        function sunnyreset() {
            // if (themeSwitch.getAttribute('aria-checked') === 'true')
            if (themeSwitch.checked) {
                // dark theme has been selected
                console.log("sunny test done");
                themeSwitch.setAttribute("data-theme", "dark");
                localStorage.setItem("themeSwitch", "dark");
            } else {
                themeSwitch.removeAttribute("data-theme");
                console.log("sunny test complete");
                localStorage.removeItem("themeSwitch");
            }
        }
    }
});

window.addEventListener('load', () => {
    var swiper = new Swiper('.banner-swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay 
        autoplay: {
            delay: 5000,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper1 = new Swiper('.hc_small_swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',
        slidesPerMove: '5',
        spaceBetween: 50,
        centeredSlides: true,
        // autoplay 
        autoplay: {
            delay: 10000,
        },
    });

    var swiper1 = new Swiper('.hc-large-cateogry', {
        // Optional parameters
        loop: true,
        slidesPerView: '4',
        spaceBetween: 50,
        centeredSlides: true,
        // autoplay 
        autoplay: {
            delay: 10000,
        },
    });

    var swiper1 = new Swiper('.hc-large-cateogry-outline', {
        // Optional parameters
        loop: true,
        slidesPerView: '4',
        spaceBetween: 40,
        // autoplay 
        autoplay: {
            delay: 10000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
});