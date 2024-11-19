export function convertFarenheitToCelcius(temperature) {
    return 5/9 * (temperature - 32);
}

export function convertCelciusToFarenheit(temperature) {
    return (temperature * (9/5)) + 32
}