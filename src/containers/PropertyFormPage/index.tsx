import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import Page from '../../components/Page';
import { PropertyFormStepsEnum, PropertyFormStepsToDescriptionMap } from './formSteps';
import Stepper from './components/Stepper';
import BlueWaveSvg from '../../components/SVG/BlueWaveSvg';
import Form from './components/Form';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {}

const PropertyFormPage = (props: MyProps) => {
    const { classes } = props;
    const [activeStep, setActiveStep] = useState<PropertyFormStepsEnum>(0);
    const [completedSteps, setCompletedSteps] = useState<PropertyFormStepsEnum[]>([]);

    useEffect(() => {
        const el = document.getElementById(`#formpage-${activeStep}`);

        el?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }, [activeStep]);

    const totalSteps = () => {
        return steps.length;
    };

    const allStepsCompleted = () => {
        return totalCompletedSteps() === totalSteps();
    };

    const totalCompletedSteps = () => {
        return Object.keys(completedSteps).length;
    };

    const isFirstStep = () => {
        return activeStep === 0;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const activeAndCompletedSteps = () => {
        return [activeStep, ...completedSteps];
    };

    const handleNextStep = (step: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => {
        const currentStep = step;

        if (currentStep === steps.length - 1) {
            return;
        }

        const nextStep = currentStep + 1;

        // if (activeAndCompletedSteps().includes(nextStep)) {
        //     setActiveStep(nextStep);
        //     return;
        // }

        setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, nextStep]);
        setActiveStep(nextStep);
    };

    const handlePrevStep = (step: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => {
        setActiveStep(step - 1);
    };

    const handleStep = (step: PropertyFormStepsEnum) => () => {
        setActiveStep(step);
    };

    const getSteps = () => {
        return Object.values(PropertyFormStepsToDescriptionMap);
    };

    const getScrollableSteps = () => {
        return [activeStep, ...completedSteps].map((s) => PropertyFormStepsToDescriptionMap[s]);
    };

    const isStepComplete = (step: PropertyFormStepsEnum) => {
        if (step === 0) {
        }
        return completedSteps.includes(step);
    };

    const steps = getSteps();

    const formDetailSection = useCallback(
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
                                text: isLastStep() ? 'Submit' : 'Next',
                                onClick: handleNextStep(index),
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}></Grid>
                </>
            );
        },
        [activeAndCompletedSteps],
    );

    return (
        <Page classes={{ page: classes.page }} appBarContent={<div></div>}>
            <BlueWaveSvg classes={{ svg: classes.blueWaveSvg }} />
            <Grid classes={{ root: classes.formPageGrid }} container direction="row">
                <Grid item xs={3}>
                    <Stepper //
                        isComplete={isStepComplete}
                        activeStep={activeStep}
                        steps={steps}
                        handleStep={handleStep}
                    />
                </Grid>
                {getScrollableSteps().map((label, index) => formDetailSection(label, index, index === activeStep))}
            </Grid>
        </Page>
    );
};

export default withStyles(styles)(PropertyFormPage);
