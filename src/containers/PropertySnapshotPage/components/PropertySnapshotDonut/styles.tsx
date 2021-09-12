import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          display: 'grid',
          alignItems: 'center',
          padding: theme.spacing(2),
        },
        circle: {
          gridRow: 2,
          gridColumn: 1,
          display: 'grid',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        },
        bar: {
          gridRow: 2,
          gridColumn: 1,
          margin: '0 auto',
          zIndex: 1,
        },
        track: {
          gridRow: 2,
          gridColumn: 1,
          margin: '0 auto',
          color: theme.palette.action.hover,
        },
      })
);
export default styles;