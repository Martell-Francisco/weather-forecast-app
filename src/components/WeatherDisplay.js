import { Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        display: 'block',

        margin: '0px',
        padding: '10px 0px 0px 0px',
    },
    date: {
        fontSize: '12rem'
    },
    humidityWindDisplay: {
        display: 'flex',
        flexWrap:'nowrap',
        fontSize: '10rem'
    }
});

export const WeatherDisplay = () => {
    const classes = useStyles();

    const iconCode = '04n'

    return (
        <Container
            className={classes.root}
            maxWidth='xs'>
            <Card>
                <CardContent>
                    <Grid
                        container
                        direction='column'
                        alignItems='center'>
                        <Typography>
                            Tuesday, 20 April 2021 0:43:01
                        </Typography>
                        <Grid
                            container
                            item
                            direction='row'
                            justify='space-between'
                            alignItems='center'>
                            <img src={`http://openweathermap.org/img/w/${iconCode}.png`} alt='Weather icon' />
                            <Typography>
                                24°
                            </Typography>
                        </Grid>
                        <Typography >
                            Clouds
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
                                <Typography>
                                    Humidity
                                </Typography>
                                <Typography>
                                    24°
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                direction='column'
                                justify='space-between'
                                alignItems='center'
                                item>
                                <Typography>
                                    Wind speed
                                </Typography>
                                <Typography>
                                    24°
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}
