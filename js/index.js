const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".enlaces");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle(".enlaces__visible")
});