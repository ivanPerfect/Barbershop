const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
    })
  })
  const hiddenEl = document.querySelectorAll(".hidden");
  hiddenEl.forEach((element) => observer.observe(element));


  const btn1 = document.querySelector('.btn1');
  const popup = document.querySelector('.popup');
  const form = document.querySelector('#blablabla');
  const buttonClose = document.querySelector('.button_close');


  btn1.addEventListener('click', ()=>{
    form.classList.add('open');
    popup.classList.add('popup_open');
  });

  buttonClose.addEventListener('click', ()=> {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
  })