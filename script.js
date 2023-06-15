'use strict';

const btnShowModal = document.querySelectorAll('.btn-show');
// console.log(btnShowModal.length);
const btnCloseModal = document.getElementById('btn-close');

const modalWindow = document.getElementById('modal');

// modalWindow.classList.add('modal-window');
// // console.log(modalWindow.classList);
// modalWindow.classList.remove('popup');
// // console.log(modalWindow.classList);

for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i]);
  btnShowModal[i].addEventListener('click', function () {
    modalWindow.classList.remove('popup');
  });
}
btnCloseModal.addEventListener('click', function () {
  modalWindow.classList.add('popup');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalWindow.classList.add('popup');
  }
});
