'use strict';

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

const imgBox = document.querySelectorAll('.img-box');
const navbar = document.querySelector('.navbar');
const navHeight = navbar.getBoundingClientRect().height;
const header = document.querySelector('.header');
const fencer = document.querySelectorAll('.fencer');



///// Scrolling solutions
// Navbar sticky scroll
// const navSticky = function (entries, observer) {
//     const [entry] = entries;

//     if(!entry.isIntersecting) {
//         navbar.classList.add('sticky-nav','sticky-btns');
//         // fencer.forEach((fencer) => fencer.classList.remove('hidden'));
//     }
//     else {
//         navbar.classList.remove('sticky-nav', 'sticky-btns');
//         fencer.forEach((fencer) => fencer.classList.add('hidden'));
//     }
// };

// const boxOptions = {
//     root: null,
//     threshold: 0,
//     rootMargin: `-${navHeight}px`,
// };

// const boxObserver = new IntersectionObserver(navSticky, boxOptions);
// boxObserver.observe(header);



