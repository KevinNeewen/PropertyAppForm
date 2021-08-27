import React from 'react';
import AppBar from '../../components/AppBar';
import useStyles from './styles';
import { Typography, Container, Box } from '@material-ui/core';
import Button from '../../components/Button';

interface MyProps {}

const GetStartedPage = (props: MyProps) => {
    const classes = useStyles(props);

    const renderButtons = () => {
        return (
            <Box>
                <Button classes={{ button: classes.getStartedButton }}>Get Started</Button>
                <Button invisible>Login</Button>
            </Box>
        );
    };
    return (
        <Container className={classes.page} maxWidth={false}>
            <AppBar classes={{ appBar: classes.appBar, toolBar: classes.toolBar }}>
                <Typography variant="h4">Logo</Typography>
            </AppBar>
            <Container disableGutters maxWidth={false} className={classes.introductionContainer}>
                <Box maxWidth="41%" paddingBottom="3rem">
                    <Typography gutterBottom variant="h1" className={classes.header1}>
                        Property investing made easy
                    </Typography>
                    <Typography variant="h4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </Typography>
                </Box>
                {renderButtons()}
            </Container>
        </Container>
    );
};

export default GetStartedPage;
