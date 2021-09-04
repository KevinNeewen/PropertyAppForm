import React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './styles';
import { Container } from '@material-ui/core';
import AppBar from '../AppBar';

export interface MyProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    appBarContent: React.ReactNode;
    onWheel?: any;
}

const Page = (props: MyProps) => {
    const { classes, appBarContent, onWheel, children } = props;
    return (
        <Container //
            className={classes.page}
            maxWidth={false}
            onWheel={onWheel}
        >
            <AppBar //
                classes={{ appBar: classes.appBar, toolBar: classes.toolBar }}
            >
                {appBarContent}
            </AppBar>
            {children}
        </Container>
    );
};

export default withStyles(styles)(Page);
