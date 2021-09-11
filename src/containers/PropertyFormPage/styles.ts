import { createStyles } from '@material-ui/styles';

const styles = (): any =>
    createStyles({
        blueWaveSvg: {
            position: 'fixed',
            right: '0',
            bottom: '-15rem',
            transform: 'rotate(-10deg)',
            zIndex: -1,
        },
        page: {},
        grid: {
            overflowY: 'scroll',
            position: 'fixed',
            maxHeight: '100vh',
        },
    });

export default styles;
