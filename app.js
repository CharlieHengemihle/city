/* Imports */

/* Get DOM Elements */
let cityName = document.getElementById('city-name');
let climateSelect = document.getElementById('climate-selector');
let archSelector = document.getElementById('architecture-selector');
let attractionsInput = document.getElementById('attractions');
let climateDisplay = document.getElementById('climate-display');
let archDisplay = document.getElementById('architecture-display');
let attractionsDisplay = document.getElementById('attractions-display');
let climateImage = document.getElementById('');
let archImage = document.getElementById('');
let attractionsImage = document.getElementById('');


/* State */
const city = {
    name: 'townsylvania',
    climate: 'balmy',
    architecture: 'arch heavy',
    attractions: [],
};
/* Events */
climateSelect.addEventListener('change'. () => {
    city.climate = climateSelect.value;
    displayCity();
}):
/* Display Functions */
function displayCity() {


}
// (don't forget to call any display functions you want to run on page load!)
