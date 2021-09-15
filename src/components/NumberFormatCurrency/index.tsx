import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import NumberFormat from 'react-number-format';
interface NumberFormatCurrency {
    value: number;
    prefix?: string;
    thousandSeparator?: boolean;
}
type MyProps = NumberFormatCurrency & WithStyles<typeof styles>;

const NumberFormatCurrency = (props: MyProps) => {
    const { value, thousandSeparator, prefix = '$' } = props;
    return (
        <NumberFormat //
            value={value}
            prefix={prefix}
            thousandSeparator={thousandSeparator}
        />
    );
};

export default withStyles(styles)(NumberFormatCurrency);
