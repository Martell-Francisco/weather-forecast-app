import React, { useEffect, useState } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Box, Fab, makeStyles, Zoom } from '@material-ui/core'
import { Chart } from './components/Chart'
import { WeatherDisplay } from './components/WeatherDisplay'
import { getWeatherInfo } from './helpers/getWeatherInfo'
import { getCurrentPosition } from './helpers/getCurrentPosition'
import { getFullDate } from './helpers/getDateTimeFormat';
import { Navbar } from './components/ui/Navbar'
import { WeekWeatherDisplay } from './components/WeekWeatherDisplay';
import MyLocationRoundedIcon from '@material-ui/icons/MyLocationRounded';

const useStyles = makeStyles({
    root: {
        marginTop: '11em',
        justifyContent: 'space-between'
    },
    card_container: {
        margin: '0px',
    },
    card: {
        backgroundImage: 'url(./assets/img/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minWidth: '85vw',
        minHeight: '70vh'
    },
    fab: {
        color: 'inherit',
        position: 'absolute',
        bottom: '4rem',
        right: '4rem',
    },
    icon: {
        color: 'white'
    },
});

const initialPos = {
    lat: '51.509865',
    lon: '-0.118092',
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
    week: [],
}

export const WeatherApp = () => {
    const classes = useStyles();
    const [pos, setPos] = useState(initialPos);
    const [weather, setWeather] = useState(initialWeather);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const startGeolocation = () => {
        setIsLoading(true);

        getCurrentPosition()
        .then((position) => {
            setPos({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        })
        .catch((err) => {
            console.error(err.message);
        });
    }

    useEffect(() => {
        startGeolocation();
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
                    city: data.city,
                    day: data.day,
                    week: data.week,
                })

                setIsLoading(false);
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
                    flipDirection="horizontal"
                    style={{
                        margin: '0px',
                    }}>
                    <FrontSide
                        className={classes.card}>
                        <Box
                            display='flex'
                            flexDirection='row'
                            justifyContent='space-between'
                            width='100%'
                            height='100%'
                            p={2}
                            m={0}>
                            <Box
                                display='flex'
                                width='28%'
                                height='100%'
                                justifyContent='center'
                                alignItems='center'>
                                <WeatherDisplay isLoading={isLoading} weather={weather} />
                            </Box>
                            <Box
                                display='flex'
                                width='70%'
                                height='100%'
                                justifyContent='center'
                                alignItems='center'>
                                <Chart isLoading={isLoading} weather={weather} />
                            </Box>
                        </Box>
                    </FrontSide>
                    <BackSide
                        className={classes.card}>
                        <Box
                            display='flex'
                            flexDirection='row'
                            width='100%'
                            height='100%'
                            p={2}
                            m={0}>
                            <WeekWeatherDisplay isLoading={isLoading} weather={weather} />
                        </Box>
                    </BackSide>
                </Flippy>

            </Box>
            <Zoom
                in={true}
                timeout={1500}
                unmountOnExit>
                <Fab
                    className={classes.fab}
                    size='large'
                    color='primary'
                    onClick={()=>{startGeolocation()}}>
                    <MyLocationRoundedIcon
                        fontSize='large'
                        className={classes.icon} />
                </Fab>
            </Zoom>
        </Box>
    )
}
