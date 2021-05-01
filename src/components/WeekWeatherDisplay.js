import React from 'react'
import { Box, Card, CardContent, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    },
    card: {
        display: 'flex',
        margin: '5px',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255 ,0.7)',
    },
    card_content: {
        alignContent: 'space-between',
        width: '100%',
        height: '100%',
    },
    date: {
        fontSize: '1.3rem',
        fontWeight: 'bold'
    },
    fontPrimary: {
        fontSize: '3.5rem',
        fontWeight: 'bold'
    },
    fontSecondary: {
        fontSize: '1.5rem',
        fontWeight: 'normal'
    },
    humidityWindDisplay: {
        display: 'flex',
        flexWrap: 'nowrap',
        fontSize: '10rem'
    },
    media: {
        height: '40%',
        width: '40%'
    }
});

export const WeekWeatherDisplay = ({ isLoading, weather }) => {
    const classes = useStyles();

    return (
        <Box
            display='flex'
            justifyContent='flex-start'
            alignContent='center'
            className={classes.root}>
            {
                weather.week.map(day => {
                    return (
                        <Card
                            key={day.date}
                            className={classes.card}>
                            <CardContent>
                                <Grid
                                    container
                                    direction='column'
                                    alignItems='center'
                                    alignContent='space-around'>
                                    {
                                        isLoading
                                            ? <CircularProgress />
                                            : <>
                                                <Typography
                                                    className={`${classes.date} ${classes.fontSecondary}`}>
                                                    {day.date}
                                                </Typography>
                                                <Typography
                                                    className={classes.fontPrimary}>
                                                    {day.desc}
                                                </Typography>
                                                <Grid
                                                    container
                                                    item
                                                    direction='row'
                                                    justify='center'
                                                    alignItems='center'>
                                                    <img className={classes.media} src={`http://openweathermap.org/img/w/${day.icon || '01d'}.png`} alt='Weather icon' />
                                                    <Typography>
                                                        {`Max :${day.temp.max}° | Min :${day.temp.min}°`}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    className={classes.humidityWindDisplay}
                                                    container
                                                    direction='row'
                                                    justify='space-between'
                                                    alignContent='center'>
                                                    <Grid
                                                        container
                                                        direction='column'
                                                        justify='space-between'
                                                        alignItems='center'
                                                        item>
                                                        <Typography
                                                            className={classes.fontSecondary}>
                                                            Humidity {`${day.hum}%`}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </>
                                    }
                                </Grid>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </Box>
    )
}
