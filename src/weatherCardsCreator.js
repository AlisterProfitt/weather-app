function createElement(element) {
  return document.createElement(element);
}

function appendElementToParent(element, parent) {
  let parentElement = document.querySelector(parent);
  parentElement.appendChild(element);
}

function createHeader(country) {
  const elem = createElement("h1");
  elem.textContent = `3 Day Forecast For ${country}`;
  appendElementToParent(elem, "body");
}

function createWeatherCardsContainer() {
  const elem = createElement("div");
  elem.classList.add("container", "weather-cards-container");
  appendElementToParent(elem, "body");
}

function createWeatherCard() {
  const elem = createElement("div");
  elem.classList.add("card", "first-card");
  appendElementToParent(elem, "div.weather-cards-container");
  createDate();
  createIconContainer();
  createDescription();
  createMoreInfo();
}

function createDate() {
  const elem = createElement("div");
  elem.classList.add("date");
  // elem.textContent = date;
  appendElementToParent(elem, "div.first-card");
}

function createIconContainer() {
  const elem = createElement("div");
  elem.classList.add("container", "icon-container");
  appendElementToParent(elem, "div.first-card");
  createIconImage();
  createTemperatureContainer();
}

function createIconImage() {
  const elem = createElement("img");
  appendElementToParent(elem, "div.icon-container");
}

function createTemperatureContainer() {
  const elem = createElement("div");
  elem.classList.add("container", "temperature-container");
  appendElementToParent(elem, "div.icon-container");
  createTemperatureReading();
  createTemperatureButton();
}

function createTemperatureReading() {
  const elem = createElement("div");
  elem.classList.add("temperature");
  appendElementToParent(elem, "div.temperature-container");
}

function createTemperatureButton() {
  const elem = createElement("button");
  elem.classList.add("convert");
  elem.textContent = "Convert";
  appendElementToParent(elem, "div.temperature-container");
}

function createDescription() {
  const elem = createElement("div");
  elem.classList.add("description");
  appendElementToParent(elem, "div.first-card");
  createParagraphForDescription();
}

function createParagraphForDescription() {
  const elem = createElement("p");
  appendElementToParent(elem, "div.description");
}

function createMoreInfo() {
  const elem = createElement("div");
  elem.classList.add("more-info");
  appendElementToParent(elem, "div.first-card");
  createHumidityForMoreInfo();
}

function createHumidityForMoreInfo() {
  const elem = createElement("p");
  appendElementToParent(elem, "div.more-info");
}

function createAllElements() {
  createHeader();
  createWeatherCardsContainer();
  createWeatherCard();
}

export { createAllElements };