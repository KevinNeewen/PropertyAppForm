import React from 'react';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles  from './styles';
import { PropertyInformationForm } from '../../../PropertyFormPage/types'; // TODO: Consolidate types as Domain objects
import { PropertyAddress, PropertyTypeToDescriptionMap } from '../../types';


interface MyProps extends WithStyles<typeof styles> {

}

const PropertySnapshotVisualContainer = (props: MyProps) => {
    const classes = styles();
    return(
        <React.Fragment>
            <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
            </Grid>
        </React.Fragment>
    );
}

export default withStyles(styles)(PropertySnapshotVisualContainer);