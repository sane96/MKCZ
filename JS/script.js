'use strict';

const contentElements = [...document.querySelector('.container-content').children];

const filterIcons = [...document.querySelectorAll('.icon-filters')];

const dropdownFilters = [...document.querySelectorAll('.dropdown-filters')];

// const pageId = document.body.id;
// let verificationObj = {
//     home: true,
//     news: true, 
//     results: true, 
//     administration: true,
//     coaches: true,
//     history: true,
//     contact: true, 
//     single: true,
// };

// // Make session

// if(!sessionStorage.initObj) {
//     sessionStorage.setItem('initObj', JSON.stringify(verificationObj));
// }


// const verificationId = JSON.parse(sessionStorage.getItem('initObj'))[pageId];



// if(verificationId) {
//     let parsedObj = JSON.parse(sessionStorage.getItem('initObj'));

//     parsedObj[pageId] = false;
//     sessionStorage.setItem('initObj', JSON.stringify(parsedObj));

contentElements.forEach(el => el.style.setProperty ("transition", "transform 1s, opacity 1s"));
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
// };

// Open filter dropdown
filterIcons.forEach(icon => icon.addEventListener('click', function (e) {
    if(e.target.parentElement.classList.contains('icon-filters')) {
        e.target.parentElement.nextElementSibling.classList.toggle('dropdown-filters-active');
        e.target.parentElement.classList.toggle('icon-filters-active');
    }

    if(e.target.parentElement.classList.contains('filters-row')) {
        e.target.nextElementSibling.classList.toggle('dropdown-filters-active');
        e.target.classList.toggle('icon-filters-active');
    }
}))

// Open select filter

for (const dropdown of document.querySelectorAll(".select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.select').classList.toggle('open');
    })
}


window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});


for (const option of document.querySelectorAll(".option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
        }
    })
}

