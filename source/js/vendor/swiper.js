const swiper = new Swiper('.trainers__slider-container', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      width:226,
      spaceBetween: 30,
      initialSlide:2,
    },

    768: {
      slidesPerView: 2,
      width:566,
      spaceBetween: 30,
      initialSlide:2,
    },

    1200: {
      slidesPerView: 4,
      width:1160,
      spaceBetween: 40,
      initialSlide:0,
    }
  },

  loop:true,

  speed: 500,

});


const swiperReviews = new Swiper('.reviews__slider-container', {

  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      width:226,
    },

    768: {
      width:566,
    },
  },

  speed: 500,

});
