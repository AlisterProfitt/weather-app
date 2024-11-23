import { getRelevantWeatherData } from "./apiRequest.js";
import { convertFarenheitToCelcius } from "./temperatureConverter";
import { convertCelciusToFarenheit } from "./temperatureConverter";
import { icons } from "./Assets/Icons/index";

const citySearch = document.querySelector('input[type="search"]');
const form = document.querySelector('form');
form.addEventListener('submit', setCity);


async function setCity(e) {
    e.preventDefault();
    const city = citySearch.value;
    const weatherData = await getRelevantWeatherData(city);
    console.log(weatherData);
    createAllElements(weatherData)    
}

function createElement(element) {
    return document.createElement(element);
}

function appendElementToParent(element, parent) {
    let parentElement = document.querySelector(parent);
    parentElement.appendChild(element);
}

function createHeader() {
    const elem = createElement("h1");
    elem.textContent = `3 Day Forecast For ${citySearch.value}`;
    appendElementToParent(elem, 'body');
}

function createWeatherCardsContainer() {
    const elem = createElement('div');
    elem.classList.add('container', 'weather-cards-container');
    appendElementToParent(elem, 'body');
}

function createWeatherCard() {
    const elem = createElement("div");
    elem.classList.add("card", "first-card");
    appendElementToParent(elem, 'div.weather-cards-container');
    createDate();
    createIconContainer();
    createDescription();
    createMoreInfo();
}

function createDate() {
    const elem = createElement('div');
    elem.classList.add('date');
    // elem.textContent = date;
    appendElementToParent(elem, 'div.first-card');
}

function createIconContainer() {
    const elem = createElement("div");
    elem.classList.add("container", "icon-container");
    appendElementToParent(elem, "div.first-card");
    createImage();
    createTemperatureContainer();
}

function createImage() {
    const elem = createElement("img");
    appendElementToParent(elem, "div.icon-container");
}

function createTemperatureContainer() {
    const elem = createElement('div');
    elem.classList.add('container', 'temperature-container');
    appendElementToParent(elem, 'div.icon-container');
    createTemperatureReading();
    createTemperatureButton();
}

function createTemperatureReading() {
    const elem = createElement('div');
    elem.classList.add('temperature');
    appendElementToParent(elem, 'div.temperature-container');
}

function createTemperatureButton() {
    const elem = createElement('button');
    elem.classList.add('convert');
    elem.textContent = 'Convert';
    appendElementToParent(elem, 'div.temperature-container');
}

function createDescription() {
    const elem = createElement('div');
    elem.classList.add('description');
    appendElementToParent(elem, 'div.first-card')
    createParagraphForDescription();
}

function createParagraphForDescription() {
    const elem = createElement('p');
    appendElementToParent(elem, 'div.description');
}

function createMoreInfo() {
    const elem = createElement('div');
    elem.classList.add('more-info');
    appendElementToParent(elem, 'div.first-card');
    createHumidityForMoreInfo();
}

function createHumidityForMoreInfo() {
    const elem = createElement('p');
    appendElementToParent(elem, 'div.more-info');
}

function createAllElements() {
    createHeader();
    createWeatherCardsContainer();
    createWeatherCard();
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