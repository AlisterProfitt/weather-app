import { getRelevantWeatherData } from "./apiRequest.js";

const citySearch = document.querySelector('input[type="search"]');
const form = document.querySelector('form');

form.addEventListener('submit', setCity);

function setCity(e) {
    e.preventDefault();
    const city = citySearch.value;
    getRelevantWeatherData(city)
}

/* 
{
    "day0": {
        "temperature": 81.4,
        "description": "Partly cloudy throughout the day with storms possible.",
        "humidity": 81.3,
        "icon": "rain"
    },
    "day1": {
        "temperature": 81.1,
        "description": "Partly cloudy throughout the day with storms possible.",
        "humidity": 79.2,
        "icon": "rain"
    },
    "day2": {
        "temperature": 80.9,
        "description": "Partly cloudy throughout the day with storms possible.",
        "humidity": 81.6,
        "icon": "rain"
    },
    "day3": {
        "temperature": 79.9,
        "description": "Cloudy skies throughout the day with storms possible.",
        "humidity": 84.5,
        "icon": "rain"
    },
    "day4": {
        "temperature": 80.2,
        "description": "Partly cloudy throughout the day with storms possible.",
        "humidity": 83.9,
        "icon": "rain"
    }
}

*/