
export const getChartData = (weatherInfo) => {

    const labels = weatherInfo.day.map((day)=>{
        return day.time
    })

    const dataset = [
        {
            label: 'Temp',
            fill: true,
            lineTension: 0.001,
            backgroundColor: 'rgba(143, 191, 227, 0.8)',
            borderColor: 'rgb(50, 151, 227)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(143, 191, 227, 0.8)',
            pointHoverBorderColor: 'rgb(50, 151, 227)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: weatherInfo.day.map(day => {
                return day.temp
            })
        }]

    
    
    


    const data = {
        labels: labels,
        datasets: dataset
    }

    return data
}
