import { PropertyFormStepsEnum, PropertyTypeEnum, PurposeOfProperty } from './types';

export const initialValues = {
    PropertyInformation: {
        propertyType: PropertyTypeEnum.House,
        bedrooms: 0,
        bathrooms: 0,
        parking: 0,
    },
    ValuationAndRent: {
        purchasePrice: 500000,
        currentValuation: 500000,
        purposeOfProperty: PurposeOfProperty.Investment,
        RentAtPurchase: 400,
        CurrentRent: 400,
    },
};
