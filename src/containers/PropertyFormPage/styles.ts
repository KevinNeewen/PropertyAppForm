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
        stepperBar: {
            backgroundColor: 'inherit',
            position: 'fixed',
            top: '23%',
            left: '8%',
        },
        stepperContainer: {
            height: '100vh',
        },
        stepConnectorRoot: {
            padding: 0,

            '& .MuiStepConnector-line': {
                float: 'right',
                marginTop: '.3rem',
                marginBottom: '.3rem',
                marginRight: '1.3rem',
                border: `1px solid #C4CCF8`,
            },
        },
        stepLabelVertical: {
            flexDirection: 'row-reverse',
        },
        stepButtonRoot: {
            flexDirection: 'row-reverse',
        },
        stepLabelRoot: {
            '& .MuiStepLabel': {
                color: '#C4CCF8',

                '&-completed': {
                    fontWeight: 600,
                    color: '#232D42',
                },
                '&-active': {
                    fontWeight: 600,
                    color: '#232D42',
                },
                '&-labelContainer': {
                    width: 'auto',
                    '& span': {
                        fontSize: '1rem',
                    },
                },
                '&-iconContainer': {
                    '& svg': {
                        fontSize: '1.3rem',
                        marginLeft: '.6rem',
                        fill: 'transparent',
                        border: `2px solid #C4CCF8`,
                        borderRadius: '5rem',
                        '& text': {
                            display: 'none',
                        },
                    },
                    '& .MuiStepIcon': {
                        '&-active': {
                            fill: theme.palette.primary.main,
                            padding: '1.3px',
                            fontSize: '1.5rem',
                            border: `1px solid ${theme.palette.primary.main}`,
                        },
                        '&-completed': {
                            fill: '#1AA053',
                            border: 'none',
                            fontSize: '1.4rem',
                        },
                    },
                },
            },
        },
    });

export default styles;
