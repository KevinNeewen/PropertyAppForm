import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import {
    PropertyFormStepsEnum,
    PropertyFormStepsToDescriptionMap,
    PropertyTypeEnum,
    PropertyFormValues,
} from '../../../../types';
import SelectField from '../../../../../../components/SelectField';
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

    const title = PropertyFormStepsToDescriptionMap[step];

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
        handleNextStep,
    } = props;

    return (
        <SubForm //
            initialValues={initialValues}
            step={step}
            title={title}
            nextButton={{
                text: 'Next',
                onClick: handleNextStep(step),
            }}
        >
            {(subForm, hasError, handleChange) => (
                <div>
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
                </div>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(PropertyInformationSubForm);
