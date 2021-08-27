'use strict';

const contentElements = [...document.querySelector('.content').children];

// contentElements.forEach(el => el.style.setProperty ("transition", "transform 1s, opacity 1s"));
contentElements.forEach(el => el.classList.add('element-hidden'));

const elementTransition = window.getComputedStyle(contentElements[0]).transition;

if(elementTransition === 'all 0s ease 0s') {
        contentElements.forEach(el => el.style.transition = "transform 1s, opacity 1s") 
}
    else {
        contentElements.forEach(el => el.style.transition = `transform 1s, opacity 1s, ${elementTransition}`);    
}

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

// Make session


