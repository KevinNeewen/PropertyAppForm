import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import {
    PropertyFormStepsEnum,
    PropertyFormStepsToDescriptionMap,
    PropertyFormValues,
    PurposeOfPropertyEnum,
} from '../../../../types';
import { FormikProps, useFormikContext } from 'formik';
import { SelectField, InputField } from '../../../../../../components/Inputs';
import validator from './validator';

interface ValuationAndRentSubForm {
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type MyProps = ValuationAndRentSubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const ValuationAndRentSubForm = (props: MyProps) => {
    const formikProps: FormikProps<PropertyFormValues> = useFormikContext();
    const initialValues = formikProps.initialValues.valuationAndRent;

    const step = PropertyFormStepsEnum.ValuationAndRent;
    const title = PropertyFormStepsToDescriptionMap[step];

    const getPurposeOfPropertyOptions = () => {
        return Object.values(PurposeOfPropertyEnum).map((type) => ({
            value: type,
        }));
    };

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
                        id="valuationAndRent.purchasePrice"
                        label="Purchase price"
                        handleChange={handleChange}
                        value={subForm.purchasePrice}
                        fullWidth
                        error={hasError('purchasePrice')}
                        dollarAdornment
                    />
                    <InputField //
                        id="valuationAndRent.currentValuation"
                        label="Current valuation"
                        handleChange={handleChange}
                        value={subForm.currentValuation}
                        fullWidth
                        error={hasError('currentValuation')}
                        dollarAdornment
                    />
                    <SelectField //
                        id="valuationAndRent.purposeOfProperty"
                        handleChange={handleChange}
                        value={subForm.purposeOfProperty}
                        options={getPurposeOfPropertyOptions()}
                        label="Purpose of property"
                        fullWidth
                    />
                    <InputField //
                        id="valuationAndRent.rentAtPurchase"
                        label="Rent at purchase (per week)"
                        handleChange={handleChange}
                        value={subForm.rentAtPurchase}
                        fullWidth
                        error={hasError('rentAtPurchase')}
                        dollarAdornment
                    />
                    <InputField //
                        id="valuationAndRent.currentRent"
                        label="Current rent (per week)"
                        handleChange={handleChange}
                        value={subForm.currentRent}
                        fullWidth
                        error={hasError('currentRent')}
                        dollarAdornment
                    />
                </>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(ValuationAndRentSubForm);
