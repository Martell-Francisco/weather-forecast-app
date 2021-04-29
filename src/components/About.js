import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    },
    fontPrimary: {
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px black'
    },
    fontSecondary: {
        color: 'white',
        fontWeight: 'normal',
        textShadow: '1px 1px 2px black'
    },

});

export const About = () => {
    const classes = useStyles();

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            className={classes.root}>
            <Typography
                variant="h2"
                gutterBottom
                className={classes.fontPrimary}>
                Hi there! I'm Emanuel
            </Typography>
            <Typography
                variant="h4"
                gutterBottom
                className={classes.fontSecondary}>
                The purpose of this little project is to put in practice some of my resently-learned React skills...
            </Typography>
            <Typography
                variant="h4"
                gutterBottom
                className={classes.fontSecondary}>
                Please enable your device location to see my app working.
            </Typography>
            <Typography
                variant="h4"
                gutterBottom
                className={classes.fontSecondary}>
                This is just an one time setup and it won't keep track of your location if it change.
            </Typography>
            <Typography
                variant="h2"
                gutterBottom
                className={classes.fontPrimary}>
                Any feedback is welcome! 
            </Typography>
        </Box>
    )
}
