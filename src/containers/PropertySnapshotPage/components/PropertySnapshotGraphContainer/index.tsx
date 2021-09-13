import React from 'react';
import { Paper } from '@material-ui/core';
import { Box, Grid, CircularProgress } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles  from './styles';
import { PropertyInformationForm } from '../../../PropertyFormPage/types'; // TODO: Consolidate types as Domain objects
import { PropertyAddress, PropertyTypeToDescriptionMap } from '../../types';
import PropertySnapshotDonut from '../PropertySnapshotDonut';


interface MyProps extends WithStyles<typeof styles> {

}

const PropertySnapshotVisualContainer = (props: MyProps) => {
    const classes = styles();

    return(
        <Box boxShadow={4} p={2} m={4} display="flex">
            <Grid container spacing={4}>
                <Grid item xs={4}>
                <PropertySnapshotDonut title={"Value Growth"} startValue={400000} endValue={420000}/>
                </Grid>
                <Grid item xs={4}>
                <PropertySnapshotDonut title={"Value Growth"} startValue={400000} endValue={420000}/>
                </Grid>
                <Grid item xs={4}>
                <PropertySnapshotDonut title={"Value Growth"} startValue={400000} endValue={420000}/>
                </Grid>
            </Grid>
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

export default withStyles(styles)(PropertySnapshotVisualContainer);