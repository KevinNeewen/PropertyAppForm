import React, { useCallback } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import { Formik, Form } from 'formik';
import { initialValues } from '../../initialValues';
import { PropertyFormStepsEnum } from '../../types';
import PropertyInformationSubForm from './SubForms/PropertyInformationSubForm';
import ValuationAndRentSubForm from './SubForms/ValuationAndRentSubForm';
import LoanInformationSubForm from './SubForms/LoanInformationSubForm';

interface MyProps extends WithStyles<typeof styles> {
    activeStep: PropertyFormStepsEnum;
    stepsToDisplay: PropertyFormStepsEnum[];
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PropertyForm = (props: MyProps) => {
    const {
        //
        activeStep,
        stepsToDisplay,
        handleNextStep,
        handlePrevStep,
    } = props;

    // const validateStep =
    //     (direction: string) => (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => {
    //         console.log('validateStep');

    //         if (direction === 'Next') {
    //             handleNextStep(currentStep)(event);
    //         } else {
    //             handlePrevStep(currentStep)(event);
    //         }
    //     };

    const renderSubForm = useCallback(
        (step, props) => {
            const subFormPropBag = {
                handleNextStep: handleNextStep,
                handlePrevStep: handlePrevStep,
            };
            switch (step) {
                case PropertyFormStepsEnum.PropertyInformation:
                    return <PropertyInformationSubForm key={step} {...subFormPropBag} {...props} />;
                case PropertyFormStepsEnum.ValuationAndRent:
                    return <ValuationAndRentSubForm key={step} {...subFormPropBag} {...props} />;
                case PropertyFormStepsEnum.LoanInformation:
                    return <LoanInformationSubForm key={step} {...subFormPropBag} {...props} />;
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
                        <Form onSubmit={props.handleSubmit}>
                            {stepsToDisplay.map((step) => renderSubForm(step, props))}
                        </Form>
                    );
                }
            }}
        </Formik>
    );
};

export default React.memo(withStyles(styles)(PropertyForm));
