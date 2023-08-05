var openButton = document.getElementById("dropdown-button");
var navLinks = document.getElementById("navLinks");
var closeButton = document.getElementById("close-button");

function openMenu() {
  navLinks.classList.add("show-menu");
  navLinks.style.display = "block";
  openButton.style.display = "none";
  closeButton.style.display = "block";
}

function hideMenu() {
  navLinks.classList.remove("show-menu");
  navLinks.style.display = "none";
  openButton.style.display = "block";
  closeButton.style.display = "none";
}