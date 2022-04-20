// Navigation Menu Items

function scrollAboutMe() {
  const element = document.getElementById("about");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("side-menu-id").classList.remove("side-menu-show");
}

function scrollPortfolio() {
  const element = document.getElementById("portfolio");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("side-menu-id").classList.remove("side-menu-show");
}

function scrollContact() {
  const element = document.getElementById("footer");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("side-menu-id").classList.remove("side-menu-show");
}

// HamburgerMenu and Side menu close btn

let hamburgerMenu = document.getElementById("hamburger-menu");
let closeMenu = document.getElementById("close-menu-btn");

hamburgerMenu.addEventListener("click", function () {
  document.getElementById("side-menu-id").classList.add("side-menu-show");
});

closeMenu.addEventListener("click", function () {
  document.getElementById("side-menu-id").classList.remove("side-menu-show");
});

//Greeting Text

const date = new Date();
const hour = date.getHours();

if (hour > 5 && hour <= 11) {
  document.getElementById("greeting").innerHTML = "Good morning!";
} else if (hour > 11 && hour <= 17) {
  document.getElementById("greeting").innerHTML = "Good afternoon!";
} else if (hour > 17 && hour <= 23) {
  document.getElementById("greeting").innerHTML = "Good evening!";
  darkMode();
} else {
  document.getElementById("greeting").innerHTML = "Good night!";
  darkMode();
}

//Portfolio Filters

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

//Dark-Light btn

let toggleImg = true;

function darkMode() {
  document.querySelector(".dl-btn").classList.toggle("move");
  document.getElementById("banner").classList.toggle("dark-banner");
  document.getElementById("dark-banner").classList.toggle("dark-layer");

  //Change Personal img  

  if (toggleImg === true) {
    document.getElementById("personal-img").src = "img/MK_BW.jpg";
    toggleImg = false;
  } else {
    document.getElementById("personal-img").src = "img/mohammad.png";
    toggleImg = true;
  }

  document.getElementById("about").classList.toggle("dark-about");
  document.getElementById("portfolio").classList.toggle("dark-portfolio");
  document.getElementById("footer").classList.toggle("dark-footer");
}


