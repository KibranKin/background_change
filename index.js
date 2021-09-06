const button1 = document.querySelector('.btn1');
const body1 = document.querySelector('.body');

button1.addEventListener('click',()=>{
    body1.style.backgroundColor ="pink";
    button1.textContent="clicked";
})