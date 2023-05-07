"use strict";

{
  const open = document.querySelector('.js-headerOpen');
  const closes = document.querySelectorAll('.js-headerClose');
  const closeBtn = document.querySelector('.bi-x');
  const openBtn = document.querySelector('.bi-list');
  const container = document.querySelector('.p-header__container');
  const backGround = document.querySelector('.p-header__backGround');

  open.addEventListener('click', () => {
    container.classList.remove('u-hidden');
    closeBtn.classList.remove('u-hidden');
    openBtn.classList.add('u-hidden');
    backGround.classList.remove('u-hidden');
  });
  closes.forEach( close => {
    close.addEventListener('click', () => {
      container.classList.add('u-hidden');
      closeBtn.classList.add('u-hidden');
      openBtn.classList.remove('u-hidden');
      backGround.classList.add('u-hidden');
    });
  })
}