const mobileMenu = document.getElementById("mobile-menu"); // Cambiamos a #mobile-menu
const menuBtn = document.getElementById("navburger");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden"); // Alternar la visibilidad del menú móvil
});