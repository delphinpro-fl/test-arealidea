"use strict";

$(function () {
    $('.slider').each(function () {
        let $slider = $(this);

        let $sliderPrevButton = $('.slider-navs__nav_prev', $slider);
        let $sliderNextButton = $('.slider-navs__nav_next', $slider);

        $('.slider__items', $slider).slick({
            slidesPerRow: 1,
            slidesToShow: 1,
            infinite: false,
            prevArrow   : $sliderPrevButton,
            nextArrow   : $sliderNextButton,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings  : {
                        slidesPerRow: 2,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 760,
                    settings  : {
                        slidesPerRow: 3,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 980,
                    settings  : {
                        slidesPerRow: 4,
                        slidesToShow: 4,
                    }
                },
            ],
        });
    });
});
