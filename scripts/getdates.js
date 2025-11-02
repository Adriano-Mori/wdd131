document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("currentyear");
    const modified = document.getElementById("lastModified");

    const today = new Date();
    year.textContent = today.getFullYear();

    modified.textContent = `Last Modification: ${document.lastModified}`;
});