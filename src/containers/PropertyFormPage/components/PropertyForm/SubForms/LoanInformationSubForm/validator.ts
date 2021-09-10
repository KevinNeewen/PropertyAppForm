import * as Yup from 'yup';

const validator = Yup.object().shape({
    originalLoan: Yup.number()
        .typeError('Original loan must be a number')
        .required('Input required.')
        .positive('Original loan must be positive'),
    currentLoan: Yup.number()
        .typeError('Current loan must be a number')
        .required('Input required.')
        .positive('Current loan must be positive'),
    remainingLoanLength: Yup.number()
        .typeError('Remaining loan length must be a number')
        .required('Input required.')
        .positive('Remaining loan length must be positive'),
    interestRate: Yup.number()
        .typeError('Interest rate must be a number')
        .required('Input required.')
        .positive('Interest rate must be positive'),
});

export default validator;
