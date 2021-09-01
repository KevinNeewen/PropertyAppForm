import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        root: { height: '100vh' },
        stepper: {
            backgroundColor: 'inherit',
            position: 'fixed',
            top: '23%',
            left: '8%',
        },
        stepLabel: {
            '& .MuiStepLabel': {
                color: '#C4CCF8',

                '&-completed': {
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
        stepLabelVertical: {
            flexDirection: 'row-reverse',
        },
        stepConnector: {
            padding: 0,

            '& .MuiStepConnector-line': {
                float: 'right',
                marginTop: '.3rem',
                marginBottom: '.3rem',
                marginRight: '1.3rem',
                border: `1px solid #C4CCF8`,
            },
        },
    });

export default styles;
