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


$('.slick-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        },
    ]
});


$('.hc-jewellery_category-sm').slick({
    autoplay: true,
    autoplaySpeed: 20000,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 2,
    centerMode: true,
});

// $('.hc-jewellery_category-lg').slick({
//     autoplay: true,
//     autoplaySpeed: 20000,
//     infinite: true,
//     arrows: false,
//     dots: false,
//     slidesToShow: 4.5,
//     slidesToScroll: 2,
// });

