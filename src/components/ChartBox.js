import { Card, CardContent, Container, makeStyles } from '@material-ui/core'

import React from 'react'
import { Line } from 'react-chartjs-2';
import { getChartData } from '../helpers/getChartData';


const useStyles = makeStyles({
    root: {
        margin: '0px',
        padding: '10px 0px 0px 0px',
    },

});

export const ChartBox = ({weather}) => {
    const classes = useStyles();

    const data = getChartData(weather);

    return (
        <Container
            className={classes.root}
            maxWidth='md'>
            <Card>
                <CardContent>
                    <Line
                        data={data} />
                </CardContent>
            </Card>
        </Container>
    )
}
