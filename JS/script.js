'use strict';

const contentElements = [...document.querySelector('.content').children];

contentElements.forEach(el => el.classList.add('content-element','element-hidden'));

const startingCoords = contentElements.map(ele => ele.getBoundingClientRect().top);




const initLoad = function() {
    
    startingCoords.forEach(ele => {

    // startingCoords = ele.getBoundingClientRect().top * 1.15;
    if(ele > window.innerHeight) return;

    contentElements[startingCoords.indexOf(ele)].classList.remove('element-hidden');

});
};

initLoad();

const revealContent = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('element-hidden');
    observer.unobserve(entry.target);
};

const contentObserver = new IntersectionObserver(revealContent, {
    root: null,
    threshold: .20,   
});

contentElements.forEach(function(ele) {
    contentObserver.observe(ele);
       
});