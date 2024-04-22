// Menu on Mobile
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});