import { getTemperature } from "./apiRequest.js";

const citySearch = document.querySelector('input[type="search"]');
const form = document.querySelector('form');

form.addEventListener('submit', inputCity);

function inputCity(e) {
    e.preventDefault();
    const city = citySearch.value;
    console.log(citySearch.value);
    getTemperature(city)
}