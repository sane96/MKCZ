'use strict';

const newsContent = document.querySelector('.content-news');

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
    if(e.target.classList.contains('pagination-num') || e.target.classList.contains('pagination-news') || e.target.classList.contains('content-news')) return;
    console.log(e.target);
    windowLoc = e.pageY;
    console.log(windowLoc);
    let setLoc = localStorage.setItem('windowLoc', `${windowLoc}`);
});

