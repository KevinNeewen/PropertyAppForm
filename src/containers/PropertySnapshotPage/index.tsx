import React from 'react';
import useStyles from './styles';
import Page from '../../components/Page';
import Header from '../../components/Header';
import PropertySnapshotHeader from './components/PropertySnapshotHeader';
import PropertySnapshotGraphConainer from './components/PropertySnapshotGraphContainer';
import { Container, Grid, Box } from '@material-ui/core';
import BlueWaveSecondarySvg from '../../components/SVG/BlueWaveSecondarySvg';
import { PropertyTypeEnum, PropertyInformationForm } from '../PropertyFormPage/types'; // TODO: Consolidate types as Domain objects
import { PropertyAddress } from './types';

interface MyProps {}

const PropertySnapshotPage = (props: MyProps): JSX.Element => {

    const classes = useStyles(props);

    const renderAppBarContent = () => {
        return <Header variant="h4">PropertyLab</Header>;
    };

    const defaultAddress: PropertyAddress = {
        address: "113 Willis Ave",
        city: "Strathfield",
        state: "NSW",
        postcode: 2135
    };

    const defaultInfo: PropertyInformationForm = {
        propertyType: PropertyTypeEnum.House,
        bedrooms: 3,
        bathrooms: 2,
        parking: 2
    };

    return(
        <Page //
        classes={{ toolBar: classes.toolBar }}
        appBarContent={renderAppBarContent()}
    >
        <Box mt={4}>
        <Grid container >
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <PropertySnapshotHeader         
                    propertyInformation={defaultInfo}
                    propertyAddress={defaultAddress}
                    classes={{ header: classes.header }} />
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
        </Box>

        <Box mt={4}>
        <Grid container >
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <PropertySnapshotGraphConainer />
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
        </Box>
        <Container //
            disableGutters
            maxWidth={false}
            className={classes.introductionContainer}
        >
        </Container>
    </Page>
    );
}


export default PropertySnapshotPage;