//hamburger
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuButton.textContent = menuButton.textContent === "☰" ? "X" : "☰";
});

// temlpes
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Trujillo Perú",
        location: "Trujillo, Perú",
        dedicated: "2015, June, 21",
        area: 28200,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3713.jpg"
    },
    {
        templeName: "Bahía Blanca Argentina",
        location: "Bahía Blanca, Argentina",
        dedicated: "2025, November, 23",
        area: 23400,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/eyafcdinietc2piwwuclmjgus8kq6af3w0h3xz7a/full/200%2C/0/default"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Hokkaido, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/800x500/sapporo-japan-exterior-day-1744806.jpg"
    },
];
//container
const container = document.getElementById("temple-container");
//display
function displayTemples(list) {
    container.innerHTML = "";
    list.forEach(temple => {
        const card = document.createElement("figure");
        card.className = "temple-card";
        card.innerHTML = `
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            </figcaption>
        `;
        container.appendChild(card);
    });
}
displayTemples(temples);

//filtering
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
    displayTemples(oldTemples);
});
document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
    displayTemples(newTemples);
});
document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});
document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

// footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
