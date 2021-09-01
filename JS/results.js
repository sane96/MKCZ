'use strict';

const resultsOutline = document.querySelectorAll('.results-outline');
const selects = document.querySelectorAll('.select');
const competitionsResults = document.querySelectorAll('.results-dropdown-single');


// Open select tables

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


// Opening result tabs
let resultsDrop = [...document.querySelectorAll('.results-dropdown')].map(result => [...result.parentElement.lastElementChild.children].length);
console.log(resultsDrop);



resultsOutline.forEach((result,i) => result.addEventListener('click', function(e) {
    // resultsDrop = [...result.parentElement.lastElementChild.children].length;

    if(e.target.parentElement.parentElement.classList.value === 'column column-document') return e.target.parentElement; 
    this.parentElement.lastElementChild.classList.toggle('results-dropdown-visible');
    if(!this.parentElement.lastElementChild.style.height) {this.parentElement.lastElementChild.style.height = `${4 * resultsDrop[i]}rem`}
    else this.parentElement.lastElementChild.style.height = '';
    this.firstElementChild.firstElementChild.firstElementChild.classList.toggle('pointer-transformed');
}));


// Filtering results for age category
selects.forEach(select => select.addEventListener('click', function(e) {
    
    if(e.target.classList.contains('select-trigger') || e.target.parentElement.classList.contains('select-trigger')) return;
    if(!(select.parentElement.firstElementChild.textContent === "Категорија")) return;
    
    competitionsResults.forEach(result => {
        if(!(result.lastElementChild.previousElementSibling.textContent.trim() === e.target.textContent) && !(e.target.textContent === "Све")) result.style.display = "none";
        else result.style.display = "flex";      
    });

    // resultsOutline.forEach((res,i) => res.parentElement.lastElementChild.style.height = `${4 * resultsDrop[i]}rem`)
    
}))

