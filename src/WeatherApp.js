import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { ChartBox } from './components/ChartBox'
import { SearchBox } from './components/SearchBox'
import { WeatherDisplay } from './components/WeatherDisplay'

const useStyles = makeStyles({
    root: {
        padding: '30px',
        minHeight: '90vh',
        minWidth: '90vw'

    },
    title: {
        padding: '0px 0px 10px 0px'
    },
});

export const WeatherApp = () => {
    const classes = useStyles();

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
                <SearchBox />
                <Grid
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='flex-start'>
                    <WeatherDisplay />
                    <ChartBox />
                </Grid>
            </Grid>
        </Paper>
    )
}
