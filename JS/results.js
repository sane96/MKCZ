'use strict';

const resultsOutline = document.querySelectorAll('.results-outline');
const selects = document.querySelectorAll('.select');
const competitions = document.querySelectorAll('.results-single');


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


selects.forEach(select => select.addEventListener('click', function(e) {
    if(e.target.classList.contains('select-trigger') || e.target.parentElement.classList.contains('select-trigger')) return;
    if(!(select.parentElement.firstElementChild.textContent === "Категорија")) return;
    
    competitions.forEach(competition => {
        if(!(competition.firstElementChild.lastElementChild.previousElementSibling.textContent.trim() === e.target.textContent) && !(e.target.textContent === "Све")) competition.style.display = "none";
        else competition.style.display = "flex";
        return;
    });
}))

const resultsDrops = [...document.querySelectorAll('.results-dropdown')];
console.log(resultsDrops);
const resultsNum = resultsDrops.map(drop => drop.children.length);
console.log(resultsNum);

// Opening result tabs
resultsOutline.forEach(result => result.addEventListener('click', function(e) {
    if(e.target.parentElement.parentElement.classList.value === 'column column-document') return e.target.parentElement; 
    this.parentElement.lastElementChild.classList.toggle('results-dropdown-visible');
    if(!this.parentElement.lastElementChild.style.height) {this.parentElement.lastElementChild.style.height = `${5 * 3}rem`}
    else this.parentElement.lastElementChild.style.height = '';
    this.firstElementChild.firstElementChild.firstElementChild.classList.toggle('pointer-transformed');
}));


