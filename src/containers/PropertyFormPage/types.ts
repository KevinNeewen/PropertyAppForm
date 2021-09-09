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
    PrincipleAndInterest,
    InterestOnly,
}

export interface PropertyFormValues {
    propertyInformation: PropertyInformationSubFormValues;
    valuationAndRent: ValuationAndRentSubFormValues;
}

export interface PropertyInformationSubFormValues {
    propertyType: PropertyTypeEnum;
    bedrooms: number;
    bathrooms: number;
    parking: number;
}

export interface ValuationAndRentSubFormValues {
    purchasePrice: number;
    currentValuation: number;
    purposeOfProperty: PurposeOfPropertyEnum;
    rentAtPurchase: number;
    currentRent: number;
}
