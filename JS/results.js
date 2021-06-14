'use strict';

const resultsOutline = document.querySelectorAll('.results-outline');
const selectWrapper = document.querySelector('.select-wrapper');


// Opening season tab
selectWrapper.addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
})

// Adding event listeners to all tab options 
for (const option of document.querySelectorAll(".option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
        }
    })
}

//  Closing dropdown by clicking outside of dropdown
window.addEventListener('click', function(e) {
    const select = document.querySelector('.select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
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

