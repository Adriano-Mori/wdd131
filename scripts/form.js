const productSelect = document.getElementById('product-name');

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
}); (product => {
    const option = document.createElement('option');
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
});


// just in case the user tries to select a future date
const installDate = document.getElementById('install-date');
installDate.max = new Date().toISOString().split('T')[0];


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        alert('Please fill the required fields before submitting!');
        e.preventDefault();
    }
});

//local storage
if (window.location.pathname.includes('review.html')) {
    let count = Number(localStorage.getItem('reviewCount')) || 0;
    count++;
    localStorage.setItem('reviewCount', count);
}
//foter
document.addEventListener("DOMContentLoaded", () => {
    const lastModElement = document.getElementById("last-modified");
    if (lastModElement) {
        lastModElement.textContent = document.lastModified;
    }
});