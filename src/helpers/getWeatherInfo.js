

export const getWeatherInfo = async ({lat='51.509865', lon='-0.118092'}) => {
    const apiKey = `34c52db37a4556ce1f5e005f41025285`
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        
        return data
    } catch (err) {
        console.log(err);
    }
}
