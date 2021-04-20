import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
      searchBox: {
        margin: 10
      },
})


export const SearchBox = () => {
    const classes = useStyles();

    return (
        <form>
            <Grid
                className={classes.root}
                container
                direction='row'
                justify='flex-start'
                alignItems='center'
                spacing={2}>
                <TextField
                    className={classes.searchBox}
                    id='outlined-search-box'
                    variant='outlined'
                    size='small'
                    label='City name' />
                <Button 
                    variant="contained" 
                    color="primary"
                    size='medium'>
                    Search
                </Button>
            </Grid>
        </form>
    )
}
