import { AppBar, Box, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root:{
        backgroundColor: '#1f366a',
        padding: '20px',
    },
    title: {
        color: 'white',
    },
    text: {
        color: 'white',
        fontSize: '1rem'
    }
});


export const Navbar = ({isFlipped, setIsFlipped}) => {
    const classes = useStyles();

    const toggleAbout = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <AppBar position="fixed">
            <Box
                className={classes.root}
                display='flex'
                alignItems="center"
                justifyContent='space-between'>
                <Typography
                    className={classes.title}
                    variant='h3'>
                    Weather App
                </Typography>
                <Button
                    className={classes.text}
                    onClick={()=>{toggleAbout()}}>
                    {
                        isFlipped 
                            ? 'Go back'
                            : 'Week forecast'
                    }
                </Button>
            </Box>
        </AppBar>
    )
}
