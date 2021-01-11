import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../BackButton';
import useStyles from './styles';

function Header() {
    const classes = useStyles();
    const location = useLocation();
    const showBackBtn = !location.pathname.includes('/users');

    return(
        <header className={classes.header}>
            { showBackBtn && <BackButton className={classes.button} /> }
            <div className={classes.title}>Shop App</div>
        </header>
    )
};

export default Header;