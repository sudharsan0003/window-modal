'use strict';

const btnShowModalOne = document.querySelector('.btn-show-one');
const btnShowModalTwo = document.querySelector('.btn-show-two');
console.log(btnShowModalTwo);
// console.log(btnShowModal.length);
const btnCloseModalOne = document.getElementById('btn-close-one');
const btnCloseModalTwo = document.getElementById('btn-close-two');

const modalWindowOne = document.getElementById('modal-one');
const modalWindowTwo = document.getElementById('modal-two');

btnShowModalOne.addEventListener('click', function () {
  modalWindowOne.classList.remove('popup-one');
});
btnShowModalTwo.addEventListener('click', function () {
  modalWindowTwo.classList.remove('popup-two');
});

// modalWindow.classList.add('modal-window');
// // console.log(modalWindow.classList);
// modalWindow.classList.remove('popup');
// // console.log(modalWindow.classList);

// for (let i = 0; i < btnShowModal.length; i++) {
//   console.log(btnShowModal[i]);
//   btnShowModal[i].addEventListener('click', function () {
//     modalWindow.classList.remove('popup');
//   });
// }
btnCloseModalOne.addEventListener('click', function () {
  modalWindowOne.classList.add('popup-one');
});
btnCloseModalTwo.addEventListener('click', function () {
  modalWindowTwo.classList.add('popup-two');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalWindow.classList.add('popup');
  }
});
