
export const getChartData = (weatherInfo) => {

    const labels = weatherInfo.day.map((day)=>{
        return day.time
    })

    const dataset = [
        {
            label: 'Temp',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
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
