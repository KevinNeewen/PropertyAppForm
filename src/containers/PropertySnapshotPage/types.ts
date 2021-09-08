import { PropertyTypeEnum } from '../PropertyFormPage/types';

// TODO: Replace this with a property address library
export interface PropertyAddress {
    address: string;
    city: string;
    state: string;
    postcode: number;
}

export const PropertyTypeToDescriptionMap = {
    [PropertyTypeEnum.House]: 'House',
    [PropertyTypeEnum.Apartment]: 'Apartment',
    [PropertyTypeEnum.Townhouse]: 'Townhouse'
};