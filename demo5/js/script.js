$(document).ready(function () {
  $(".hero-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".gallery-items ul").slick({
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".our-clients-section .video-items .video-ul").slick({
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".blog-section .items-blog").slick({
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });


  $(".moreless-button").click(function () {
    $(".more-text").slideToggle();
    if ($(this).text() == "Read Less") {
      $(this).text("Read More");
    } else {
      $(this).text("Read Less");
    }
  });
});
