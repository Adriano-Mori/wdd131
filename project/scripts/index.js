const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#navigation");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
    });
}


const interestSelect = document.getElementById("interest");

if (interestSelect) {
    const options = [
        { value: "culture", text: "Culture" },
        { value: "nature", text: "Nature" },
        { value: "gastronomy", text: "Gastronomy" },
        { value: "other", text: "Other" }
    ];

    options.forEach(item => {
        interestSelect.add(new Option(item.text, item.value));
    });
}


const yearSpan = document.getElementById("year");
const lastModSpan = document.getElementById("last-modified");
//footer
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModSpan) lastModSpan.textContent = document.lastModified;

const reviewOutput = document.getElementById("review-output");
const reviewCountSpan = document.getElementById("review-count");


if (reviewOutput && reviewCountSpan) {

    // Count in localStorage
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    reviewCountSpan.textContent = count;

    // Display 
    const params = new URLSearchParams(window.location.search);
    let html = "<ul>";

    params.forEach((value, key) => {
        html += `<li><strong>${key}:</strong> ${value}</li>`;
    });

    html += "</ul>";
    reviewOutput.innerHTML = html;
}