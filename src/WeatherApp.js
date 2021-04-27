import React, { useEffect, useState } from 'react'
import { Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { Chart } from './components/Chart'
import { SearchBox } from './components/ui/SearchBox'
import { WeatherDisplay } from './components/WeatherDisplay'
import { getWeatherInfo } from './helpers/getWeatherInfo'
import { getCurrentPosition } from './helpers/getCurrentPosition'
import { getFullDate } from './helpers/getDateTimeFormat';

const useStyles = makeStyles({
    root: {
        padding: '30px 50px 30px 50px',
        margin: '20px',
        minHeight: '88vh',
        backgroundImage: 'url(./assets/img/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    title: {
        color: 'white',
        padding: '0px 0px 10px 0px',
        fontWeight: 'bold'
    },
});

const initialPos = {
    lat: '51.509865',
    lon: '-0.118092',
    loading: false
}

const initialWeather = {
    date: '',
    lat: '',
    lon: '',
    temp: '',
    icon: '',
    desc: '',
    hum: '',
    wind: '',
    day: [],
}

export const WeatherApp = () => {
    const classes = useStyles();
    const [pos, setPos] = useState(initialPos);
    const [weather, setWeather] = useState(initialWeather);

    useEffect(() => {
        getCurrentPosition()
            .then((position) => {
                setPos({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                })
            })
            .catch((err) => {
                console.error(err.message);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getWeatherInfo(pos)
            .then(data => {
                const date = getFullDate(data.date);

                setWeather({
                    ...weather,
                    date: date,
                    lat: data.lat,
                    lon: data.lon,
                    temp: data.temp,
                    icon: data.icon,
                    desc: data.desc,
                    hum: data.hum,
                    wind: data.wind,
                    day: data.day
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pos])

    return (
        <Paper
            className={classes.root}
            elevation={3}>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='flex-start'>
                <Typography
                    className={classes.title}
                    variant='h3'>
                    Weather App
                </Typography>
                <Divider variant="middle" />
                <SearchBox />
                <Grid
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='flex-start'>
                    <WeatherDisplay weather={weather} />
                    <Chart weather={weather} />
                </Grid>
            </Grid>
        </Paper>
    )
}
