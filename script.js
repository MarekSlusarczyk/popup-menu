const btnOpen = document.querySelector('#btn1');
const popupBig = document.querySelector('#big');

const btnClose = document.querySelector('div.popup div.close');
const btnOk = document.querySelector('button.confirm');



btnOpen.addEventListener('click', function() {
    popupBig.classList.add('show');
})

btnClose.addEventListener('click', function() {
    popupBig.classList.remove('show');
})

btnOk.addEventListener('click', function() {
    popupBig.classList.remove('show');
})

const pupupSmall = document.querySelector('#small');
const buttonCancel = document.querySelector('#canc');

buttonCancel.addEventListener('click', function() {
    pupupSmall.classList.add('show')
})

const buttonYes = document.querySelector('#yes');
const buttonNo = document.querySelector('#no');

buttonYes.addEventListener('click', function() {
    pupupSmall.classList.remove('show');
    popupBig.classList.remove('show');
})

buttonNo.addEventListener('click', function() {
    pupupSmall.classList.remove('show');
})