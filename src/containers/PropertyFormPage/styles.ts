import { createStyles } from '@material-ui/styles';

const styles = (): any =>
    createStyles({
        blueWaveSvg: {
            position: 'fixed',
            right: '-15rem',
            bottom: '-13rem',
            transform: 'rotate(-10deg)',
            zIndex: -1,
        },
        page: {},
    });

export default styles;
