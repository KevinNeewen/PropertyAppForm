import React from 'react';
import { Box, List, ListItem, Typography, withStyles, WithStyles } from '@material-ui/core';
import { PropertyFormStepsEnum } from '../../types';
import Button from '../../../../components/Button';
import styles from './styles';

interface SummaryDetail {
    title: string;
    items: string[];
    step: PropertyFormStepsEnum;
    handleStep: (
        currentStep: PropertyFormStepsEnum,
        toStep: PropertyFormStepsEnum,
    ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type MyProps = SummaryDetail & WithStyles<typeof styles>;

const SummaryDetail = (props: MyProps) => {
    const { classes, title, step, items, handleStep } = props;
    return (
        <Box>
            <Typography classes={{ root: classes.header }} variant="h5">
                {title}
            </Typography>
            <Button
                classes={{ root: classes.button }}
                invisible
                onClick={handleStep(PropertyFormStepsEnum.Summary, step)}
            >
                Edit
            </Button>
            <List>
                {items.map((item) => (
                    <ListItem dense disableGutters key={item}>
                        <Typography classes={{ root: classes.listItem }} variant={'subtitle1'}>
                            {item}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default withStyles(styles)(SummaryDetail);
