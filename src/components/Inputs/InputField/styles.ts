import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

function styles(theme: Theme): any {
    return createStyles({
        root: {},
        adornment: {
            position: 'relative',
            height: '100%',
            width: '45px',
            border: `2px solid ${theme.palette.colors.lightGray}`,

            color: theme.palette.colors.darkGray,
            '& span': {
                position: 'absolute',
                left: '54%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
            },
        },
        marginRight: {
            marginRight: '1rem',
        },
    });
}

export default styles;
