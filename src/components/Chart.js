import React from 'react'
import { getChartData } from '../helpers/getChartData';
import { Box, Card, CardContent, makeStyles } from '@material-ui/core'
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles({
    root: {
        width: '90%',
        height: '90%',
    },
    card: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    card_content: {
        width: '100%',
        height: '100%',
    },
});

export const Chart = ({ weather }) => {
    const classes = useStyles();

    const { data, options } = getChartData(weather);

    return (
        <Box
            display='flex'
            className={classes.root}>
            <Card
                className={classes.card}>
                <CardContent
                    className={classes.card_content}>
                    <Line
                        data={data}
                        options={options} />
                </CardContent>
            </Card>
        </Box>
    )
}
