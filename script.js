const button = document.querySelectorAll('.btn2, .btn_barber_1, .btn_barber_2, .btn_barber_3, .btn_barber_4');
let buttonLenth = button.length;
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const button1 = document.querySelector('.btn4');

for (let i =0; i < buttonLenth; i++){
  button[i].addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
  });
}
button1.addEventListener('click', () => {
  form.classList.remove('open');
  popup.classList.remove('popup_open');
});



