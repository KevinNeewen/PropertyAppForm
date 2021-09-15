import { createStyles } from '@material-ui/styles';

const styles = (): any =>
    createStyles({
        root: {},
        grid: {
            height: '100%',
        },
        subFormDetails: {
            width: '75%',
            height: '35vh',

            '& .MuiFormControl': {
                '&-root': {
                    marginBottom: '3.5rem',
                    width: '90%',
                },
            },
        },
    });

export default styles;
