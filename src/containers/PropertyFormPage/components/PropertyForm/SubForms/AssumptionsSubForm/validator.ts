import * as Yup from 'yup';

const validator = Yup.object().shape({
    growthRate: Yup.number()
        .typeError('Growth rate must be a number')
        .required('Input required.')
        .positive('Growth rate must be positive'),
    rentGrowth: Yup.number()
        .typeError('Rent growth must be a number')
        .required('Input required.')
        .positive('Rent growth must be positive'),
    loanTerms: Yup.number()
        .typeError('Loan terms must be a number')
        .required('Input required.')
        .positive('Loan terms must be positive'),
    effectiveTaxRate: Yup.number()
        .typeError('Effective tax rate must be a number')
        .required('Input required.')
        .positive('Effective tax rate must be positive'),
    cpi: Yup.number().typeError('CPI must be a number').required('Input required.').positive('CPI must be positive'),
});

export default validator;
