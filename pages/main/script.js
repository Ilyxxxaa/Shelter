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
document.addEventListener('click', (e) => { console.log(e.target); });

const burgerBtn = document.querySelector('.burger__btn');
const menu = document.querySelector('.menu');
const menu__list = document.querySelector('.menu__list');
const headerContent = document.querySelector('.header__content');
const body = document.body;

burgerBtn.addEventListener('click', clickBurger);
menu__list.addEventListener('click', clickMenu);
menu.addEventListener('click', clickMenu);


function clickBurger() {
    burgerBtn.classList.toggle('burger__btn--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('noscroll');
}

function clickMenu() {
    menu.classList.remove('menu--active');
    burgerBtn.classList.remove('burger__btn--active');
    body.classList.remove('noscroll');

}