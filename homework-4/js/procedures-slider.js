const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1048: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  
  navigation: {
    nextEl: '.procedure-icon.next',
    prevEl: '.procedure-icon.prev',
  },
  watchOverflow: false,
});