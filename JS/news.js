'use strict';

const newsContent = document.querySelector('.content-news');
const paginationBtns = [...document.querySelectorAll('.pagination-num')];
const arrowForward = document.querySelector('.forward');
const arrowBackward = document.querySelector('.backward');

window.addEventListener('DOMContentLoaded', function(e) {
    const getLoc = +localStorage.getItem('windowLoc');
    if(getLoc === null || getLoc <= 800) return;
    console.log(getLoc);
    window.scrollTo({
        top: getLoc - 100,
        behavior: "smooth"  
   });
});

let windowLoc;

newsContent.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.classList.contains('pagination-num') || e.target.classList.contains('pagination-news') || e.target.classList.contains('content-news') || e.target.classList.contains('pagination-arrow')) return;
    console.log(e.target);
    windowLoc = e.pageY;
    console.log(windowLoc);
    let setLoc = localStorage.setItem('windowLoc', `${windowLoc}`);

    
});


// Remove local storage if not going back 
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    
    console.log(document.activeElement);
    if(document.activeElement.classList.contains('news-link')) return;
    localStorage.removeItem('windowLoc')
    // debugger;
});


// Change active class for pagination and add buffer for more paginations

arrowForward.addEventListener('click', function(e){
    paginationBtns.map((el,i) => {
       if(el.classList.contains('active')) {
           paginationBtns[i + 1].classList.add('active');
           el.classList.remove('active');
       }
    })

})
