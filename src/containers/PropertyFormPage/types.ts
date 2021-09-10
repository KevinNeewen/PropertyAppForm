export enum PropertyFormStepsEnum {
    PropertyInformation = 0,
    ValuationAndRent = 1,
    LoanInformation = 2,
    OperatingExpenses = 3,
    Assumptions = 4,
    Summary = 5,
}

export const PropertyFormStepsToDescriptionMap = {
    [PropertyFormStepsEnum.PropertyInformation]: 'Property information',
    [PropertyFormStepsEnum.ValuationAndRent]: 'Valuation and rent',
    [PropertyFormStepsEnum.LoanInformation]: 'Loan information',
    [PropertyFormStepsEnum.OperatingExpenses]: 'Operating expenses',
    [PropertyFormStepsEnum.Assumptions]: 'Assumptions',
    [PropertyFormStepsEnum.Summary]: 'Summary',
};

export enum PropertyTypeEnum {
    House = 'House',
    Townhouse = 'Townhouse',
    Apartment = 'Apartment',
}

export enum PurposeOfPropertyEnum {
    Investment = 'Investment',
    PrimaryResidence = 'Primary residence',
}

export enum LoanTypeEnum {
    PrincipleAndInterest = 'Principle and interest',
    InterestOnly = 'Interest only (coming soon...)',
}

export interface PropertyFormValues extends Record<string, any> {
    propertyInformation: PropertyInformationSubFormValues;
    valuationAndRent: ValuationAndRentSubFormValues;
    loanInformation: LoanInformationSubFormValues;
    operatingExpenses: OperatingExpensesSubFormValues;
    assumptions: AssumptionsSubFormValues;
}

export interface PropertyInformationSubFormValues extends Record<string, any> {
    propertyType: PropertyTypeEnum;
    bedrooms: number;
    bathrooms: number;
    parking: number;
}

export interface ValuationAndRentSubFormValues extends Record<string, any> {
    purchasePrice: number;
    currentValuation: number;
    purposeOfProperty: PurposeOfPropertyEnum;
    rentAtPurchase: number;
    currentRent: number;
}

export interface LoanInformationSubFormValues extends Record<string, any> {
    originalLoan: number;
    currentLoan: number;
    remainingLoanLength: number;
    loanType: LoanTypeEnum;
    interestRate: number;
}

export interface OperatingExpensesSubFormValues extends Record<string, any> {
    propertyManagementFee: number;
    insurance: number;
    repairs: number;
    landTax: number;
    waterRates: number;
    strataFees: number;
    councilRates: number;
}

export interface AssumptionsSubFormValues extends Record<string, any> {
    growthRate: number;
    rentGrowth: number;
    loanTerms: number;
    effectiveTaxRate: number;
    cpi: number;
}
