//Open and close hamburger menu
const hamMenu = document.querySelector(".hamburger-menu-closed");

const offScreenMenu = document.querySelector(".hamburger-menu-open");

//Open hamburger menu
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

//Open hamburger menu
offScreenMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  hamMenu.classList.toggle("active");
});