import React from 'react'
import { getChartData } from '../helpers/getChartData';
import { Box, Card, CardContent, makeStyles } from '@material-ui/core'
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles({
    root: {
    },
});

export const Chart = ({ weather }) => {
    const classes = useStyles();

    const data = getChartData(weather);

    return (
        <Box
            display='flex'
            alignContent='flex-start'>
            <Card>
                <CardContent>
                    <Line
                        data={data} />
                </CardContent>
            </Card>
        </Box>
    )
}
