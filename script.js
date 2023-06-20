const navToggle = document.getElementById('navtoggle');
const navToggleClose = document.getElementById('navToggleClose');
const navLinks = document.getElementsByClassName('nav-link');

function navToggles() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-on');
}

navToggle.addEventListener('click', navToggles);
navToggleClose.addEventListener('click', navToggles);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', navToggles);
}