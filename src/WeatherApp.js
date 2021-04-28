import React, { useEffect, useState } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Box, makeStyles } from '@material-ui/core'
import { Chart } from './components/Chart'
import { WeatherDisplay } from './components/WeatherDisplay'
import { getWeatherInfo } from './helpers/getWeatherInfo'
import { getCurrentPosition } from './helpers/getCurrentPosition'
import { getFullDate } from './helpers/getDateTimeFormat';
import { Navbar } from './components/ui/Navbar'
import { About } from './components/About'

const useStyles = makeStyles({
    root: {
        marginTop: '11em',
        justifyContent: 'space-between'
    },
    card: {
        backgroundImage: 'url(./assets/img/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minWidth: '85vw',
        minHeight: '70vh'
    },
    card_items: {

    },
});

const initialPos = {
    lat: '51.509865',
    lon: '-0.118092',
    loading: false
}

const initialWeather = {
    city: '',
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
    const [isFlipped, setIsFlipped] = useState(false);

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
                    day: data.day,
                    city: data.city,
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pos])

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
            className={classes.root}>
            <Navbar isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
            <Box
                display='flex'>
                <Flippy
                    isFlipped={isFlipped}
                    flipDirection="horizontal">
                    <FrontSide
                        className={classes.card}>
                        <Box
                            display='flex'
                            flexDirection='row'
                            justifyContent='center'
                            alignContent='space-between'
                            width='100%'
                            height='100%'
                            p={1}
                            m={1}>
                            <Box
                                display='flex'
                                width='30%'
                                height='100%'
                                justifyContent='center'
                                alignItems='center'>
                                <WeatherDisplay weather={weather} />
                            </Box>
                            <Box
                                display='flex'
                                width='70%'
                                height='100%'
                                justifyContent='center'
                                alignItems='center'>
                                <Chart weather={weather} />
                            </Box>
                        </Box>
                    </FrontSide>
                    <BackSide
                        className={classes.card}>
                        <Box
                            display='flex'
                            flexDirection='row'
                            width='auto'
                            p={1}
                            m={1}>
                            <About />
                        </Box>
                    </BackSide>
                </Flippy>
            </Box>
        </Box>
    )
}
