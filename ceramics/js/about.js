
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // ABOUT PAGE MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.getElementById("aboutMenuToggle");
    const navbar = document.getElementById("aboutNavbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("show");

            const isOpen = navbar.classList.contains("show");

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

            menuToggle.setAttribute("aria-expanded", isOpen);

        });


        // CLOSE MENU AFTER CLICKING A LINK

        navbar.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("show");

                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }

});
