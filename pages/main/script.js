document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 0;
        // const topOffset = 0; // если не нужен отступ сверху document.querySelector('.scrollto').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const burgerBtn = document.querySelector('.burger__btn');
const menu = document.querySelector('.menu');
const menu__list = document.querySelector('.menu__list');
const headerContent = document.querySelector('.header__content');
const body = document.body;
const originLogo = document.querySelector('.header__logo-origin');
const menu__wrapper = document.querySelector('.menu-wrapper');

burgerBtn.addEventListener('click', clickBurger);
menu__list.addEventListener('click', clickMenu);
menu.addEventListener('click', clickMenu);


function clickBurger() {
    burgerBtn.classList.toggle('burger__btn--active');
    menu.classList.toggle('menu--active');
    menu__list.classList.toggle('menu__list--active');
    menu__wrapper.classList.toggle('menu-wrapper--active');
    body.classList.toggle('noscroll');
    originLogo.classList.toggle('header__logo-origin--active');

}

function clickMenu() {
    menu.classList.remove('menu--active');
    burgerBtn.classList.remove('burger__btn--active');
    menu__wrapper.classList.remove('menu-wrapper--active');
    body.classList.remove('noscroll');
    menu__list.classList.remove('menu__list--active');
    originLogo.classList.remove('header__logo-origin--active');

}