const nav = document.querySelector('nav');
const enlace = document.querySelectorAll('.enlaces__nav');
window.addEventListener('scroll', ()=>{
    nav.classList.toggle('navJs', window.scrollY > 0);
})

enlace.forEach(cadaEnlace =>{
    window.addEventListener('scroll', ()=>{
    cadaEnlace.classList.toggle('enlaceJs', window.scrollY > 0);
    })
})