import { Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { ChartBox } from './components/ChartBox'
import { SearchBox } from './components/SearchBox'
import { WeatherDisplay } from './components/WeatherDisplay'
import { getWeatherInfo } from './helpers/getWeatherInfo'
import date from 'date-and-time';

const useStyles = makeStyles({
    root: {
        padding: '30px',
        margin: '20px',
        minHeight: 'inherit'
    },
    title: {
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

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    }
    
    const showPosition = (position) => {
        setPos({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        })
    }

    const handleError = () => {
        throw new Error('Cannot obtain position');
    }

    const convertDate = (dt) => {
        return date.format(new Date(dt*1000), 'dddd, MMM DD YYYY, hh:mm A');
    }

    useEffect(() => {
        getCurrentPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getWeatherInfo(pos)
            .then(data => {
                const date = convertDate(data.date);

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
                    <WeatherDisplay weather={weather}/>
                    <ChartBox weather={weather}/>
                </Grid>
            </Grid>
        </Paper>
    )
}
