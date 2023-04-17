'use strict';

const contentElements = [...document.querySelector('.container-content').children];
const filterBtn = document.querySelector('.filters-btn');
const dropdownFilters = document.querySelector('.dropdown-filters');
const navUl = document.getElementById('navbar');
const navBtns = [...document.querySelectorAll('.btn-nav')];
const competitionSingles = [...document.querySelectorAll('.competition-table-single')];
const navScroll = document.querySelector('.nav-scroll');
const tabBtnContainer = document.querySelector('.tab-container-btn');
const contentCarousel = document.querySelector('.content-carousel');

// Tabbed table content

let tabbedTable = 'competition';
tabBtnContainer.addEventListener('click', function(e){
    const tableId = e.target.id;
    if(tabbedTable == tableId) return;
    document.getElementById(`${tabbedTable}`).parentElement.classList.remove('tab-active');
    document.getElementById(`${tableId}`).parentElement.classList.add('tab-active');

    document.getElementById(`${tabbedTable}-table`).classList.remove('results-table-active');
    document.getElementById(`${tableId}-table`).classList.add('results-table-active');

    let openedSingle = competitionSingles.find(s => s.lastElementChild.classList.contains('competition-table-dropdown-visible'));
    if(openedSingle) openedSingle.lastElementChild.classList.remove('competition-table-dropdown-visible');

    dropdownFilters.classList.remove('dropdown-filters-active');
    filterBtn.classList.remove('filters-btn-active');

    tabbedTable = tableId;
})

// // Navigation scroll 
// const navScrolling = function(entries, observer) {
//     const [entry] = entries;

//     if(!entry.isIntersecting) return;

//     const elementIndex = contentElements.findIndex(ele => ele.id == entry.target.id);

//     navScroll.style.left = `${elementIndex*120}px`;
// };


// Navigation scrolling
navUl.addEventListener('click', function(e) {
    e.preventDefault();

    if(e.target.classList.contains('btn-nav')) {
        const id = e.target.getAttribute('href');
        
        let btnIndex = navBtns.findIndex(btn => btn.getAttribute('href') == id);
        contentCarousel.style.left = `-${btnIndex*100}%`;

        navScroll.style.left = `${btnIndex*120-2}px`;
    }
}); 


// Competition single dropdown
competitionSingles.forEach(single => single.addEventListener('click', function(e) {
    let openedSingle = competitionSingles.find(s => s.lastElementChild.classList.contains('competition-table-dropdown-visible'));
    e.currentTarget.lastElementChild.classList.toggle('competition-table-dropdown-visible');
    if(openedSingle) openedSingle.lastElementChild.classList.remove('competition-table-dropdown-visible');
}));

// Open filter dropdown
filterBtn.addEventListener('click', function (e) {

    dropdownFilters.classList.toggle('dropdown-filters-active');
    filterBtn.classList.toggle('filters-btn-active');
});

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
};



// // Hide and reveal elements
// contentElements.forEach(el => el.style.setProperty ("transition", "transform 1s, opacity 1s"));
// contentElements.forEach(el => el.classList.add('element-hidden'));

// const elementTransition = window.getComputedStyle(contentElements[0]).transition;

// if(elementTransition === 'all 0s ease 0s') {
//         contentElements.forEach(el => el.style.transition = "transform 1s, opacity 1s") 
// } else {
//         contentElements.forEach(el => el.style.transition = `transform 1s, opacity 1s, ${elementTransition}`);    
// }

// const startingCoords = contentElements.map(ele => ele.getBoundingClientRect().top);


// const initLoad = function() {
//     startingCoords.forEach(ele => {
//     if(ele > window.innerHeight) return;

//     contentElements[startingCoords.indexOf(ele)].classList.remove('element-hidden');
//     })
// };

// initLoad();

// const revealContent = function(entries, observer) {
//     const [entry] = entries;

//     if(!entry.isIntersecting) return;

//     // entry.target.classList.remove('element-hidden');
//     observer.unobserve(entry.target);
// };

// const contentObserver = new IntersectionObserver(revealContent, {
//     root: null,
//     threshold: .20,   
// });

// contentElements.forEach(function(ele) {
//     contentObserver.observe(ele);
// });


