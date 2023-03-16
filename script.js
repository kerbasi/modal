'use strict';
const buttons = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const toggleModal = () => {
  modalEl.classList.toggle('hidden');
  overlayEl.classList.toggle('hidden');
};

buttons.forEach(button => {
  button.addEventListener('click', toggleModal);
});

overlayEl.addEventListener('click', toggleModal);

closeBtn.addEventListener('click', toggleModal);

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    toggleModal();
  }
});
