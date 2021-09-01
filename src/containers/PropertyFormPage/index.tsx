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
    const [activeAndCompletedSteps, setActiveAndCompletedSteps] = useState<PropertyFormStepsEnum[]>([activeStep]);

    useEffect(() => {
        const el = document.getElementById(`#formpage-${activeStep}`);

        el?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }, [activeStep]);

    const handleNextStep = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (activeAndCompletedSteps.includes(activeStep + 1)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            return;
        }
        setActiveAndCompletedSteps((prevActiveAndCompletedSteps) => [...prevActiveAndCompletedSteps, activeStep + 1]);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handlePrevStep = (event: React.MouseEvent<HTMLButtonElement>) => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const goToStep = (step: PropertyFormStepsEnum) => () => {
        setActiveStep(step);
    };

    const getSteps = () => {
        return Object.values(PropertyFormStepsToDescriptionMap);
    };

    const getScrollableSteps = () => {
        return activeAndCompletedSteps.map((s) => PropertyFormStepsToDescriptionMap[s]);
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
                            previousButton={{
                                text: 'Back',
                                onClick: handlePrevStep,
                                disabled: activeStep === 0,
                            }}
                            nextButton={{
                                text: activeStep === steps.length - 1 ? 'Submit' : 'Next',
                                onClick: handleNextStep,
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
                    <Stepper activeStep={activeStep} steps={steps} />
                </Grid>
                {getScrollableSteps().map((label, index) => formDetailSection(label, index, index === activeStep))}
            </Grid>
        </Page>
    );
};

export default withStyles(styles)(PropertyFormPage);
