import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import Page from '../../components/Page';
import { PropertyFormStepsEnum, PropertyFormStepsToDescriptionMap } from './types';
import Stepper from './components/Stepper';
import BlueWavePrimarySvg from '../../components/SVG/BlueWavePrimarySvg';
import Form from './components/Forms/Form';
import styles from './styles';
import ScreenHelper from '../../utils/screenHelper';
import { Formik } from 'formik';
import { initialValues } from './initialValues';

interface MyProps extends WithStyles<typeof styles> {}

const PropertyFormPage = (props: MyProps) => {
    const { classes } = props;
    const [activeStep, setActiveStep] = useState<PropertyFormStepsEnum>(PropertyFormStepsEnum.PropertyInformation);
    const [lastIncompleteStep, setLastIncompleteStep] = useState<PropertyFormStepsEnum>(
        PropertyFormStepsEnum.PropertyInformation,
    );
    const [completedSteps, setCompletedSteps] = useState<PropertyFormStepsEnum[]>([]);
    const [scrollableSteps, setScrollableSteps] = useState<PropertyFormStepsEnum[]>([
        PropertyFormStepsEnum.PropertyInformation,
    ]);

    const isAutomaticScroll = useRef<boolean>(true);

    useEffect(() => {
        const el = document.getElementById(`#formpage-${activeStep}`);

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

    const handlePrevStep = (currentStep: PropertyFormStepsEnum) => () => {
        if (currentStep === 0) {
            return;
        }

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

    const onScroll = (event: any) => {
        if (event.nativeEvent.wheelDelta > 0) {
            //scrolling up
            if (isFirstStep(activeStep)) {
                return;
            }

            setActiveStepIfInScreen(activeStep - 1);
        } else {
            //scrolling down
            if (isLastStep(activeStep)) {
                return;
            }
            setActiveStepIfInScreen(activeStep + 1);
        }
    };

    const setActiveStepIfInScreen = (step: PropertyFormStepsEnum) => {
        const el = document.getElementById(`#formpage-${step}`)?.querySelector('h1');
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

    const renderForm = () => (
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
                    <form onSubmit={props.handleSubmit}>
                        {scrollableSteps.map((step) =>
                            renderSubForm(PropertyFormStepsToDescriptionMap[step], step, step === activeStep),
                        )}
                    </form>;
                }
            }}
        </Formik>
    );

    const renderSubForm = useCallback(
        (title: string, index: number, active: boolean) => {
            return (
                <>
                    <Grid id={`#formpage-${index}`} classes={{ root: classes.formSectionDetail }} item xs={9}>
                        <Form //
                            classes={{ root: !active ? classes.formSectionDetailContainer : classes.formDetailActive }}
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
                                text: isLastStep(activeStep) ? 'Submit' : 'Next',
                                onClick: handleNextStep(index),
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}></Grid>
                </>
            );
        },
        [activeStep],
    );

    return (
        <Page onWheel={onScroll} classes={{ page: classes.page }} appBarContent={<div></div>}>
            <BlueWavePrimarySvg classes={{ svg: classes.blueWaveSvg }} />
            <Grid classes={{ root: classes.formPageGrid }} container direction="row">
                <Grid item xs={3}>
                    <Stepper //
                        isComplete={isStepComplete}
                        activeStep={activeStep}
                        steps={steps}
                        handleStep={handleStep}
                        isScrollableTo={isStepScrollableTo}
                        isLastIncompleteStep={isLastIncompleteStep}
                    />
                </Grid>
                {renderForm()}
            </Grid>
        </Page>
    );
};

export default withStyles(styles)(PropertyFormPage);
