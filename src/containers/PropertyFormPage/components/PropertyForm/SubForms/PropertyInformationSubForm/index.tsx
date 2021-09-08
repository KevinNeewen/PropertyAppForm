import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import SubForm from '../index';
import styles from './styles';
import { PropertyFormStepsEnum, PropertyFormStepsToDescriptionMap, PropertyTypeEnum } from '../../../../types';
import SelectField from '../../../../../../components/SelectField';
import { useFormikContext } from 'formik';
import EnumHelper from '../../../../../../utils/EnumHelper';

interface MyProps extends WithStyles<typeof styles> {
    handlePrevStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleNextStep: (currentStep: PropertyFormStepsEnum) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PropertyInformationSubForm = (props: MyProps) => {
    // const [subForm, setSubForm] = useState<PropertyInformationSubForm>();

    const formikProps = useFormikContext();

    console.log(formikProps);

    const step = PropertyFormStepsEnum.PropertyInformation;

    const title = PropertyFormStepsToDescriptionMap[step];

    const getOptions = () => {
        return EnumHelper.getMemberNamesOnly(PropertyTypeEnum).map((type) => ({
            value: type,
        }));
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        console.log(event.target.value);
    };

    const {
        //
        handleNextStep,
        handlePrevStep,
    } = props;

    return (
        <SubForm //
            step={step}
            title={title}
            previousButton={
                step !== 0
                    ? {
                          text: 'Back',
                          onClick: handlePrevStep(step),
                      }
                    : undefined
            }
            nextButton={{
                text: 'Next',
                onClick: handleNextStep(step),
            }}
        >
            <SelectField //
                id="propertyInformation-propertyType"
                handleChange={handleChange}
                value={PropertyTypeEnum.House.toString()}
                options={getOptions()}
                defaultValue={PropertyTypeEnum.House.toString()}
                label="Property type"
                fullWidth
            />
        </SubForm>
    );
};

export default withStyles(styles)(PropertyInformationSubForm);
