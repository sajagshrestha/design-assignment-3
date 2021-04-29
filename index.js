const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;
hamburger.addEventListener("click", () => {
	mobileMenu.classList.toggle("open");
	hamburger.classList.toggle("open-hamburger");
});
