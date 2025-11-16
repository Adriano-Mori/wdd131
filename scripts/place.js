//footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// weather (static values)
const temp = 19;
const windSpeed = 13;

// windchill calculation
function calculateWindChill(t, v) {
    if (t <= 10 && v > 4.8) {
        return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1) + ' °C';
    } else {
        return 'N/A';
    }
}
document.getElementById('temp').textContent = temp + ' °C';
document.getElementById('wind').textContent = windSpeed + ' km/h';
document.getElementById('windchill').textContent = calculateWindChill(temp, windSpeed);