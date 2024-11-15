import { getRelevantWeatherData } from "./apiRequest.js";

const citySearch = document.querySelector('input[type="search"]');
const form = document.querySelector('form');

form.addEventListener('submit', setCity);

citySearch.addEventListener('focus', () => {
    citySearch.setAttribute('placeholder', '');
})

citySearch.addEventListener('blur', () => {
    citySearch.setAttribute('placeholder', 'Please type the name of your city')
})

function setCity(e) {
    e.preventDefault();
    const city = citySearch.value;
    getRelevantWeatherData(city)
}
