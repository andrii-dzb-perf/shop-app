import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import { useUser, useUsersList } from '../../hooks/usersHooks';
import useStyles from './styles';

function UsersDropdown() {
    const classes = useStyles();
    const history = useHistory();
    const [user] = useUser();
    const usersList = useUsersList();
    const handleChange = (event) =>  history.push(`/user/${event.target.value}`);
    
    return (
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>User</InputLabel>
            <Select
                value={user.id || ''}
                onChange={handleChange}
                displayEmpty
            >
                {
                    usersList.map(({ name, id }) => (
                        <MenuItem key={id} value={id}>{ name }</MenuItem>
                    ))
                }
            </Select>
      </FormControl>
    );
};

export default UsersDropdown;