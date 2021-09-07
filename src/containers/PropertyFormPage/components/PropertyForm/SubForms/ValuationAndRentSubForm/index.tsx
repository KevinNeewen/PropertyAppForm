import React from 'react';
import { Container, withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import { PropertyFormStepsEnum, PropertyFormStepsToDescriptionMap } from '../../../../types';

interface MyProps extends WithStyles<typeof styles> {
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ValuationAndRentSubForm = (props: MyProps) => {
    const step = PropertyFormStepsEnum.ValuationAndRent;
    const title = PropertyFormStepsToDescriptionMap[step];

    const {
        //
        classes,
        handleNextStep,
        handlePrevStep,
    } = props;
    return (
        <SubForm //
            step={step}
            title={title}
            previousButton={{
                text: 'Back',
                onClick: handlePrevStep(step),
            }}
            nextButton={{
                text: 'Next',
                onClick: handleNextStep(step),
            }}
        />
    );
};

export default withStyles(styles)(ValuationAndRentSubForm);
