import React from 'react';
import { Grid, withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import { PropertyFormStepsEnum, PropertyFormValues } from '../../../../types';
import { FormikProps } from 'formik';
import { InputField } from '../../../../../../components/Inputs';

interface OperatingExpensesSubForm {}

type MyProps = OperatingExpensesSubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const ValuationAndRentSubForm = (props: MyProps) => {
    const step = PropertyFormStepsEnum.OperatingExpenses;
    const title = 'Operating expenses (per year)';

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
                <>
                    <Grid classes={{ root: classes.grid }} container>
                        <Grid container item xs={6} direction="column">
                            <InputField //
                                id="operatingExpenses.propertyManagementFee"
                                label="Property management fee"
                                handleChange={handleChange}
                                value={subForm.propertyManagementFee}
                                error={hasError('propertyManagementFee')}
                                dollarAdornment
                            />
                            <InputField //
                                id="operatingExpenses.insurance"
                                label="Insurance"
                                handleChange={handleChange}
                                value={subForm.insurance}
                                error={hasError('insurance')}
                                dollarAdornment
                            />
                            <InputField //
                                id="operatingExpenses.repairs"
                                label="Repairs"
                                handleChange={handleChange}
                                value={subForm.repairs}
                                error={hasError('repairs')}
                                dollarAdornment
                            />
                            <InputField //
                                id="operatingExpenses.landTax"
                                label="Land tax"
                                handleChange={handleChange}
                                value={subForm.landTax}
                                error={hasError('landTax')}
                                dollarAdornment
                            />
                        </Grid>
                        <Grid container item xs={6} direction="column">
                            <InputField //
                                id="operatingExpenses.waterRates"
                                label="Water rates"
                                handleChange={handleChange}
                                value={subForm.waterRates}
                                error={hasError('waterRates')}
                                dollarAdornment
                            />
                            <InputField //
                                id="operatingExpenses.strataFees"
                                label="Strata Fees"
                                handleChange={handleChange}
                                value={subForm.strataFees}
                                error={hasError('strataFees')}
                                dollarAdornment
                            />
                            <InputField //
                                id="operatingExpenses.councilRates"
                                label="Council rates"
                                handleChange={handleChange}
                                value={subForm.councilRates}
                                error={hasError('councilRates')}
                                dollarAdornment
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(ValuationAndRentSubForm);
