import * as Yup from 'yup';

const validator = Yup.object().shape({
    purchasePrice: Yup.number()
        .typeError('Purchase price must be a number')
        .required('Input required.')
        .positive('Purchase price must be positive'),
    currentValuation: Yup.number()
        .typeError('Current valuation must be a number')
        .required('Input required.')
        .positive('Current valuation must be positive'),
    rentAtPurchase: Yup.number()
        .typeError('Rent at purchase must be a number')
        .required('Input required.')
        .positive('Rent at purchase must be positive'),
    currentRent: Yup.number()
        .typeError('Current rent must be a number')
        .required('Input required.')
        .positive('Current rent must be positive'),
});

export default validator;
