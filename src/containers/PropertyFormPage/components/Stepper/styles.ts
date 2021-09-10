import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme): any =>
    createStyles({
        root: { height: '100vh' },
        stepper: {
            backgroundColor: 'inherit',
            position: 'fixed',
            top: '23%',
            left: '8%',
        },
        stepButton: {
            justifyContent: 'flex-end',
        },
        lastIncompleteStep: {
            flexDirection: 'row-reverse',
            '& .MuiStepLabel': {
                '&-labelContainer': {
                    width: 'auto',
                    '& span': {
                        fontSize: '1rem',
                    },
                },
                fontWeight: 600,
                color: theme.palette.primary.light,
                '&-iconContainer': {
                    '& svg': {
                        fontSize: '1.3rem',
                        marginLeft: '.6rem',
                        border: `3px solid ${theme.palette.primary.main}`,
                        fill: 'transparent',
                        borderRadius: '5rem',
                        '& text': {
                            display: 'none',
                        },
                    },
                },
            },
        },
        stepLabel: {
            flexDirection: 'row-reverse',

            '& .MuiStepLabel': {
                color: theme.palette.colors.darkBlue,
                '&-completed': {
                    color: theme.palette.colors.darkBlue,
                },
                '&-active': {
                    fontWeight: 600,
                    color: theme.palette.colors.darkBlue,
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
                        border: `2px solid ${theme.palette.primary.light}`,
                        borderRadius: '5rem',
                        '& text': {
                            display: 'none',
                        },
                    },
                    '& .MuiStepIcon': {
                        '&-active': {
                            fill: theme.palette.primary.main,
                            padding: '1.5px',
                            fontSize: '1.5rem',
                            border: `1px solid ${theme.palette.primary.main}`,
                            marginRight: '-2px',
                        },

                        '&-completed': {
                            fill: theme.palette.colors.green,
                            border: 'none',
                            fontSize: '1.7rem',
                        },
                    },
                },
            },
        },
        stepLabelVertical: {},
        stepConnector: {
            padding: 0,

            '& .MuiStepConnector-line': {
                float: 'right',
                marginRight: '1.4rem',
                border: `1px solid ${theme.palette.primary.light}`,
                backgroundColor: theme.palette.primary.light,
            },
        },
    });

export default styles;
