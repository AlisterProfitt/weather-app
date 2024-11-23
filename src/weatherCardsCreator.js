import { icons } from "./Assets/Icons/index";

function camelize(string) {
  let array = string.split("-");
  let capital = array.map((item, index) =>
    index
      ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      : item.toLowerCase()
  );
  return capital.join("");
}

function createElement(element) {
  return document.createElement(element);
}

function appendElementToParent(element, parent) {
  const parentElement = document.querySelector(parent);
  parentElement.appendChild(element);
}

function createHeader(city) {
  const elem = createElement("h1");
  elem.textContent = `Today's Forecast For ${city.toUpperCase()}`;
  appendElementToParent(elem, "body");
}

function createWeatherCardsContainer() {
  const elem = createElement("div");
  elem.classList.add("container", "weather-cards-container");
  appendElementToParent(elem, "body");
}

function createWeatherCard(temperature, humidity, description, date, icon) {
  const elem = createElement("div");
  elem.classList.add("card", "first-card");
  appendElementToParent(elem, "div.weather-cards-container");
  createDate(date);
  createIconContainer(temperature, icon);
  createDescription(description);
  createMoreInfo(humidity);
}

function createDate(date) {
  const elem = createElement("div");
  elem.classList.add("date");
  elem.textContent = date;
  appendElementToParent(elem, "div.first-card");
}

function createIconContainer(temperature, icon) {
  const elem = createElement("div");
  elem.classList.add("container", "icon-container");
  appendElementToParent(elem, "div.first-card");
  createIconImage(icon);
  createTemperatureContainer(temperature);
}

function createIconImage(icon) {
  const elem = createElement("img");
  elem.src = icons[camelize(icon)];
  appendElementToParent(elem, "div.icon-container");
}

function createTemperatureContainer(temperature) {
  const elem = createElement("div");
  elem.classList.add("container", "temperature-container");
  appendElementToParent(elem, "div.icon-container");
  createTemperatureReading(temperature);
  createTemperatureButton();
}

function createTemperatureReading(temperature) {
  const elem = createElement("div");
  elem.textContent = `${parseInt(temperature)}°F`;
  elem.classList.add("temperature");

  appendElementToParent(elem, "div.temperature-container");
}

function createTemperatureButton() {
  const elem = createElement("button");
  elem.classList.add("convert");
  elem.textContent = "Convert";
  appendElementToParent(elem, "div.temperature-container");
}

function createDescription(description) {
  const elem = createElement("div");
  elem.classList.add("description");
  appendElementToParent(elem, "div.first-card");
  createParagraphForDescription(description);
}

function createParagraphForDescription(description) {
  const elem = createElement("p");
  elem.textContent = description;
  appendElementToParent(elem, "div.description");
}

function createMoreInfo(humidity) {
  const elem = createElement("div");
  elem.classList.add("more-info");
  appendElementToParent(elem, "div.first-card");
  createHumidityForMoreInfo(humidity);
}

function createHumidityForMoreInfo(humidity) {
  const elem = createElement("p");
  elem.textContent = `Humidity: ${parseInt(humidity)}%`;
  appendElementToParent(elem, "div.more-info");
}

function createAllElements(
  temperature,
  humidity,
  description,
  date,
  icon,
  city
) {
  createHeader(city);
  createWeatherCardsContainer();
  createWeatherCard(temperature, humidity, description, date, icon);
}

export { createAllElements };
