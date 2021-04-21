import { Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles({
    root: {
        display: 'block',
        minHeight: 'inherit',
        margin: '0px',
        padding: '10px 0px 0px 0px',
    },
    card:{
        padding: '20px'
    },
    date: {
        fontSize: '1.3rem',
        fontWeight:'bold'
    },
    fontPrimary:{
        fontSize: '3.5rem',
        fontWeight:'bold'
    },
    fontSecondary:{
        fontSize: '1.5rem',
        fontWeight:'normal'
    },
    humidityWindDisplay: {
        display: 'flex',
        flexWrap: 'nowrap',
        fontSize: '10rem'
    },
    media: {
        height: '30%',
        width: '30%'
    }
});

export const WeatherDisplay = ({ weather }) => {
    const classes = useStyles();

    return (
        <Container
            className={classes.root}
            maxWidth='xs'>
            <Card
                className={classes.card}
                height="100%">
                <CardContent>
                    <Grid
                        container
                        direction='column'
                        alignItems='center'>
                        <Typography
                            className={classes.date}>
                            {weather.date}
                        </Typography>
                        <Grid
                            container
                            item
                            direction='row'
                            justify='center'
                            alignItems='center'>
                            <img className={classes.media} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='Weather icon' />
                            <Typography
                               className={classes.fontPrimary}>
                                {`${weather.temp}°`}
                            </Typography>
                        </Grid>
                        <Typography 
                             className={classes.fontPrimary}>
                            {weather.desc}
                        </Typography>
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
                                    Humidity
                                </Typography>
                                <Typography>
                                    {`${weather.hum}%`}
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                direction='column'
                                justify='space-between'
                                alignItems='center'
                                item>
                                <Typography
                                    className={classes.fontSecondary}>
                                    Wind speed
                                </Typography>
                                <Typography>
                                    {`${weather.wind} Km/h`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}
