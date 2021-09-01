import React from 'react';
import { Container, StepConnector, Stepper as MuiStepper, Step, StepLabel } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {
    steps: string[];
    activeStep: number;
}

const Stepper = (props: MyProps) => {
    const { classes, steps, activeStep } = props;

    const renderStyledStepConnector = () => {
        return <StepConnector classes={{ root: classes.stepConnector }} />;
    };

    return (
        <Container classes={{ root: classes.root }} fixed>
            <MuiStepper //
                classes={{ root: classes.stepper }}
                activeStep={activeStep}
                orientation="vertical"
                connector={renderStyledStepConnector()}
            >
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel
                            classes={{
                                root: classes.stepLabel,
                                vertical: classes.stepLabelVertical,
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </MuiStepper>
        </Container>
    );
};

export default withStyles(styles)(Stepper);
