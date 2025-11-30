//review
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("review-count").textContent = count;


//lastmodified
document.getElementById("last-modified").textContent = document.lastModified;


const params = new URLSearchParams(window.location.search);
const output = document.getElementById("review-output");

let html = "<ul>";

params.forEach((value, key) => {
    html += `<li><strong>${key}:</strong> ${value}</li>`;
});

html += "</ul>";

output.innerHTML = html;