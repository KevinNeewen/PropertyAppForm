import { PropertyFormStepsEnum } from '../../../types';
import ValuationAndRentSubFormValidator from './ValuationAndRentSubForm/validator';
import OperatingExpensesSubFormValidator from './OperatingExpensesSubForm/validator';
import LoanInformationSubFormValidator from './LoanInformationSubForm/validator';
import AssumptionsSubFormValidator from './AssumptionsSubForm/validator';

const Create = (step: PropertyFormStepsEnum) => {
    switch (step) {
        case PropertyFormStepsEnum.ValuationAndRent:
            return ValuationAndRentSubFormValidator;
        case PropertyFormStepsEnum.OperatingExpenses:
            return OperatingExpensesSubFormValidator;
        case PropertyFormStepsEnum.LoanInformation:
            return LoanInformationSubFormValidator;
        case PropertyFormStepsEnum.Assumptions:
            return AssumptionsSubFormValidator;
        default:
            return undefined;
    }
};

export default { Create };
