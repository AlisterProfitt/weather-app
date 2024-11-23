function convertFarenheitToCelcius(temperature) {
    return 5/9 * (temperature - 32);
}

export function convertTemperature(button) {
    const temperatureReading = document.querySelector('div.temperature');
    const temperature = parseInt(temperatureReading.dataset.temperature);
    if (button.classList.contains('default')) {
        temperatureReading.textContent =
          parseInt(convertFarenheitToCelcius(temperature)) + "°C";
    } else {
        temperatureReading.textContent = temperature + "°F";
    }

    button.classList.toggle("default");
}