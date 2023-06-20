let navToggle = document.getElementById("navtoggle");
let navToggleClose = document.getElementById("navToggleClose");
let navLinks = document.getElementsByClassName("nav-link");
​
function navToggles() {
    let nav = document.getElementById("nav");
    nav.classList.toggle("nav-on");
}
​
navToggle.addEventListener("click", navToggles);
navToggleClose.addEventListener("click", navToggles);
​
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", navToggles);
  }