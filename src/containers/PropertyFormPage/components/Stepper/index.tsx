import React from 'react';
import { Container, StepConnector, StepLabel, Stepper as MuiStepper, Step, StepButton } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import styles from './styles';
import { PropertyFormStepsEnum } from '../../types';

interface MyProps extends WithStyles<typeof styles> {
    steps: string[];
    activeStep: PropertyFormStepsEnum;
    isScrollableTo: (step: PropertyFormStepsEnum) => boolean;
    handleStep: (step: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    isComplete: (step: PropertyFormStepsEnum) => boolean;
    isLastIncompleteStep: (step: PropertyFormStepsEnum) => boolean;
}

const Stepper = (props: MyProps) => {
    const {
        //
        classes,
        steps,
        activeStep,
        handleStep,
        isComplete,
        isScrollableTo,
        isLastIncompleteStep,
    } = props;

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
                nonLinear
            >
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepButton
                            classes={{ root: classes.stepButton }}
                            onClick={handleStep(index)}
                            disabled={!isScrollableTo(index)}
                            completed={isComplete(index)}
                        >
                            <StepLabel
                                classes={{
                                    root: ` ${
                                        isLastIncompleteStep(index) ? classes.lastIncompleteStep : classes.stepLabel
                                    }`,
                                    vertical: classes.stepLabelVertical,
                                }}
                            >
                                {label}
                            </StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </MuiStepper>
        </Container>
    );
};

export default withStyles(styles)(Stepper);
