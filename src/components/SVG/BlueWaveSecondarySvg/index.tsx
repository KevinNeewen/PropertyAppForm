import { withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import styles from './styles';

interface MyProps extends WithStyles<typeof styles> {}

const BlueWaveSecondarySvg = (props: MyProps) => (
    <svg className={props.classes.svg} width="934" height="620" viewBox="0 0 934 620" fill="none">
        <path
            d="M1118.84 -1073.99C1320.49 -1205.09 1585.29 -1049.83 1569.36 -809.839L1533.11 -263.783C1531.78 -243.759 1528.39 -223.926 1523 -204.597L1350.65 412.659C1269.68 702.667 851.913 682.323 799.502 385.82C770.658 222.639 608.385 119.063 448.23 161.609L368.861 182.693C80.7986 259.216 -123.328 -94.2639 86.934 -305.511L340.41 -560.174C354.93 -574.763 370.953 -587.776 388.21 -598.995L1118.84 -1073.99Z"
            fill="url(#paint0_radial)"
        />
        <defs>
            <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(466.5 109.5) rotate(90) scale(1501.5 1141.5)"
            >
                <stop stopColor="#3A57E8" />
                <stop offset="1" stopColor="#9A18FF" />
            </radialGradient>
        </defs>
    </svg>
);

export default withStyles(styles)(BlueWaveSecondarySvg);
