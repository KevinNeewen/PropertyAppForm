import React, { useState, useEffect } from 'react';
import Page from '../../components/Page';
import { PropertyFormStepsEnum, PropertyFormStepsToDescriptionMap } from './formSteps';
import { Stepper, Step, StepLabel, StepContent, Grid, StepConnector, Container } from '@material-ui/core';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { WithStyles, withStyles } from '@material-ui/styles';
import styles from './styles';
import BlueWaveSvg from '../../components/SVG/BlueWaveSvg';
import { useCallback } from 'react';

interface MyProps extends WithStyles<typeof styles> {}

const PropertyFormPage = (props: MyProps) => {
    const { classes } = props;
    const [activeStep, setActiveStep] = useState<PropertyFormStepsEnum>(0);

    useEffect(() => {
        const el = document.getElementById(`#formpage-${activeStep}`);
        el?.scrollIntoView({
            behavior: 'smooth',
        });
    }, [activeStep]);

    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handlePrevStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const goToStep = (step: PropertyFormStepsEnum) => {
        setActiveStep(step);
    };

    const getSteps = () => {
        return Object.values(PropertyFormStepsToDescriptionMap);
    };

    const steps = getSteps();

    const renderStyledStepConnector = () => {
        return <StepConnector classes={{ root: classes.stepConnectorRoot }} />;
    };

    const formDetailSection = useCallback(
        (title: string, index: number, active: boolean) => {
            return (
                <>
                    <Grid id={`#formpage-${index}`} classes={{ root: classes.formSectionDetail }} item xs={9}>
                        <Container
                            classes={{
                                root: !active ? classes.formSectionDetailContainer : classes.formDetailActive,
                            }}
                            disableGutters
                            fixed
                        >
                            <Header variant="h1">{title}</Header>
                            <div className={classes.form}></div>
                            <div>
                                <Button //
                                    invisible
                                    disabled={activeStep === 0}
                                    onClick={handlePrevStep}
                                >
                                    Back
                                </Button>
                                <Button //
                                    onClick={handleNextStep}
                                >
                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                </Button>
                            </div>
                        </Container>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </>
            );
        },
        [activeStep],
    );

    return (
        <Page appBarContent={<div></div>}>
            <BlueWaveSvg classes={{ svg: classes.blueWaveSvg }} />
            <Grid classes={{ root: classes.formPageGrid }} container direction="row">
                <Grid item xs={3}>
                    <Container classes={{ root: classes.stepperContainer }} fixed>
                        <Stepper //
                            classes={{ root: classes.stepperBar }}
                            activeStep={activeStep}
                            orientation="vertical"
                            connector={renderStyledStepConnector()}
                        >
                            {steps.map((label, index) => (
                                <Step key={index}>
                                    <StepLabel
                                        classes={{
                                            root: classes.stepLabelRoot,
                                            vertical: classes.stepLabelVertical,
                                        }}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Container>
                </Grid>

                {steps.map((label, index) => formDetailSection(label, index, index === activeStep))}
            </Grid>
        </Page>
    );
};

export default withStyles(styles)(PropertyFormPage);
