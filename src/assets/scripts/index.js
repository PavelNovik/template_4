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

const header = document.querySelector('#header');
const service = document.querySelector('#service');
const pricing = document.querySelector('#pricing');
const gallery = document.querySelector('#gallery');

const btnHome = document.querySelector('#btnHome');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', function (e) {
  service.scrollIntoView({ behavior: 'smooth' });
});
btn2.addEventListener('click', function (e) {
  gallery.scrollIntoView({ behavior: 'smooth' });
});
btn3.addEventListener('click', function (e) {
  pricing.scrollIntoView({ behavior: 'smooth' });
});

footerLogo.addEventListener('click', function (e) {
  // const setCoords = header.getBoundingClientRect();
  // console.log(setCoords);
  header.scrollIntoView({ behavior: 'smooth' });
});

const headerTitle = document.querySelector('.title');
const headerTitleContent = headerTitle.innerHTML;
const aboutUs = `
<h2 class="header__title"><span class="colorize">About </span>us</h2>
                    <p class="header__text">Our company work at the world market about 30 years. And all this time we help to the all people, which was our clients. Now our direction is in the computer systems for every country and every person in the world. If you have some questions about us you can connect whith us in the contacts part of this web.</p>
`;
btn0.addEventListener('click', function () {
  headerTitle.innerHTML = aboutUs;
  btn0.classList.toggle('active');
  btnHome.classList.toggle('active');
  // console.log(headerTitleContent);
});
btnHome.addEventListener('click', function () {
  headerTitle.innerHTML = headerTitleContent;
  btnHome.classList.toggle('active');
  btn0.classList.toggle('active');
  // console.log(headerTitleContent);
});
