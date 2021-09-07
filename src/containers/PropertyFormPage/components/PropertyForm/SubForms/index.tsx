import React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import { Container, TextField } from '@material-ui/core';
import Header from '../../../../../components/Header';
import Button from '../../../../../components/Button';
import styles from './styles';
import { FormButton } from './types';
import { useFormikContext } from 'formik';
import { PropertyForm, PropertyFormStepsEnum } from '../../../types';

interface MyProps extends WithStyles<typeof styles> {
    step: PropertyFormStepsEnum;
    title: string;
    previousButton?: FormButton;
    nextButton?: FormButton;
}

const SubForm = (props: MyProps) => {
    const {
        //
        title,
        classes,
        nextButton,
        previousButton,
        step,
    } = props;

    const { values } = useFormikContext<PropertyForm>();

    const renderFormButtons = () => {
        return (
            <div>
                {previousButton && (
                    <Button //
                        invisible
                        disabled={previousButton.disabled}
                        onClick={previousButton.onClick}
                    >
                        {previousButton.text}
                    </Button>
                )}
                {nextButton && (
                    <Button //
                        onClick={nextButton.onClick}
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
                <div className={classes.subFormDetails}></div>
                {/* <TextField //
                    id="PropertyType"
                    name="PropertyType"
                    label="PropertyType"
                    value={values.PropertyInformation.propertyType}
                    type="select"
                /> */}
                {renderFormButtons()}
            </div>
        </Container>
    );
};

export default withStyles(styles)(SubForm);
