import { getTime } from "./getDateTimeFormat";


export const getWeatherInfo = async ({ lat = '51.509865', lon = '-0.118092' }) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const dayDetail = data.hourly.map(hour => {
            return {
                time: getTime(hour.dt),
                temp: hour.temp,
            }
        })

        const weatherInfo = {
            city: data.timezone,
            date: data.current.dt,
            lat: data.lat,
            lon: data.lon,
            temp: data.current.temp,
            icon: data.current.weather[0].icon,
            desc: data.current.weather[0].main,
            hum: data.current.humidity,
            wind: data.current.wind_speed,
            day: dayDetail,
        }

        return weatherInfo
    }
    catch (err) {
        console.log(err);
    }
}
