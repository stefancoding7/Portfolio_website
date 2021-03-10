
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

const menuIcon = document.querySelector('#menu-icon');


if(menuIcon) {
  menuIcon.addEventListener('click', e => {
    !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
    return headerBtnClicked = !headerBtnClicked;
  });
}
