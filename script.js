'use strict';
const dropdown_btns = document.querySelectorAll('.dropdown-btn');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  const navbar_content = document.querySelector('.navbar-content');
  burger.classList.toggle('active');

  navbar_content.classList.toggle('show');
});

dropdown_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const dropdown = e.currentTarget.nextElementSibling;
    dropdown.classList.toggle('show');
    console.log(dropdown);
  });
});
