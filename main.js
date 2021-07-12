const humberger = document.querySelector('.humberger')
const menubar = document.querySelector('header nav ul')
humberger.addEventListener('click',()=>{
    menubar.classList.toggle('showMenu');
})