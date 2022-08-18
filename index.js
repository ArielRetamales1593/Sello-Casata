const header__nav= document.querySelector('.header__nav') ;

window.addEventListener('scroll',function(){

header__nav.classList.toggle('active',window.scrollY >0)


})