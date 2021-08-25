import Container from '@material-ui/core/Container';
import React from 'react';
import AppBar from '../../components/AppBar';
import useStyles from './styles';
import Button from '@material-ui/core/Button';

// interface Props {}
const GetStartedPage = (props: any) => {
    const classes = useStyles(props);

    return (
        <Container className={classes.page} disableGutters>
            <AppBar>Logo</AppBar>
            <Container className={classes.screen} disableGutters>
                <Button className={classes.getStartedButton}>Get Started</Button>
                <Button>Login</Button>
            </Container>
        </Container>
    );
};

export default GetStartedPage;
