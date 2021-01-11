import React from 'react';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import useStyles from './styles';

function BackButton({ className }) {
    const classes = useStyles();
    const history = useHistory();

    return(
        <IconButton
            className={cx(classes.button, className)}
            onClick={history.goBack}
        >
            <ArrowBack fontSize="inherit" />
        </IconButton>
    )
};

export default BackButton;