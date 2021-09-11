import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import { PropertyFormStepsEnum, PropertyTypeEnum, PropertyFormValues } from '../../../../types';
import { SelectField } from '../../../../../../components/Inputs';
import { FormikProps, useFormikContext } from 'formik';

interface PropertyInformationSubForm {
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type MyProps = PropertyInformationSubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const PropertyInformationSubForm = (props: MyProps) => {
    const formikProps: FormikProps<PropertyFormValues> = useFormikContext();
    const initialValues = formikProps.initialValues.propertyInformation;

    const step = PropertyFormStepsEnum.PropertyInformation;

    const title = 'Tell us a bit about your property';

    const getPropertyTypeOptions = () => {
        return Object.values(PropertyTypeEnum).map((type) => ({
            value: type,
        }));
    };

    const getRoomOptions = () => {
        let i = 0;
        const roomOptions = [];
        while (i < 6) {
            roomOptions.push({ value: i, name: i.toString() });
            i++;
        }
        roomOptions.push({ value: 100, name: '7+' });
        return roomOptions;
    };

    const {
        //
        classes,
        handleNextStep,
    } = props;

    return (
        <SubForm //
            classes={{ subFormDetails: classes.subFormDetails }}
            initialValues={initialValues}
            step={step}
            title={title}
            nextButton={{
                text: 'Next',
                onClick: handleNextStep(step),
            }}
        >
            {(subForm, hasError, handleChange) => (
                <>
                    <SelectField
                        id="propertyInformation.propertyType"
                        handleChange={handleChange}
                        value={subForm.propertyType}
                        options={getPropertyTypeOptions()}
                        label="Property type"
                        fullWidth
                    />
                    <SelectField //
                        id="propertyInformation.bedrooms"
                        handleChange={handleChange}
                        value={subForm.bedrooms}
                        options={getRoomOptions()}
                        label="Bedrooms"
                        fullWidth
                    />
                    <SelectField //
                        id="propertyInformation.bathrooms"
                        handleChange={handleChange}
                        value={subForm.bathrooms}
                        options={getRoomOptions()}
                        label="Bathrooms"
                        fullWidth
                    />
                    <SelectField //
                        id="propertyInformation.parking"
                        handleChange={handleChange}
                        value={subForm.parking}
                        options={getRoomOptions()}
                        label="Parking"
                        fullWidth
                    />
                </>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(PropertyInformationSubForm);
