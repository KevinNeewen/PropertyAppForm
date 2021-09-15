import { createStyles } from '@material-ui/styles';

const styles = (): any =>
    createStyles({
        root: {},
        grid: {
            height: '100%',
        },
        subFormDetails: {
            width: '70%',
            height: '40vh',
            '& .MuiFormControl': {
                '&-root': {
                    marginBottom: '3.5rem',
                    width: '90%',
                },
            },
        },
        disclaimer: {
            fontSize: '1rem',
            color: '#232D42',
            lineHeight: '1.2rem',
        },
    });

export default styles;
