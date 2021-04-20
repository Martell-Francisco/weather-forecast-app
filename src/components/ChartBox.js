import { Card, CardContent, Container, makeStyles } from '@material-ui/core'

import React from 'react'
import { Line } from 'react-chartjs-2';
import { data } from '../data/chartData';


const useStyles = makeStyles({
    root: {
        margin: '0px',
        padding: '10px 0px 0px 0px',
    },

});

export const ChartBox = () => {
    const classes = useStyles();

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
