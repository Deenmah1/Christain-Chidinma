document.addEventListener("DOMContentLoaded", () => {
    const hamBurger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    let icon = document.querySelector('i');

    hamBurger.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
        }
    })
})