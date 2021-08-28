import React, { useState } from 'react';
import Page from '../../components/Page';
import { PropertyFormStepsEnum, PropertyFormStepsToDescriptionMap } from './formSteps';
import { Stepper, Step, StepLabel, StepContent, Grid, StepConnector, Container } from '@material-ui/core';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { WithStyles, withStyles } from '@material-ui/styles';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {}

const PropertyFormPage = (props: MyProps) => {
    const { classes } = props;
    const [activeStep, setActiveStep] = useState<PropertyFormStepsEnum>(0);

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

    return (
        <Page appBarContent={<div></div>}>
            <Grid container direction="row">
                <Grid item xs={3}>
                    <Container classes={{ root: classes.stepperContainer }} maxWidth="md">
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
                <Grid item xs={9}>
                    <Header variant="h1">{PropertyFormStepsToDescriptionMap[activeStep]}</Header>
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
                </Grid>
            </Grid>
        </Page>
    );
};

export default withStyles(styles)(PropertyFormPage);
