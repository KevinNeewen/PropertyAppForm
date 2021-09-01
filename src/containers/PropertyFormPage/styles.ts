import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

const styles = (theme: Theme) =>
    createStyles({
        blueWaveSvg: {
            position: 'fixed',
            right: '-20rem',
            bottom: '-15rem',
            transform: 'rotate(-10deg)',
        },
        formPageGrid: {
            // height: '100vh',
        },
        page: {},
        formSectionDetail: {
            paddingTop: '10rem',
            height: '100vh',
        },
        formSectionDetailContainer: {
            marginLeft: 0,
        },
        formDetailActive: {
            marginLeft: 0,
            height: '100%',
        },
        stepLabelVertical: {
            flexDirection: 'row-reverse',
        },
        stepButtonRoot: {
            flexDirection: 'row-reverse',
        },
    });

export default styles;
