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
    });

export default styles;
