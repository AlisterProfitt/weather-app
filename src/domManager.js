import { getRelevantWeatherData } from "./apiRequest";
import { createAllElements } from "./weatherCardsCreator";
import { createForm } from "./formCreator";
import { removeAllNonFormElements } from "./resetPage";

createForm();

const citySearch = document.querySelector('input[type="search"]');
const form = document.querySelector('form');
form.addEventListener('submit', setCity);


async function setCity(e) {
    e.preventDefault();
    removeAllNonFormElements();
    const city = citySearch.value;
    const { humidity, temperature, description, date, icon } = await getRelevantWeatherData(city);
    console.log(humidity, temperature, description, date, icon);
    createAllElements(temperature, humidity, description, date, icon, city);    
}
