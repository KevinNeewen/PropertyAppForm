import React, { useState } from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Header from '../../../../../components/Header';
import Button from '../../../../../components/Button';
import styles from './styles';
import { FormButtonType } from './types';
import { PropertyFormStepsEnum } from '../../../types';
import { TypeOf } from 'yup';

interface SubForm<T> {
    step: PropertyFormStepsEnum;
    title: string;
    initialValues: T;
    previousButton?: FormButtonType;
    nextButton?: FormButtonType;
    children: (
        //
        subForm: T,
        hasError: (field: string) => any,
        handleChange: (event: React.ChangeEvent<{ value: unknown; name?: string }>) => void,
    ) => React.ReactNode;
    validator?: TypeOf<any>;
}

type MyProps<T> = SubForm<T> & WithStyles<typeof styles>;
const SubForm = <T extends Record<string, unknown>>(props: MyProps<T>) => {
    const [subForm, setSubForm] = useState<T>({
        ...props.initialValues,
    });

    const {
        //
        title,
        classes,
        nextButton,
        previousButton,
        step,
        validator,
        children,
    } = props;

    const [errors, setErrors] = useState<{ field: string; message: string }[]>();

    const validateStep = (direction: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
        validator
            .validate(subForm, { abortEarly: false })
            .then(() => {
                setErrors([]);
                if (direction === 'Next') {
                    nextButton.onClick(event);
                } else {
                    previousButton.onClick(event);
                }
            })
            .catch((error: { inner: any[] }) => {
                const errors = error.inner.map((e: { path: any; message: any }) => ({
                    field: e.path,
                    message: e.message,
                }));
                setErrors(errors);
            });
    };

    const hasError = (field: string) => {
        const error = errors?.find((error) => error.field === field);
        if (error) {
            return { message: error.message };
        }
        return undefined;
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown; name?: string }>) => {
        const subFormField = event.target.name.split('.')[1];
        setSubForm({ ...subForm, [subFormField]: event.target.value });
    };

    const renderFormButtons = () => {
        return (
            <div className={classes.buttons}>
                {previousButton && (
                    <Button //
                        invisible
                        disabled={previousButton.disabled}
                        onClick={validator ? validateStep('Previous') : previousButton.onClick}
                    >
                        {previousButton.text}
                    </Button>
                )}
                {nextButton && (
                    <Button //
                        onClick={validator ? validateStep('Next') : nextButton.onClick}
                    >
                        {nextButton.text}
                    </Button>
                )}
            </div>
        );
    };

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
                        subForm,
                        hasError,
                        handleChange,
                    )}
                </div>
                {renderFormButtons()}
            </div>
        </Container>
    );
};

export default withStyles(styles)(SubForm);
