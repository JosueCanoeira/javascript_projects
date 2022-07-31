'use strict';

const checkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess');

checkBtn.addEventListener('click', function () {

    const a = Number(guess.value);
    //console.log(a);
    const randomNumber = Math.trunc(Math.random() * 20) + 1;
    //console.log(randomNumber);
});