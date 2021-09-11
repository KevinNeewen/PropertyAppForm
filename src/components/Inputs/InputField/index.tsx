import React from 'react';
import { TextField, withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import clsx from 'clsx';

interface MyProps extends WithStyles<typeof styles> {
    id: string;
    label: string;
    value: any;
    handleChange: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
    variant?: 'filled' | 'outlined' | 'standard';
    focused?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    error?: {
        message: string;
    };
    dollarAdornment?: boolean;
    percentageAdornment?: boolean;
}

const InputField = (props: MyProps) => {
    const {
        //
        classes,
        id,
        label,
        handleChange,
        value,
        fullWidth,
        error,
        dollarAdornment,
        percentageAdornment,
    } = props;

    enum AdornmentsEnum {
        DOLLAR = '$',
        PERCENTAGE = '%',
    }

    const renderAdornment = (adornment: AdornmentsEnum) => {
        return (
            <div className={clsx(classes.adornment, adornment === AdornmentsEnum.DOLLAR && classes.marginRight)}>
                <span>{adornment.toString()}</span>
            </div>
        );
    };

    return (
        <TextField //
            classes={{ root: classes.root }}
            id={id}
            label={label}
            name={id}
            onChange={handleChange}
            value={value}
            fullWidth={fullWidth}
            error={error != null}
            helperText={error != null ? error.message : null}
            InputLabelProps={{ shrink: false, disableAnimation: true }}
            variant="outlined"
            InputProps={{
                startAdornment: dollarAdornment ? renderAdornment(AdornmentsEnum.DOLLAR) : null,
                endAdornment: percentageAdornment ? renderAdornment(AdornmentsEnum.PERCENTAGE) : null,
            }}
        />
    );
};
export default withStyles(styles)(InputField);
