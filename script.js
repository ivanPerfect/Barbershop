const button = document.querySelectorAll('.btn2, .btn_barber_1, .btn_barber_2, .btn_barber_3, .btn_barber_4, .btn1');
let buttonLenth = button.length;
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const button1 = document.querySelectorAll('.btn4 , .button_close');
let buttonLenth2= button1.length;

for (let i =0; i < buttonLenth; i++){
  button[i].addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
  });
};

for (let index = 0; index<buttonLenth2; index++){
  button1[index].addEventListener('click', ()=> {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});
};

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
})
const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((element) => observer.observe(element));