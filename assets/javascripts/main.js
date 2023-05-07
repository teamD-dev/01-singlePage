"use strict";

{
  const open = document.querySelector('.js-headerOpen');
  const closes = document.querySelectorAll('.js-headerClose');
  const closeBtn = document.querySelector('.bi-x');
  const openBtn = document.querySelector('.bi-list');
  const container = document.querySelector('.p-header__container');
  const header = document.querySelector('.p-header');

  open.addEventListener('click', () => {
    container.classList.add('is-active');
    closeBtn.classList.remove('u-hidden');
    openBtn.classList.add('u-hidden');
    container.classList.add('p-header__backGround');
  });
  closes.forEach( close => {
    close.addEventListener('click', () => {
      container.classList.remove('is-active');
      closeBtn.classList.add('u-hidden');
      openBtn.classList.remove('u-hidden');
    container.classList.remove('p-header__backGround');
    });
  })
}