'use strict';

  

const imgBox = document.querySelectorAll('.img-box');
const navbar = document.querySelector('.navbar');
// const navHeight = navbar.getBoundingClientRect().height;
const header = document.querySelector('.header');
const fencer = document.querySelectorAll('.fencer');
const socialBarLinks = document.querySelectorAll('.social-bar-link');
const socialBar = document.querySelector('.social-bar');

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

// Dynamic social-icon size
const socialBarArr = [...socialBarLinks];
console.log(socialBarArr);

socialBarLinks.forEach(icon => icon.addEventListener('mouseover', function(e) {
    e.preventDefault();
   
        this.style.transform = "scale(1.5)";
        if(socialBarArr[socialBarArr.indexOf(this) + 1]) socialBarArr[socialBarArr.indexOf(this) + 1].style.transform = "scale(1.15)";
        if(socialBarArr[socialBarArr.indexOf(this) - 1]) socialBarArr[socialBarArr.indexOf(this) - 1].style.transform = "scale(1.15)";
    
}))


socialBarLinks.forEach(icon => icon.addEventListener('mouseout',  function(e) {
    e.preventDefault();

        this.style.transform = "scale(1)";
        if(socialBarArr[socialBarArr.indexOf(this) + 1]) socialBarArr[socialBarArr.indexOf(this) + 1].style.transform = "scale(1)";
        if(socialBarArr[socialBarArr.indexOf(this) - 1]) socialBarArr[socialBarArr.indexOf(this) - 1].style.transform = "scale(1)";

}))



// socialBar.addEventListener('mouseover', function(e) {
//     e.preventDefault();
//     console.log(e.target);

//     if(e.target.classList.contains('social-bar-link')) {
//         console.log(e.target);
//         e.target.style.transform = "scale(1.5)";
//         if(socialBarArr[socialBarArr.indexOf(e.target) + 1]) socialBarArr[socialBarArr.indexOf(e.target) + 1].style.transform = "scale(1.15)";
//         if(socialBarArr[socialBarArr.indexOf(e.target) - 1]) socialBarArr[socialBarArr.indexOf(e.target) - 1].style.transform = "scale(1.15)";
//     }
// });



// window.addEventListener('beforeunload', function(e) {
//     e.preventDefault();
//     console.log(document.activeElement);
//     if(document.activeElement.classList.contains('news-link')) return;
//     localStorage.removeItem('windowLoc')
//     // debugger;
// })