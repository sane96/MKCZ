

const swiper = new Swiper('.swiper-container', {

    speed: 700,
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    }


  });

  const swiperDOM = document.querySelector('.swiper-container');