import React from 'react';
import useStyles from './styles';
import { Container, Box } from '@material-ui/core';
import NavLink from '../../components/NavLink';
import Header from '../../components/Header';
import Page from '../../components/Page';
import BlueWaveSecondarySvg from '../../components/SVG/BlueWaveSecondarySvg';

interface MyProps {}

const GetStartedPage = (props: MyProps): JSX.Element => {
    const classes = useStyles(props);

    const renderButtons = () => {
        return (
            <Box>
                <NavLink classes={{ button: classes.getStartedButton }} to={'/propertyForm'}>
                    Get Started
                </NavLink>
                <NavLink invisible to="/propertySnapshot">
                    Login
                </NavLink>
            </Box>
        );
    };

    const renderContent = () => {
        return (
            <Box maxWidth="41%" paddingBottom="3rem">
                <Header gutterBottom variant="h1" classes={{ header: classes.header }}>
                    Property investing made easy
                </Header>
                <Header variant="h4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Header>
            </Box>
        );
    };

    const renderAppBarContent = () => {
        return <Header variant="h4">PropertyLab</Header>;
    };

    return (
        <Page //
            classes={{ toolBar: classes.toolBar }}
            appBarContent={renderAppBarContent()}
        >
            <BlueWaveSecondarySvg classes={{ svg: classes.blueWaveSvg }} />
            <Container //
                disableGutters
                maxWidth={false}
                className={classes.introductionContainer}
            >
                {renderContent()}
                {renderButtons()}
            </Container>
        </Page>
    );
};

export default GetStartedPage;
