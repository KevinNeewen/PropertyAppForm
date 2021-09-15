import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import {
    LoanTypeEnum,
    PropertyFormStepsEnum,
    PropertyFormStepsToDescriptionMap,
    PropertyFormValues,
} from '../../../../types';
import { FormikProps } from 'formik';
import { SelectField, InputField } from '../../../../../../components/Inputs';

interface LoanInformationSubForm {}

type MyProps = LoanInformationSubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const LoanInformationSubForm = (props: MyProps) => {
    const step = PropertyFormStepsEnum.LoanInformation;

    const title = PropertyFormStepsToDescriptionMap[step];

    const getLoanTypeOptions = () => {
        return Object.values(LoanTypeEnum).map((type) => ({
            value: type,
        }));
    };

    const {
        //
        classes,
    } = props;

    return (
        <SubForm //
            classes={{ subFormDetails: classes.subFormDetails }}
            step={step}
            title={title}
            previousButton={{
                text: 'Previous',
            }}
            nextButton={{
                text: 'Next',
            }}
        >
            {({ subForm, hasError, handleChange }) => (
                <>
                    <InputField //
                        id="loanInformation.originalLoan"
                        label="Original loan value"
                        handleChange={handleChange}
                        value={subForm.originalLoan}
                        fullWidth
                        error={hasError('originalLoan')}
                        dollarAdornment
                    />
                    <InputField //
                        id="loanInformation.currentLoan"
                        label="Current loan value"
                        handleChange={handleChange}
                        value={subForm.currentLoan}
                        fullWidth
                        error={hasError('currentLoan')}
                        dollarAdornment
                    />
                    <InputField //
                        id="loanInformation.remainingLoanLength"
                        label="Remaining loan length (years)"
                        handleChange={handleChange}
                        value={subForm.remainingLoanLength}
                        fullWidth
                        error={hasError('remainingLoanLength')}
                    />
                    <SelectField //
                        id="loanInformation.loanType"
                        handleChange={handleChange}
                        value={subForm.loanType}
                        options={getLoanTypeOptions()}
                        label="Loan type"
                        fullWidth
                    />
                    <InputField //
                        id="loanInformation.interestRate"
                        label="Interest rate"
                        handleChange={handleChange}
                        value={subForm.interestRate}
                        fullWidth
                        error={hasError('interestRate')}
                        percentageAdornment
                    />
                </>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(LoanInformationSubForm);
