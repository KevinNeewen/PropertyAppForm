import React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Header from '../../../../../components/Header';
import Button from '../../../../../components/Button';
import styles from './styles';
import { FormButtonType } from './types';
import {
    PropertyFormStepsEnum,
    PropertyFormStepToSubFormField,
    PropertyFormValues,
    SubFormValues,
} from '../../../types';
import PropertyFormContext from '../../../context';
import { FormikErrors, useFormikContext } from 'formik';

type ChildrenProps = {
    //
    form: PropertyFormValues;
    subForm: SubFormValues;
    hasError: (field: string) => any;
    handleChange: (event: React.ChangeEvent<{ value: unknown; name?: string }>) => void;
    handleStep: (
        currentStep: PropertyFormStepsEnum,
        toStep: PropertyFormStepsEnum,
    ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

interface SubForm {
    step: PropertyFormStepsEnum;
    title: string;
    previousButton?: FormButtonType;
    nextButton?: FormButtonType;
    children: (props: ChildrenProps) => React.ReactNode;
}

type MyProps = SubForm & WithStyles<typeof styles>;
const SubForm = (props: MyProps) => {
    const {
        //
        title,
        classes,
        nextButton,
        previousButton,
        step,
        children,
    } = props;

    const {
        //
        values,
        errors,
        setValues,
    } = useFormikContext<PropertyFormValues>();

    const subForm = values[PropertyFormStepToSubFormField[step]];

    const form = values;

    const subFormErrors: FormikErrors<any>[] = errors[PropertyFormStepToSubFormField[step]] as FormikErrors<any>[];

    const hasError = (field: string) => {
        const error = subFormErrors?.find((error) => error.field === field);
        if (error) {
            return { message: error.message };
        }
        return undefined;
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown; name?: string }>) => {
        const subFormField = event.target.name.split('.')[1];
        setValues({
            ...values,
            [PropertyFormStepToSubFormField[step]]: {
                ...values[PropertyFormStepToSubFormField[step]],
                [subFormField]: event.target.value,
            },
        });
    };

    const submitSubFormValuesOnClick =
        (actions: any, direction: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
            const {
                //
                handleNextStep,
                handlePrevStep,
            } = actions;

            if (direction === 'Next') {
                handleNextStep(step)(event);
            } else {
                handlePrevStep(step)(event);
            }
        };

    const renderFormButtons = (actions: any) => {
        return (
            <div className={classes.buttons}>
                {previousButton && (
                    <Button //
                        invisible
                        hasBorder
                        disabled={previousButton.disabled}
                        onClick={submitSubFormValuesOnClick(actions, 'Previous')}
                    >
                        {previousButton.text}
                    </Button>
                )}
                {nextButton && (
                    <Button //
                        onClick={submitSubFormValuesOnClick(actions, 'Next')}
                    >
                        {nextButton.text}
                    </Button>
                )}
            </div>
        );
    };

    return (
        <PropertyFormContext.Consumer>
            {({ actions }) => {
                return (
                    <Container //
                        id={`#subform-${step}`}
                        classes={{ root: classes.root }}
                        disableGutters
                        fixed
                    >
                        <div className={classes.subForm}>
                            <Header variant="h1">{title}</Header>
                            <div className={classes.subFormDetails}>
                                {children(
                                    //
                                    { form, subForm, hasError, handleChange, handleStep: actions.handleStep },
                                )}
                            </div>
                            {renderFormButtons(actions)}
                        </div>
                    </Container>
                );
            }}
        </PropertyFormContext.Consumer>
    );
};

export default withStyles(styles)(SubForm);
