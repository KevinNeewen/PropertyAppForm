import { LoanTypeEnum, PropertyTypeEnum, PurposeOfPropertyEnum } from './types';

export const initialValues = {
    propertyInformation: {
        propertyType: PropertyTypeEnum.House,
        bedrooms: 3,
        bathrooms: 2,
        parking: 2,
    },
    valuationAndRent: {
        purchasePrice: 500000,
        currentValuation: 500000,
        purposeOfProperty: PurposeOfPropertyEnum.Investment,
        rentAtPurchase: 400,
        currentRent: 400,
    },
    loanInformation: {
        originalLoan: 500000,
        currentLoan: 500000,
        remainingLoanLength: 30,
        loanType: LoanTypeEnum.PrincipleAndInterest,
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
