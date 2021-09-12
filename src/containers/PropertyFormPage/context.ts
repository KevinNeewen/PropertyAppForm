import React from 'react';
import { PropertyFormStepsEnum } from './types';

/* eslint-disable @typescript-eslint/no-unused-vars */
const PropertyFormContext = React.createContext({
    actions: {
        handleNextStep: (currentStep: PropertyFormStepsEnum) => () => {},
        handlePrevStep: (currentStep: PropertyFormStepsEnum) => () => {},
    },
});

export default PropertyFormContext;
