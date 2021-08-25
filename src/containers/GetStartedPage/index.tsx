import React from 'react';
import AppBar from '../../components/AppBar';
import useStyles from './styles';
import { Typography, Button, Container } from '@material-ui/core';

interface Props {}

const GetStartedPage = (props: Props) => {
    const classes = useStyles(props);

    return (
        <Container className={classes.page} disableGutters maxWidth={false}>
            <AppBar classes={{ appBar: classes.appBar, toolBar: classes.toolBar }}>
                <Typography variant="h4">Logo</Typography>
            </AppBar>
            <Container className={classes.screen} disableGutters>
                <Button className={classes.getStartedButton}>Get Started</Button>
                <Button>Login</Button>
            </Container>
        </Container>
    );
};

export default GetStartedPage;
