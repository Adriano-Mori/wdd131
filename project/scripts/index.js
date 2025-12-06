//hamburger menu
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
});

//footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified