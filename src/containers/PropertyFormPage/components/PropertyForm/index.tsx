import React, { useCallback } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import { Formik, Form } from 'formik';
import { initialValues } from '../../initialValues';
import { PropertyFormStepsEnum } from '../../types';
import PropertyInformationSubForm from './SubForms/PropertyInformationSubForm';
import ValuationAndRentSubForm from './SubForms/ValuationAndRentSubForm';

interface MyProps extends WithStyles<typeof styles> {
    activeStep: PropertyFormStepsEnum;
    stepsToDisplay: PropertyFormStepsEnum[];
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PropertyForm = (props: MyProps) => {
    const {
        //
        classes,
        activeStep,
        stepsToDisplay,
        handleNextStep,
        handlePrevStep,
    } = props;

    const renderSubForm = useCallback(
        (step: PropertyFormStepsEnum) => {
            const subFormPropBag = {
                handleNextStep: handleNextStep,
                handlePrevStep: handlePrevStep,
            };
            switch (step) {
                case PropertyFormStepsEnum.PropertyInformation:
                    return <PropertyInformationSubForm {...subFormPropBag} />;
                case PropertyFormStepsEnum.ValuationAndRent:
                    return <ValuationAndRentSubForm {...subFormPropBag} />;
                default:
                    return;
            }
        },
        [activeStep],
    );

    return (
        <Formik
            //
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props) => {
                {
                    return (
                        <Form onSubmit={props.handleSubmit}>{stepsToDisplay.map((step) => renderSubForm(step))}</Form>
                    );
                }
            }}
        </Formik>
    );
};

export default React.memo(withStyles(styles)(PropertyForm));
