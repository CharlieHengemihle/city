/* Imports */

/* Get DOM Elements */
let cityName = document.getElementById('city-name');
let nameDisplay = document.getElementById('name-zone');
let climateSelect = document.getElementById('climate-selector');
let archSelect = document.getElementById('architecture-selector');
let attractionsInput = document.getElementById('attractions');
// let climateDisplay = document.getElementById('climate-display');
// let archDisplay = document.getElementById('architecture-display');
// let attractionsDisplay = document.getElementById('attractions-display');
let climateImage = document.getElementById('climate-display');
let archImage = document.getElementById('architecture-display');
let attractionsList = document.getElementById('attractions-display');
let addButton = document.getElementById('att-button');
let cityArticle = document.getElementById('city');

/* State */
const city = {
    name: 'townsylvania',
    climate: 'tundra',
    architecture: 'goth',
    attractions: [],
};
/* Events */
cityName.addEventListener('input', () => {
    city.name = cityName.value;
    // displayClimate();
    // displayArchitecture();
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    // displayClimate();
    displayCity();
});

archSelect.addEventListener('change', () => {
    city.architecture = archSelect.value;
    // displayArchitecture();
    displayCity();
});
/* Display Functions */
function displayAttractions() {
    attractionsList.innerHTML = '';

    for (const attractions of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attractions;
        attractionsList.append(li);
    }
}

addButton.addEventListener('click', () => {
    const attractions = attractionsInput.value;
    city.attractions.push(attractions);
    displayAttractions();
    attractionsInput.value = '';
});

function displayCity() {
    nameDisplay.textContent = city.name;
    cityArticle.classList.value = '';
    cityArticle.classList.add(city.climate);
    cityArticle.classList.add(city.architecture);
    climateImage.src = 'assets/city/' + city.climate + '.jpg';
    archImage.src = 'assets/city/' + city.architecture + '.jpg';
}
// function displayClimate() {
//     nameDisplay.textContent = city.name;
//     cityArticle.classList.value = '';
//     cityArticle.classList.add(city.climate);
//     // cityArticle.classList.add(city.architecture);
//     climateImage.src = 'assets/city/' + city.climate + '.jpg';
//     // archImage.src = 'assets/city/' + city.architecture + '.jpg';
// }
// function displayArchitecture() {
//     nameDisplay.textContent = city.name;
//     cityArticle.classList.value = '';
//     // cityArticle.classList.add(city.climate);
//     cityArticle.classList.add(city.architecture);
//     // climateImage.src = 'assets/city/' + city.climate + '.jpg';
//     archImage.src = 'assets/city/' + city.architecture + '.jpg';
// }
// (don't forget to call any display functions you want to run on page load!)
