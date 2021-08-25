import React from 'react';
import { default as MuiAppBar } from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import { ClassNameMap } from '@material-ui/styles';

interface Props {
    children: React.ReactNode;
    classes: ClassNameMap;
}

const AppBar = (props: Props) => {
    const classes = useStyles(props);
    const { children } = props;
    return (
        <>
            <MuiAppBar className={classes.appBar}>
                <ToolBar className={classes.toolBar}>{children}</ToolBar>
            </MuiAppBar>
            <div className={classes.spacing} />
        </>
    );
};

export default AppBar;
