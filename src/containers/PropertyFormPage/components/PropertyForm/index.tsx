import React, { useCallback } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import { Form } from 'formik';
import { PropertyFormStepsEnum } from '../../types';
import PropertyInformationSubForm from './SubForms/PropertyInformationSubForm';
import ValuationAndRentSubForm from './SubForms/ValuationAndRentSubForm';
import LoanInformationSubForm from './SubForms/LoanInformationSubForm';
import OperatingExpensesSubForm from './SubForms/OperatingExpensesSubForm';
import AssumptionsSubForm from './SubForms/AssumptionsSubForm';
import SummarySubForm from './SubForms/SummarySubForm';

interface MyProps extends WithStyles<typeof styles> {
    activeStep: PropertyFormStepsEnum;
    stepsToDisplay: PropertyFormStepsEnum[];
}

const PropertyForm = (props: MyProps) => {
    const {
        //
        activeStep,
        stepsToDisplay,
    } = props;

    const renderSubForm = useCallback(
        (step, props) => {
            switch (step) {
                case PropertyFormStepsEnum.PropertyInformation:
                    return <PropertyInformationSubForm key={step} {...props} />;
                case PropertyFormStepsEnum.ValuationAndRent:
                    return <ValuationAndRentSubForm key={step} {...props} />;
                case PropertyFormStepsEnum.LoanInformation:
                    return <LoanInformationSubForm key={step} {...props} />;
                case PropertyFormStepsEnum.OperatingExpenses:
                    return <OperatingExpensesSubForm key={step} {...props} />;
                case PropertyFormStepsEnum.Assumptions:
                    return <AssumptionsSubForm key={step} {...props} />;
                case PropertyFormStepsEnum.Summary:
                    return <SummarySubForm key={step} {...props} />;
                default:
                    return;
            }
        },
        [activeStep],
    );

    return <Form>{stepsToDisplay.map((step) => renderSubForm(step, props))}</Form>;
};

export default React.memo(withStyles(styles)(PropertyForm));
