let hamburgerMenu = document.getElementById("hamburger-menu");
let closeMenu = document.getElementById("close-menu-btn");
hamburgerMenu.addEventListener("click", function () {
  document.getElementById("click-on-menu").classList.add("side-menu-show");
});

closeMenu.addEventListener("click", function () {
  document.getElementById("click-on-menu").classList.remove("side-menu-show");
});

let wordPressButton = document.getElementById("wp-btn");

wordPressButton.addEventListener("click", function () {
  document.getElementById("photos").style.display = "none";
  document.getElementById("js-game").style.display = "none";
  document.getElementById("word-press").style.display = "grid";
});

let photosButton = document.getElementById("photo-btn");

photosButton.addEventListener("click", function () {
  document.getElementById("photos").style.display = "grid";
  document.getElementById("js-game").style.display = "none";
  document.getElementById("word-press").style.display = "none";
});

let jsGameButton = document.getElementById("js-btn");

jsGameButton.addEventListener("click", function () {
  document.getElementById("photos").style.display = "none";
  document.getElementById("js-game").style.display = "grid";
  document.getElementById("word-press").style.display = "none";
});

document.querySelector(".dl-btn").addEventListener("click", function () {
  document.querySelector(".dl-btn").classList.toggle("move");
  document.getElementById("banner").classList.toggle("dark-banner");
  document.getElementById("about").classList.toggle("dark-about");
  document.getElementById("portfolio").classList.toggle("dark-portfolio");
  document.getElementById("footer").classList.toggle("dark-footer");
});
