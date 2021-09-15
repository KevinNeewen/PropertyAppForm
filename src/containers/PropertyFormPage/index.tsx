import React, { useState, useLayoutEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import Page from '../../components/Page';
import Stepper from './components/Stepper';
import BlueWavePrimarySvg from '../../components/SVG/BlueWavePrimarySvg';
import ScreenHelper from '../../utils/ScreenHelper';
import PropertyForm from './components/PropertyForm';
import {
    PropertyFormStepsEnum,
    PropertyFormStepsToDescriptionMap,
    PropertyFormStepToSubFormField,
    PropertyFormValues,
} from './types';
import styles from './styles';
import { FormikProps, withFormik } from 'formik';
import { initialValues } from './initialValues';
import PropertyFormContext from './context';
import SubFormValidatorFactory from './components/PropertyForm/SubForms/subFormValidatorFactory';

type MyProps = FormikProps<PropertyFormValues> & WithStyles<typeof styles>;

const PropertyFormPage = (props: MyProps) => {
    const {
        //
        classes,
        values,
        errors,
        setErrors,
    } = props;

    const [activeStep, setActiveStep] = useState<PropertyFormStepsEnum>(PropertyFormStepsEnum.PropertyInformation);
    const [lastIncompleteStep, setLastIncompleteStep] = useState<PropertyFormStepsEnum>(
        PropertyFormStepsEnum.PropertyInformation,
    );
    const [completedSteps, setCompletedSteps] = useState<PropertyFormStepsEnum[]>([]);
    const [scrollableSteps, setScrollableSteps] = useState<PropertyFormStepsEnum[]>([
        PropertyFormStepsEnum.PropertyInformation,
    ]);

    const isAutomaticScroll = useRef<boolean>(true);

    useLayoutEffect(() => {
        const el = document.getElementById(`#subform-${activeStep}`);
        if (isAutomaticScroll.current) {
            el?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }

        isAutomaticScroll.current = true;
    }, [activeStep]);

    const totalSteps = () => {
        return steps.length;
    };

    const isFirstStep = (step: PropertyFormStepsEnum) => {
        return step === 0;
    };

    const isLastStep = (step: PropertyFormStepsEnum) => {
        return step === totalSteps() - 1;
    };

    const isStepScrollableTo = (step: PropertyFormStepsEnum) => {
        return scrollableSteps.includes(step);
    };

    const handleNextStep = (currentStep: PropertyFormStepsEnum) => () => {
        if (currentStep === steps.length - 1) {
            return;
        }

        const isValid = validateStep(currentStep);

        const nextStep = currentStep + 1;

        if (!scrollableSteps.includes(nextStep)) {
            if (!isValid) {
                return;
            }
            setScrollableSteps((scrollableSteps) => {
                const newScrollableSteps = [...scrollableSteps, nextStep];
                newScrollableSteps.sort();
                return newScrollableSteps;
            });
        }

        if (!completedSteps.includes(nextStep)) {
            setCompletedSteps((prevCompletedSteps) => {
                const newCompleteSteps = prevCompletedSteps.concat(currentStep);
                return newCompleteSteps;
            });
        }

        if (!isLastStep(currentStep) && nextStep > lastIncompleteStep) {
            setLastIncompleteStep(nextStep);
        }

        setActiveStep(nextStep);
    };

    const handlePrevStep = (currentStep: PropertyFormStepsEnum) => () => {
        if (currentStep === 0) {
            return;
        }

        validateStep(currentStep);

        const previousStep = currentStep - 1;

        setActiveStep(previousStep);
    };

    const handleStep = (currentStep: PropertyFormStepsEnum, toStep: PropertyFormStepsEnum) => () => {
        console.log('handle step to ', toStep);
        validateStep(currentStep);
        setActiveStep(toStep);
    };

    const getSteps = () => {
        return Object.values(PropertyFormStepsToDescriptionMap);
    };

    const steps = getSteps();

    const isStepComplete = (step: PropertyFormStepsEnum) => {
        const isComplete = completedSteps.includes(step);

        return activeStep === step ? false : isComplete;
    };

    const validateStep = (step: PropertyFormStepsEnum) => {
        const validator = SubFormValidatorFactory.Create(activeStep);
        if (!validator) {
            return true;
        }
        try {
            validator.validateSync(values[PropertyFormStepToSubFormField[step]], { abortEarly: false });

            setErrors({ ...errors, [PropertyFormStepToSubFormField[step]]: [] });

            return true;
        } catch (error) {
            const subFormErrors = error.inner.map((e: { path: any; message: any }) => ({
                field: e.path,
                message: e.message,
            }));

            setErrors({ ...errors, [PropertyFormStepToSubFormField[step]]: subFormErrors });

            return false;
        }
    };

    const onScroll = (event: any) => {
        if (event.nativeEvent.wheelDelta > 0) {
            //scrolling up
            if (isFirstStep(activeStep)) {
                return;
            }

            setActiveStepIfInScreen(activeStep, activeStep - 1);
        } else {
            //scrolling down
            if (isLastStep(activeStep)) {
                return;
            }
            //validateStep
            setActiveStepIfInScreen(activeStep, activeStep + 1);
        }
    };

    const setActiveStepIfInScreen = (currentStep: PropertyFormStepsEnum, toStep: PropertyFormStepsEnum) => {
        const el = document.getElementById(`#subform-${toStep}`)?.querySelector('h1');
        if (ScreenHelper.isInViewPort(el)) {
            isAutomaticScroll.current = false;
            validateStep(currentStep);
            setActiveStep(toStep);
        }
    };

    const isLastIncompleteStep = (step: PropertyFormStepsEnum) => {
        if (step !== activeStep) {
            return step === lastIncompleteStep;
        }
        return false;
    };

    const hasStepError = (step: PropertyFormStepsEnum) => {
        if (activeStep === step) {
            return false;
        }
        return errors[PropertyFormStepToSubFormField[step]]?.length > 0;
    };

    return (
        <Page classes={{ page: classes.page }} appBarContent={<div></div>}>
            <BlueWavePrimarySvg classes={{ svg: classes.blueWaveSvg }} />
            <PropertyFormContext.Provider
                value={{
                    actions: {
                        handleNextStep: handleNextStep,
                        handlePrevStep: handlePrevStep,
                        handleStep: handleStep,
                    },
                }}
            >
                <Grid classes={{ root: classes.grid }} container direction="row" onWheel={onScroll}>
                    <Grid item sm={3} md={2}>
                        <Stepper //
                            isComplete={isStepComplete}
                            activeStep={activeStep}
                            steps={steps}
                            handleStep={handleStep}
                            isScrollableTo={isStepScrollableTo}
                            isLastIncompleteStep={isLastIncompleteStep}
                            hasStepError={hasStepError}
                        />
                    </Grid>
                    <Grid item sm={9} md={10}>
                        <PropertyForm //
                            activeStep={activeStep}
                            stepsToDisplay={scrollableSteps}
                        />
                    </Grid>
                </Grid>
            </PropertyFormContext.Provider>
        </Page>
    );
};

const FormikContainer = withFormik({
    mapPropsToValues: () => ({ ...initialValues }),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'PropertyFormContainer',
});

export default withStyles(styles)(FormikContainer(PropertyFormPage));
