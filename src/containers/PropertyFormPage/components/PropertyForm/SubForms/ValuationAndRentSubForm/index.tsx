import React, { useState } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import {
    PropertyFormStepsEnum,
    PropertyFormStepsToDescriptionMap,
    PropertyFormValues,
    PurposeOfPropertyEnum,
    ValuationAndRentSubFormValues,
} from '../../../../types';
import { FormikProps, useFormikContext } from 'formik';
import InputField from '../../../../../../components/InputField';
import SelectField from '../../../../../../components/SelectField';

interface ValuationAndRentSubForm {
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type MyProps = ValuationAndRentSubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const ValuationAndRentSubForm = (props: MyProps) => {
    const formikProps: FormikProps<PropertyFormValues> = useFormikContext();
    const [subForm, setSubForm] = useState<ValuationAndRentSubFormValues>({
        ...formikProps.initialValues.valuationAndRent,
    });

    const step = PropertyFormStepsEnum.ValuationAndRent;
    const title = PropertyFormStepsToDescriptionMap[step];

    const handleChange = (event: React.ChangeEvent<{ value: unknown; name?: string }>) => {
        const subFormField = event.target.name!.split('.')[1];
        setSubForm({ ...subForm, [subFormField]: event.target.value });
    };

    const getPurposeOfPropertyOptions = () => {
        return Object.values(PurposeOfPropertyEnum).map((type) => ({
            value: type,
        }));
    };

    const {
        //
        handleNextStep,
        handlePrevStep,
    } = props;
    return (
        <SubForm //
            step={step}
            title={title}
            previousButton={{
                text: 'Back',
                onClick: handlePrevStep(step),
            }}
            nextButton={{
                text: 'Next',
                onClick: handleNextStep(step),
            }}
        >
            <div>
                <InputField //
                    id="valuationAndRent.purchasePrice"
                    label="Purchase price"
                    handleChange={handleChange}
                    value={subForm.purchasePrice}
                    fullWidth
                />
                <InputField //
                    id="valuationAndRent.currentValuation"
                    label="Current valuation"
                    handleChange={handleChange}
                    value={subForm.currentValuation}
                    fullWidth
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
                />
                <InputField //
                    id="valuationAndRent.currentRent"
                    label="Current rent (per week)"
                    handleChange={handleChange}
                    value={subForm.currentRent}
                    fullWidth
                />
            </div>
        </SubForm>
    );
};

export default withStyles(styles)(ValuationAndRentSubForm);
