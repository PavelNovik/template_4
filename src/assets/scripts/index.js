'use strict';

console.log('Hello world');

const headerLogo = document.querySelector('.header__logo');
const footerLogo = document.querySelector('.footer__logo');
const headerNavItems = document.querySelectorAll('.header__navigation_item');
const requestForm = document.querySelector('.request__form');

// console.log(headerNavItems, headerLogo);

headerLogo.addEventListener('click', function (e) {
  console.log(`Now you press ${e}, the target of this elements is ${e.target}`);
  console.log(e);
  console.log(e.target);
});

function sendDataForm() {}
