import React from 'react';
import { PropertyFormStepsEnum, SubFormValues } from './types';

const PropertyFormContext = React.createContext({
    actions: {
        handleNextStep: (currentStep: PropertyFormStepsEnum, subFormValues: SubFormValues) => () => {},
        handlePrevStep: (currentStep: PropertyFormStepsEnum, subFormValues: SubFormValues) => () => {},
        setSubForm: (step: PropertyFormStepsEnum, values: any) => {},
    },
});

export default PropertyFormContext;
