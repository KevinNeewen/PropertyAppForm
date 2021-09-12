import React from 'react';
import { Grid, Typography, withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import { PropertyFormStepsEnum, PropertyFormValues } from '../../../../types';
import { FormikProps } from 'formik';
import { InputField } from '../../../../../../components/Inputs';

interface AssumptionsSubForm {}

type MyProps = AssumptionsSubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const AssumptionsSubForm = (props: MyProps) => {
    const step = PropertyFormStepsEnum.Assumptions;
    const title = 'Assumptions we use for our calculations';

    const {
        //
        classes,
    } = props;

    return (
        <SubForm //
            classes={{ subFormDetails: classes.subFormDetails }}
            step={step}
            title={title}
            previousButton={{
                text: 'Previous',
            }}
            nextButton={{
                text: 'Next',
            }}
        >
            {(subForm, hasError, handleChange) => (
                <Grid container classes={{ root: classes.grid }}>
                    <Grid item xs={6} container direction="column">
                        <InputField //
                            id="assumptions.growthRate"
                            label="Growth rate"
                            handleChange={handleChange}
                            value={subForm.growthRate}
                            fullWidth
                            error={hasError('growthRate')}
                            percentageAdornment
                        />
                        <InputField //
                            id="assumptions.rentGrowth"
                            label="Rent growth"
                            handleChange={handleChange}
                            value={subForm.rentGrowth}
                            fullWidth
                            error={hasError('rentGrowth')}
                            percentageAdornment
                        />

                        <InputField //
                            id="assumptions.loanTerms"
                            label="Loan terms (years)"
                            handleChange={handleChange}
                            value={subForm.loanTerms}
                            fullWidth
                            error={hasError('loanTerms')}
                        />
                        <InputField //
                            id="assumptions.effectiveTaxRate"
                            label="Effective tax rate"
                            handleChange={handleChange}
                            value={subForm.effectiveTaxRate}
                            fullWidth
                            error={hasError('effectiveTaxRate')}
                            percentageAdornment
                        />
                        <InputField //
                            id="assumptions.cpi"
                            label="CPI"
                            handleChange={handleChange}
                            value={subForm.cpi}
                            fullWidth
                            error={hasError('cpi')}
                        />
                    </Grid>
                    <Grid item container xs={6}>
                        <Typography variant="body1" classes={{ root: classes.disclaimer }}>
                            <b>Disclaimer</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
                            lacinia egestas. Ut condimentum justo et tortor placerat, sit amet interdum arcu tempor.
                            Vestibulum facilisis neque sed erat luctus molestie. Phasellus a turpis porta, dapibus orci
                            sit amet, consectetur tortor. Nullam egestas ut ligula a suscipit.
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(AssumptionsSubForm);
