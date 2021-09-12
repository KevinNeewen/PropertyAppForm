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
    PropertyFormStepToFormFieldMap,
    PropertyFormValues,
    SubFormValues,
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
        setValues,
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

    const setSubForm = (step: PropertyFormStepsEnum, subFormValues: SubFormValues) => {
        const newValues = { ...values, [PropertyFormStepToFormFieldMap[step]]: { ...subFormValues } };

        setValues(newValues, false);
    };

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

    const handleNextStep = (currentStep: PropertyFormStepsEnum, subFormValues: SubFormValues) => () => {
        if (currentStep === steps.length - 1) {
            return;
        }

        const isValid = validateStep(currentStep, subFormValues);
        if (!isValid) {
            return;
        }

        setSubForm(currentStep, subFormValues);

        const nextStep = currentStep + 1;

        if (!completedSteps.includes(nextStep)) {
            setCompletedSteps((prevCompletedSteps) => {
                const newCompleteSteps = prevCompletedSteps.concat(currentStep);
                return newCompleteSteps;
            });
        }

        if (!scrollableSteps.includes(nextStep)) {
            setScrollableSteps((scrollableSteps) => {
                const newScrollableSteps = [...scrollableSteps, nextStep];
                newScrollableSteps.sort();
                return newScrollableSteps;
            });
        }

        if (!isLastStep(currentStep) && nextStep > lastIncompleteStep) {
            setLastIncompleteStep(nextStep);
        }

        setActiveStep(nextStep);
    };

    const handlePrevStep = (currentStep: PropertyFormStepsEnum, subFormValues: SubFormValues) => () => {
        if (currentStep === 0) {
            return;
        }

        const isValid = validateStep(currentStep, subFormValues);
        if (!isValid) {
            return;
        }

        setSubForm(currentStep, subFormValues);

        const previousStep = currentStep - 1;

        setActiveStep(previousStep);
    };

    const handleStep = (step: PropertyFormStepsEnum) => () => {
        setActiveStep(step);
    };

    const getSteps = () => {
        return Object.values(PropertyFormStepsToDescriptionMap);
    };

    const steps = getSteps();

    const isStepComplete = (step: PropertyFormStepsEnum) => {
        const isComplete = completedSteps.includes(step);

        return activeStep === step ? false : isComplete;
    };

    const validateStep = (step: PropertyFormStepsEnum, subFormValues: SubFormValues) => {
        const validator = SubFormValidatorFactory.Create(activeStep);
        if (!validator) {
            return true;
        }
        try {
            validator.validateSync(subFormValues, { abortEarly: false });

            setErrors({ ...errors, [PropertyFormStepToFormFieldMap[step]]: [] });

            return true;
        } catch (error) {
            const subFormErrors = error.inner.map((e: { path: any; message: any }) => ({
                field: e.path,
                message: e.message,
            }));

            setErrors({ ...errors, [PropertyFormStepToFormFieldMap[step]]: subFormErrors });

            return false;
        }
    };

    const onScroll = (event: any) => {
        if (event.nativeEvent.wheelDelta > 0) {
            //scrolling up
            if (isFirstStep(activeStep)) {
                return;
            }
            //validateStep
            setActiveStepIfInScreen(activeStep - 1);
        } else {
            //scrolling down
            if (isLastStep(activeStep)) {
                return;
            }
            //validateStep
            setActiveStepIfInScreen(activeStep + 1);
        }
    };

    const setActiveStepIfInScreen = (step: PropertyFormStepsEnum) => {
        const el = document.getElementById(`#subform-${step}`)?.querySelector('h1');
        if (ScreenHelper.isInViewPort(el)) {
            isAutomaticScroll.current = false;
            setActiveStep(step);
        }
    };

    const isLastIncompleteStep = (step: PropertyFormStepsEnum) => {
        if (step !== activeStep) {
            return step === lastIncompleteStep;
        }
        return false;
    };

    return (
        <Page classes={{ page: classes.page }} appBarContent={<div></div>}>
            <BlueWavePrimarySvg classes={{ svg: classes.blueWaveSvg }} />
            <PropertyFormContext.Provider
                value={{
                    actions: {
                        handleNextStep: handleNextStep,
                        handlePrevStep: handlePrevStep,
                        setSubForm: setSubForm,
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
