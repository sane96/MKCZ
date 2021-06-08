'use strict';

const resultsOutline = document.querySelectorAll('.results-outline');


resultsOutline.forEach(result => result.addEventListener('click', function(e) {
    
    if(e.target.parentElement.parentElement.classList.value === 'column column-document') {
        e.target.parentElement;
    } else {

    this.parentElement.lastElementChild.classList.toggle('results-dropdown-visible');
    this.firstElementChild.firstElementChild.firstElementChild.classList.toggle('pointer-transformed');
    }
}))

