import React, { useCallback } from 'react';
import { Container, Grid, withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import { Formik, Form } from 'formik';
import { initialValues } from '../../initialValues';
import { PropertyFormStepsEnum, PropertyFormStepsToDescriptionMap } from '../../types';
import SubForm from './SubForms';

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
        (title: string, index: number, isActive: boolean) => {
            return (
                <>
                    <Container id={`#formpage-${index}`} classes={{ root: classes.subFormContainer }}>
                        <SubForm //
                            classes={{
                                root: !isActive ? classes.subForm : classes.subFormActive,
                            }}
                            title={title}
                            previousButton={
                                index !== 0
                                    ? {
                                          text: 'Back',
                                          onClick: handlePrevStep(index),
                                      }
                                    : undefined
                            }
                            nextButton={{
                                text: 'Next',
                                onClick: handleNextStep(index),
                            }}
                        />
                    </Container>
                </>
            );
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
                            {stepsToDisplay.map((step) =>
                                renderSubForm(PropertyFormStepsToDescriptionMap[step], step, step === activeStep),
                            )}
                        </Form>
                    );
                }
            }}
        </Formik>
    );
};

export default withStyles(styles)(PropertyForm);
