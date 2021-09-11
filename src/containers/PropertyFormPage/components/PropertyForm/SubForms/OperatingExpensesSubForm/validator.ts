import * as Yup from 'yup';

const validator = Yup.object().shape({
    propertyManagementFee: Yup.number()
        .typeError('Property management fee must be a number')
        .required('Input required.')
        .positive('Property management fee must be positive'),
    repairs: Yup.number()
        .typeError('Repairs must be a number')
        .required('Input required.')
        .positive('Repairs must be positive'),
    landTax: Yup.number()
        .typeError('Land tax must be a number')
        .required('Input required.')
        .positive('Land tax must be positive'),
    waterRates: Yup.number()
        .typeError('Water rates must be a number')
        .required('Input required.')
        .positive('Water rates must be positive'),
    strataFees: Yup.number()
        .typeError('Strata fees must be a number')
        .required('Input required.')
        .positive('Strata fees must be positive'),
    councilRates: Yup.number()
        .typeError('Council rates must be a number')
        .required('Input required.')
        .positive('Council rates must be positive'),
});

export default validator;
