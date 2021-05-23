'use strict';

  

const imgBox = document.querySelectorAll('.img-box');
const navbar = document.querySelector('.navbar');
// const navHeight = navbar.getBoundingClientRect().height;
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



