'use strict';

const contentElements = [...document.querySelector('.content').children];

const pageId = document.body.id;
let verificationObj = {
    home: true,
    news: true, 
    results: true, 
    administration: true,
    coaches: true,
    history: true,
    contact: true, 
    single: true,
};

// Make session

if(!sessionStorage.initObj) {
    sessionStorage.setItem('initObj', JSON.stringify(verificationObj));
}


const verificationId = JSON.parse(sessionStorage.getItem('initObj'))[pageId];



if(verificationId) {
    let parsedObj = JSON.parse(sessionStorage.getItem('initObj'));

    parsedObj[pageId] = false;
    sessionStorage.setItem('initObj', JSON.stringify(parsedObj));

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
};

