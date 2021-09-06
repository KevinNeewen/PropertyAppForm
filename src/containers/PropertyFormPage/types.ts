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
    House,
    Townhouse,
    Apartment,
}

export enum PurposeOfProperty {
    Investment,
    PrimaryResidence,
}