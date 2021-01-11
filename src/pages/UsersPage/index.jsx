import React, { useEffect } from 'react';
import UsersDropdown from '../../components/UsersDropdown';
import { useUser } from '../../hooks/usersHooks';
import useStyles from './styles';

function UsersPage() {
    const classes = useStyles();
    const [, setUser] = useUser();

    useEffect(() => {
        setUser({});
    }, [setUser]);

    return (
        <div className={classes.wrapper}>
            <h1>Choose a user</h1>
            <UsersDropdown />
        </div>
    )
}

export default UsersPage;