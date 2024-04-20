// Navigation menu
//From Tabs to Burger Menu
let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

// When the user clicks the navigation button, a class is added to the navigation bar and changes its style
const showNav = () => {
  navbar.classList.toggle("open");
};
// When the navigation  menu is showing, when the user scrolls down, it will be closed automatically
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};
