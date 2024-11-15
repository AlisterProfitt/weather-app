const KEY = "4WB2XHP2B4BTABGTS8YCNGX45";
const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function getWeatherByLocation(location) {
    try {
        const response = await fetch(`${URL}${location}?key=${KEY}`)
        const data = await response.json();
        console.log(data);
        return data;
    } catch (exception) {
        console.log('Error! ' + exception);
    }
}

export async function getTemperature(location) {
    const data = await getWeatherByLocation(location);
    const temperature = data.days[0].temp;
    console.log(temperature);
    return temperature;    
}