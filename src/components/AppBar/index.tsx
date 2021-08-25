import React from 'react';
import { default as MuiAppBar } from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useStyles from './styles';

interface Props {
    children: React.ReactNode;
}

const AppBar = ({ children }: Props) => {
    const classes = useStyles();
    return (
        <>
            <MuiAppBar>
                <ToolBar>{children}</ToolBar>
            </MuiAppBar>
            <div className={classes.spacing} />
        </>
    );
};

export default AppBar;
