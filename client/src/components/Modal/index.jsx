import React from 'react';
import PropTypes from 'prop-types';
import { Modal as MUIModal, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import cx from 'classnames';
import useStyles from './styles';

function Modal({ className, children, open, onClose, onSubmit }) {
    const classes = useStyles();

    return(
        <MUIModal
            className={classes.wrap}
            open={open}
            onClose={onClose}
        >
            <div className={cx(classes.paper, className)}>
                {children}
                <IconButton className={classes.closeButton} size="small" onClick={onClose}><Close /></IconButton>
                {/* <div className={classes.buttons}>
                    { onSubmit && <Button className={classes.button} onClick={onSubmit} variant="contained">Apply</Button>}
                    
                </div> */}
            </div>
        </MUIModal>
    )
};

Modal.propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
};

export default Modal;