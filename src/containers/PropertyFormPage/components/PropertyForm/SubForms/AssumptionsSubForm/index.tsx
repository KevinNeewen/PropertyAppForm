import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import { PropertyFormStepsEnum, PropertyFormValues } from '../../../../types';
import { FormikProps, useFormikContext } from 'formik';
import { InputField } from '../../../../../../components/Inputs';
import validator from './validator';

interface AssumptionsSubForm {
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type MyProps = AssumptionsSubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const AssumptionsSubForm = (props: MyProps) => {
    const formikProps: FormikProps<PropertyFormValues> = useFormikContext();
    const initialValues = formikProps.initialValues.assumptions;

    const step = PropertyFormStepsEnum.Assumptions;
    const title = 'Assumptions we use for our calculations';

    const {
        //
        classes,
        handleNextStep,
        handlePrevStep,
    } = props;

    return (
        <SubForm //
            classes={{ subFormDetails: classes.subFormDetails }}
            initialValues={initialValues}
            step={step}
            title={title}
            previousButton={{
                text: 'Previous',
                onClick: handlePrevStep(step),
            }}
            nextButton={{
                text: 'Next',
                onClick: handleNextStep(step),
            }}
            validator={validator}
        >
            {(subForm, hasError, handleChange) => (
                <>
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
                </>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(AssumptionsSubForm);
