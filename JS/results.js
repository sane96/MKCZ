'use strict';

const resultsOutline = document.querySelectorAll('.results-outline');



// document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
//     this.querySelector('.custom-select').classList.toggle('open');
// })
for (const dropdown of document.querySelectorAll(".select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.select').classList.toggle('open');
    })
}

// window.addEventListener('click', function (e) {
//     const select = document.querySelector('.select')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});


// Opening result tabs
resultsOutline.forEach(result => result.addEventListener('click', function(e) {
    
    if(e.target.parentElement.parentElement.classList.value === 'column column-document') {
        e.target.parentElement;
    } else {

    this.parentElement.lastElementChild.classList.toggle('results-dropdown-visible');
    this.firstElementChild.firstElementChild.firstElementChild.classList.toggle('pointer-transformed');
    }
}))


