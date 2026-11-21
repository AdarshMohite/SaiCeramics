
// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");


menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("show");

    const isOpen = navbar.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// =====================================
// CLOSE MENU AFTER CLICKING A LINK
// =====================================

document.querySelectorAll(".navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
