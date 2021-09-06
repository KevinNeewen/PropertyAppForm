import React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import { Container, TextField } from '@material-ui/core';
import Header from '../../../../../components/Header';
import Button from '../../../../../components/Button';
import styles from './styles';
import { FormButton } from './types';
import { useFormikContext } from 'formik';
import { PropertyForm } from '../../../types';

interface MyProps extends WithStyles<typeof styles> {
    title: string;
    previousButton?: FormButton;
    nextButton?: FormButton;
}

const SubFormContainer = (props: MyProps) => {
    const { title, classes, nextButton, previousButton } = props;

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
        <Container classes={{ root: classes.root }} disableGutters fixed>
            <Header variant="h1">{title}</Header>
            <div className={classes.form}>
                <TextField //
                    id="PropertyType"
                    name="PropertyType"
                    label="PropertyType"
                    value={values.PropertyInformation.propertyType}
                    type="select"
                />
            </div>
            {renderFormButtons()}
        </Container>
    );
};

export default withStyles(styles)(SubFormContainer);
