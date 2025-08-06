document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const navList = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        navList.classList.toggle("show-menu");
    });
});
