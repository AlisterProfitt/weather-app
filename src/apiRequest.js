const KEY = "4WB2XHP2B4BTABGTS8YCNGX45";
const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

async function getWeatherDataByLocation(location) {
    try {
        const response = await fetch(`${URL}${location}?key=${KEY}`);
        const data = await response.json();
        return data;
    } catch (exception) {
        console.log('Error! ' + exception);
    }
}

export async function getRelevantWeatherData(location) {
    const data = await getWeatherDataByLocation(location);
    const week = {};
    for (let i = 0; i < 3; i += 1) {
        let { temp: temperature, description, humidity, icon, datetime: date } = data.days[i];
        week["day" + i] = { temperature, description, humidity, icon, date };
    }
    return week;
}