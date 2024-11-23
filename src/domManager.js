import { getRelevantWeatherData } from "./apiRequest";
import { createAllElements } from "./weatherCardsCreator";
import { createForm } from "./formCreator";

createForm();

const citySearch = document.querySelector('input[type="search"]');
const form = document.querySelector('form');
form.addEventListener('submit', setCity);


async function setCity(e) {
    e.preventDefault();
    const city = citySearch.value;
    const { humidity, temperature, description, date, icon } = await getRelevantWeatherData(city);
    console.log(humidity, temperature, description, date, icon);
    createAllElements(temperature, humidity, description, date, icon, city);    
}












/* 
{
    "day0": {
        "temperature": 39.2,
        "description": "Partly cloudy throughout the day.",
        "humidity": 72.4,
        "icon": "partly-cloudy-day",
        "date": "2024-11-22"
    },
    "day1": {
        "temperature": 47.2,
        "description": "Cloudy skies throughout the day with a chance of rain or snow throughout the day.",
        "humidity": 84.1,
        "icon": "rain",
        "date": "2024-11-23"
    },
    "day2": {
        "temperature": 57.7,
        "description": "Cloudy skies throughout the day with a chance of rain throughout the day.",
        "humidity": 80.4,
        "icon": "rain",
        "date": "2024-11-24"
    }
}
*/