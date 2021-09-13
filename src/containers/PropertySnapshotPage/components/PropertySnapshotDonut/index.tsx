import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Box, Grid, CircularProgress } from '@material-ui/core';
import { withStyles, WithStyles, makeStyles } from '@material-ui/styles';
import styles from './styles';
import { theme } from '../../../../theme';

interface MyProps{
    title: string;
    startValue: number;
    endValue: number;
}

const PropertySnapshotDonut = (props: MyProps) => {
    const classes = styles(theme);
    
    const determinePercentangeChange = (startValue: number, endValue: number) => {
        let percent;
        if(endValue !== 0) {
            if(startValue !== 0) {
                percent = (endValue - startValue) / startValue * 100;
            } else {
                percent = endValue * 100;
            }
        } else {
            percent = - startValue * 100;            
        }       
        return Math.floor(percent);
    }

    const determineAbsoluteDifference = (startValue: number, endValue: number) => {
        return Math.abs(startValue - endValue)
    }

    const isPositiveChange = (startValue: number, endValue: number) => {
        return endValue > startValue;
    } // Handle Signs
    
    return(
        <Box
        className={classes.circle}
        p={4}
        >
            <Typography variant={'h3'} align='center'>
                {props.title}
            </Typography>
            <CircularProgress
                size={`${100}%`}
                value={determinePercentangeChange(props.startValue, props.endValue)}
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
                {determinePercentangeChange(props.startValue, props.endValue)}
              </Typography>
              <Typography variant={'h3'} align='center' noWrap={true}>
                  {props.endValue}
              </Typography>
              </Box>
        </Box>
    );
}

export default (PropertySnapshotDonut);