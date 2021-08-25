import React from 'react';
import { default as MuiAppBar } from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

interface Props {
    children: React.ReactNode;
}

const AppBar = ({ children }: Props) => {
    return (
        <MuiAppBar>
            <ToolBar>{children}</ToolBar>
        </MuiAppBar>
    );
};

export default AppBar;
