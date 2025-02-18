/*--------------------------------------------------
Template Name: fondle ;
Description: pet shop, pet shitter, pet food, pet care bootstrap 5 Template
Version: 1.0;

NOTE: main.js, All custom script and plugin activation script in this file. 

----------------------------------------------------*/

(function($) {
    "use Strict";

    /*---------------------------
    1. Newsletter Popup
    ----------------------------*/
    setTimeout(function() {
        $('.popup_wrapper').css({
            "opacity": "1",
            "visibility": "visible"
        });
        $('.popup_off').on('click', function() {
            $(".popup_wrapper").fadeOut(500);
        })
    }, 2500);

    /*----------------------------
    2. Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
    });

    /*----------------------------
    3. Tooltip Activation
    ------------------------------ */
	/*
    $('.item_add_cart a,.item_quick_link a').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });*/

    /*---------------------------------
	4. Cart Box Dropdown Menu 
    -----------------------------------*/
    $('.drodown-show > a').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $('.drodown-show > a').removeClass('active').siblings('.dropdown').slideUp()
            $(this).removeClass('active').siblings('.dropdown').slideUp();
        } else {
            $('.drodown-show > a').removeClass('active').siblings('.dropdown').slideUp()
            $(this).addClass('active').siblings('.dropdown').slideDown();
        }
    });

    /*----------------------------
    5. Checkout Page Activation
    -----------------------------*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle();
    });
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle();
    });
    $('#cbox').on('click', function() {
        $('#cbox_info').slideToggle();
    });
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle();
    });



    $('.main-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.main-slider-active-dot').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        rows: 1,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.collective-product-active').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.collective-product-active-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });



    $('.feature-pro-active').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 2,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.feature-pro-active-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 2,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });



    $('.feature-pro-active-4-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });



    $('.testmonial-active').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.small-list-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 3,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.promotion_slider_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        rows: 1,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.blog_slider_active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });



    $('.main_feature_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        rows: 1,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.food_feature_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        rows: 1,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.promotion-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        speed: 1000,
        fade: true,
        infinite: true
    });

    $('.brand-logo-active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.featured-ctg-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $('.banner-slider-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.banner-slider-active-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider-2').slick({
        infinite: true,
        slidesToShow: 4,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        centerPadding: '60px',
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* Product details slider */

    $('.product-details-slider-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.thumb_slider_active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        rows: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="icofont-long-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="icofont-long-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });



    /*--------------------------
        Product Zoom
	---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });


    /*----------------------------
    16. ScrollUp Activation
    -----------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '550', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollSpeed: 900,
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: '<i class="icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*----------------------------
    17. Sticky-Menu Activation
    ------------------------------ */
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.header-sticky').addClass("sticky");
        } else {
            $('.header-sticky').removeClass("sticky");
        }
    });

    /*----------------------------
    18. Nice Select Activation
    ------------------------------ */
    $('select').niceSelect();

    /*----------------------------
    19. Price Slider Activation
    -----------------------------*/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100,
        values: [0, 85],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + "  $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        "  $" + $("#slider-range").slider("values", 1));


    /*----------------------------
    15. Countdown Js Activation
    -----------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="count"><p>%D</p><span>Days</span></div><div class="count"><p>%H</p> <span>Hours</span></div><div class="count"><p>%M</p> <span>Mins</span></div><div class="count"> <p>%S</p> <span>Secs</span></div>'));
        });
    });

    /*----------------------------
    16. Product Varient
    -----------------------------*/
    $('.grid_color_image li .variant_img').on('click', function() {
        var variantImage = jQuery(this).parent().find('.variant_img a img').attr('src');
        jQuery(this).parents('.single-template-product').find('.pro-img a img.primary-img').attr({ src: variantImage });
        return false;
    });

    //$('.variant_img a').addClass('active');

    $('.grid_color_image li .variant_img a').on('click', function() {
        $('.grid_color_image li .variant_img a.active').removeClass('active');
        $(this).addClass('active');
    });



    /* =========Portfolio Active =============*/
    var isotopFilter = $('.portfolio-filters');
    var isotopGrid = $('.portfolios:not(.portfolios-slider-active)');
    var isotopGridItemSelector = $('.portfolio-single');
    var isotopGridItem = '.portfolio-single';

    isotopFilter.find('button:first-child').addClass('active');

    //Images Loaded
    isotopGrid.imagesLoaded(function() {
        /*-- init Isotope --*/
        var initial_items = isotopGrid.data('show');
        var next_items = isotopGrid.data('load');
        var loadMoreBtn = $('.load-more-toggle');

        var $grid = isotopGrid.isotope({
            itemSelector: isotopGridItem,
            layoutMode: 'masonry',
        });

        /*-- Isotop Filter Menu --*/
        isotopFilter.on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');

            isotopFilter.find('button').removeClass('is-checked');
            $(this).addClass('is-checked');

            // use filterFn if matches value
            $grid.isotope({
                filter: filterValue
            });
        });


    });



    /*---------------------
        Video popup
    --------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    /*--
    Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /*--
    Magnific Popup
    ------------------------*/
    $('.img-popup-2').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /*--------------------------
    tab active
    ---------------------------- */
    var ProductDetailsSmall = $('.product-details-small a');

    ProductDetailsSmall.on('click', function(e) {
        e.preventDefault();

        var $href = $(this).attr('href');

        ProductDetailsSmall.removeClass('active');
        $(this).addClass('active');

        $('.product-details-large .tab-pane').removeClass('active');
        $('.product-details-large ' + $href).addClass('active');
    })


    /*--- Clickable menu active ----*/
    const slinky = $('#menu').slinky()

    /*====== sidebarCart ======*/
    function sidebarMainmenu() {
        var menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();



    /*---------------------
        Sidebar active
    --------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 767,
    });





})(jQuery);
$(document).ready(function () {
    if ($("#alertMessage").length) {
        setTimeout(function () {
            $("#alertMessage").fadeOut(500);
        }, 3000); // 3秒后消失
    }
});