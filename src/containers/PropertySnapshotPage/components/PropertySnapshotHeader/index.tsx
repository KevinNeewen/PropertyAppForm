import React from 'react';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './styles';
import { PropertyInformationForm } from '../../../PropertyFormPage/types'; // TODO: Consolidate types as Domain objects
import { PropertyAddress, PropertyTypeToDescriptionMap } from '../../types';

interface MyProps extends WithStyles<typeof styles> {
    propertyInformation: PropertyInformationForm;
    propertyAddress: PropertyAddress;
}

const PropertySnapshotHeader = (props: MyProps) => {
    const { classes, propertyInformation, propertyAddress } = props;

    const formatPropertySnapshotSubtitle = (info: PropertyInformationForm, address: PropertyAddress) => {
        //TODO: Handle missing data
        return `${formatPropertyAddress(address)} - ${PropertyTypeToDescriptionMap[info.propertyType]} / ${info.bedrooms} bed / ${info.bathrooms} bath / ${info.parking} parking`
    }
    
    const formatPropertyAddress = (address: PropertyAddress) => {
        return `${address.address}, ${address.city}, ${address.state} ${address.postcode}`;
    }

    return (
        <Box component="span" m={1}>
            <Typography //
                variant='h2'
            >
                Property Snapshot
            </Typography>
            <Typography //
                gutterBottom
                className={classes.header}
                variant='subtitle1'
            >
                {formatPropertySnapshotSubtitle(propertyInformation, propertyAddress)}
            </Typography>
        </Box>
    );
};

export default withStyles(styles)(PropertySnapshotHeader);

