'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');



for (let index = 0; index < btnOpenModal.length; index += 1)
    btnOpenModal[index].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

btnCloseModal.addEventListener('click', function () {
    console.log('aaa')
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
