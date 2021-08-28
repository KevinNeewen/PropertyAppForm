import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { relative } from 'path';

const styles = (theme: Theme) =>
    createStyles({
        form: {
            height: '50rem',
            width: '40rem',
            border: '2px solid black',
        },
        stepperBar: {
            backgroundColor: 'inherit',
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
        },
        stepperContainer: {
            height: '100%',
            position: 'relative',
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
                        fontSize: '.8rem',
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
                            fill: theme.palette.primary.main,
                            border: 'none',
                            fontSize: '1.4rem',
                            // border: `2px solid ${theme.palette.primary.main}`,
                        },
                    },
                },
            },
        },
    });

export default styles;
