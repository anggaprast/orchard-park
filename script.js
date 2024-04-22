// Menu on Mobile
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});

// Click anywhere outside sidebar to close the nav
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navMenu.contains(e.target)) {
        menu.classList.remove('menu-active');
        navMenu.classList.add('hidden');
    }
})