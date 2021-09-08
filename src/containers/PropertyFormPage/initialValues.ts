import { LoanType, PropertyTypeEnum, PurposeOfProperty } from './types';

export const initialValues = {
    propertyInformation: {
        propertyType: PropertyTypeEnum.House,
        bedrooms: 0,
        bathrooms: 0,
        parking: 0,
    },
    valuationAndRent: {
        purchasePrice: 500000,
        currentValuation: 500000,
        purposeOfProperty: PurposeOfProperty.Investment,
        rentAtPurchase: 400,
        currentRent: 400,
    },
    loanInformation: {
        originalLoan: 500000,
        currentLoan: 500000,
        remainingLoanLength: 30,
        loanType: LoanType.PrincipleAndInterest,
        interestRate: 2.64,
    },
    operatingExpenses: {
        propertyManagementFee: 1000,
        insurance: 1500,
        repairs: 750,
        landTax: 3000,
        waterRates: 1000,
        strataFees: 2400,
        councilRates: 1500,
    },
    assumptions: {
        growthRate: 5.0,
        rentGrowth: 3.0,
        loanTerms: 30,
        effectiveTaxRate: 30,
        cpi: 3,
    },
};
