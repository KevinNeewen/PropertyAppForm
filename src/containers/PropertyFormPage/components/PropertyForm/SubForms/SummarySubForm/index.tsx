import React from 'react';
import { Grid, withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import {
    AssumptionsSubFormValues,
    LoanInformationSubFormValues,
    OperatingExpensesSubFormValues,
    PropertyFormStepsEnum,
    PropertyFormStepsToDescriptionMap,
    PropertyFormValues,
    PropertyInformationSubFormValues,
    ValuationAndRentSubFormValues,
} from '../../../../types';

import { FormikProps } from 'formik';
import SummaryDetail from '../../../SummaryDetail';

interface SummarySubForm {}

type MyProps = SummarySubForm & WithStyles<typeof styles> & FormikProps<PropertyFormValues>;

const SummarySubForm = (props: MyProps) => {
    const step = PropertyFormStepsEnum.Summary;
    const title = PropertyFormStepsToDescriptionMap[step];

    const {
        //
        classes,
    } = props;

    const renderPropertyInformationSummary = (
        subForm: PropertyInformationSubFormValues,
        handleStep: (
            currentStep: PropertyFormStepsEnum,
            toStep: PropertyFormStepsEnum,
        ) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    ) => {
        const items = [
            //
            `Property type: ${subForm.propertyType}`,
            `Bedrooms: ${subForm.bedrooms}`,
            `Bathrooms: ${subForm.bathrooms}`,
            `Parking: ${subForm.parking}`,
        ];
        return (
            <SummaryDetail //
                title="Property Information"
                step={PropertyFormStepsEnum.PropertyInformation}
                handleStep={handleStep}
                items={items}
            />
        );
    };

    const renderValuationAndRentSummary = (
        subForm: ValuationAndRentSubFormValues,
        handleStep: (
            currentStep: PropertyFormStepsEnum,
            toStep: PropertyFormStepsEnum,
        ) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    ) => {
        const items = [
            //
            `Purchase price: $${subForm.purchasePrice}`,
            `Current valuation: $${subForm.currentValuation}`,
            `Purpose of property: ${subForm.purposeOfProperty}`,
            `Rent at purchase: $${subForm.rentAtPurchase} per week`,
            `Current rent: $${subForm.currentRent} per week`,
        ];
        return (
            <SummaryDetail //
                title="Valuation and rent"
                step={PropertyFormStepsEnum.ValuationAndRent}
                handleStep={handleStep}
                items={items}
            />
        );
    };

    const renderLoanInformationSummary = (
        subForm: LoanInformationSubFormValues,
        handleStep: (
            currentStep: PropertyFormStepsEnum,
            toStep: PropertyFormStepsEnum,
        ) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    ) => {
        const items = [
            //
            `Original loan value: $${subForm.originalLoan}`,
            `Current loan value: $${subForm.currentLoan}`,
            `Remaining loan length: ${subForm.remainingLoanLength} years`,
            `Loan type: ${subForm.loanType}`,
            `Interest rate: ${subForm.interestRate}%`,
        ];
        return (
            <SummaryDetail //
                title="Loan information"
                step={PropertyFormStepsEnum.LoanInformation}
                handleStep={handleStep}
                items={items}
            />
        );
    };

    const renderOperatingExpensesSummary = (
        subForm: OperatingExpensesSubFormValues,
        handleStep: (
            currentStep: PropertyFormStepsEnum,
            toStep: PropertyFormStepsEnum,
        ) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    ) => {
        const items = [
            //
            `Property management fee: $${subForm.propertyManagementFee}`,
            `Insurance: $${subForm.insurance}`,
            `Repairs: $${subForm.repairs}`,
            `Land tax: $${subForm.landTax}`,
            `Water rates: $${subForm.waterRates}`,
            `Strata fees: $${subForm.strataFees}`,
            `Council rates: $${subForm.councilRates}`,
        ];
        return (
            <SummaryDetail //
                title="Operating expenses"
                step={PropertyFormStepsEnum.OperatingExpenses}
                handleStep={handleStep}
                items={items}
            />
        );
    };

    const renderAssumptionsSummary = (
        subForm: AssumptionsSubFormValues,
        handleStep: (
            currentStep: PropertyFormStepsEnum,
            toStep: PropertyFormStepsEnum,
        ) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    ) => {
        const items = [
            //
            `Growth rate: ${subForm.growthRate}%`,
            `Rent growth: ${subForm.rentGrowth}%`,
            `Loan term: ${subForm.loanTerms} years`,
            `Effective tax rate: ${subForm.effectiveTaxRate}%`,
            `CPI: ${subForm.cpi}%`,
        ];
        return (
            <SummaryDetail //
                title="Assumptions"
                step={PropertyFormStepsEnum.Assumptions}
                handleStep={handleStep}
                items={items}
            />
        );
    };

    return (
        <SubForm //
            classes={{ subFormDetails: classes.subFormDetails }}
            step={step}
            title={title}
            previousButton={{
                text: 'Previous',
            }}
            nextButton={{
                text: 'Submit',
            }}
        >
            {({ form, handleStep }) => (
                <Grid container>
                    <Grid item xs={4}>
                        {renderPropertyInformationSummary(form.propertyInformation, handleStep)}
                        {renderValuationAndRentSummary(form.valuationAndRent, handleStep)}
                    </Grid>
                    <Grid item xs={4}>
                        {renderLoanInformationSummary(form.loanInformation, handleStep)}
                        {renderOperatingExpensesSummary(form.operatingExpenses, handleStep)}
                    </Grid>
                    <Grid item xs={4}>
                        {renderAssumptionsSummary(form.assumptions, handleStep)}
                    </Grid>
                </Grid>
            )}
        </SubForm>
    );
};

export default withStyles(styles)(SummarySubForm);
