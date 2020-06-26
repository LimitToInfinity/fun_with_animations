const hamburger = document.querySelector(".fa-bars");
const links = document.querySelector(".links");
const main = document.querySelector('main');
const helloWorld = document.querySelector('main > div');

hamburger.addEventListener('click', showMenu);
// helloWorld.addEventListener('click', slideAcross);

function showMenu() {
  links.classList.toggle('slide');
  hamburger.classList.toggle('fade-out');
}

const interval = setInterval(slideAcross, 500);
setTimeout(() => clearInterval(interval), 3000);

function slideAcross() {
  helloWorld.classList.toggle('slide-across');
}

