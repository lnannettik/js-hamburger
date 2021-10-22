
console.log('bellaaaaaaa')

const click = document.querySelector('.fa-bars');

const close = document.querySelector('.close');

const menu = document.querySelector('.hamburger-menu');

click.addEventListener('click', function () {
    menu.classList.add('active');
});

close.addEventListener('click', function () {
    menu.classList.remove('active');
});

