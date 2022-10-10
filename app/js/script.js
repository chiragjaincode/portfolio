$(document).ready(function() {

    $('.gallary-item-scroll .items').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: false,
    });

    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
    });


    $('.banner-header .item-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'
    });


    $(".banner-header .item-slider i.fa").wrapAll("<div class='arrow-banner' />");



});