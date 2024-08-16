const workitems = document.querySelector('.work .item');
const workitemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector('#close-button');
const prevButtton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');


openCloseButton.addEventListener('click', => {
    menuMobileItems.classList.toggle('menu-mobile-closed');
});


workitems  