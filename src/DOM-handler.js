import { getRelevantWeatherData } from "./apiRequest.js";

const citySearch = document.querySelector('input[type="search"]');
const form = document.querySelector('form');

form.addEventListener('submit', setCity);

function setCity(e) {
    e.preventDefault();
    const city = citySearch.value;
    getRelevantWeatherData(city)
}
