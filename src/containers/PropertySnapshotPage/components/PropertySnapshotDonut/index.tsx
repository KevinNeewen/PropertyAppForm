import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Box, Grid, CircularProgress } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './styles';


interface MyProps {}

const PropertySnapshotDonut = (props: MyProps) => {
    const classes = styles();
      
    return(
        <Box
        className={classes.circle}
        p={4}
        >
            <Typography variant={'h3'} align='center'>
                Value Growth
            </Typography>
            <CircularProgress
                size={`${100}%`}
                value={60}
                thickness={3}
                variant="static"
                color="primary"
                className={classes.bar}
              />
              <CircularProgress
                size={`${100}%`}
                value={100}
                thickness={3}
                variant="static"
                className={classes.track}
              />
              <Box className={classes.bar} p={6}>
              <Typography variant={'h1'} align='center' noWrap={true}>
                60%
              </Typography>
              <Typography variant={'h3'} align='center' noWrap={true}>
                  ^ $420,000
              </Typography>
              </Box>
        </Box>
        /*<React.Fragment>
            <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
            </Grid>
        </React.Fragment> */
    );
}

export default PropertySnapshotDonut;