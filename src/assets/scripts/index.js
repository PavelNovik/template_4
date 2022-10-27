'use strict';
// console.log('Hello world');
const users = [];

const headerLogo = document.querySelector('.header__logo');
const footerLogo = document.querySelector('.footer__logo');
const headerNavItems = document.querySelectorAll('.header__navigation_item');
const requestForm = document.querySelector('.request__form');
const formInputs = requestForm.elements;

// console.log(requestForm);
// console.log(formInputs);

// for (let el of formInputs) {
//   console.log(el.value);
// }

// console.log(headerNavItems, headerLogo);

headerLogo.addEventListener('click', function (e) {
  console.log(`Now you press ${e}, the target of this elements is ${e.target}`);
  console.log(e);
  console.log(e.target);
});

requestForm.addEventListener('submit', getDataForm);

function getDataForm(e) {
  e.preventDefault();
  const user = {};
  const userName = requestForm.fullName.value;
  const userEmail = requestForm.email.value;
  const userPhone = requestForm.phone.value;
  const userCountry = requestForm.country.value;
  const userLegacy = requestForm.rules.checked;
  if (userLegacy) {
    user.name = userName;
    user.mail = userEmail;
    user.phone = userPhone;
    user.country = userCountry;
    users.push(user);
    console.log(user, users);
  }

  console.log(
    userLegacy
      ? `Добрый день, уважаемый ${userName}. На вашу почту: ${userEmail} было отправленно сообщение. Так же на ваш номер телефона ${userPhone} в течении суток должно прийти СМС с кодом доступа к вашему аккаунту. Ваша страна: ${userCountry} учавствует в нашей программе.`
      : `К сожалению вы не можете продолжить без согласия.`
  );

  for (let el of formInputs) {
    if (el.type === 'submit') continue;
    if (el.type === 'checkbox') {
      el.checked = false;
      continue;
    }
    el.value = '';
  }
}
// const reqForm = document.forms.userForm;
// console.log(reqForm.elements);
