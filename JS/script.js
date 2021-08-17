'use strict';

const contentElements = [...document.querySelector('.content').children];


let startingCoords;


const initLoad = function(){
    const hiddenElements = contentElements.map(el => el.classList.add('element-hidden', 'content-element'));
    
    
    revealElements();
};



const revealElements = function() {
    
    contentElements.forEach(ele => {


    startingCoords = ele.getBoundingClientRect().top * 1.15;
    if(startingCoords > window.innerHeight) return;

    ele.classList.remove('element-hidden');
});
};

initLoad();

const revealContent = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;
    console.log(entry);
    entry.target.classList.remove('element-hidden');
    observer.unobserve(entry.target);
};

const contentObserver = new IntersectionObserver(revealContent, {
    root: null,
    threshold: .25,   
});

contentElements.forEach(function(ele) {
    contentObserver.observe(ele);
       
});