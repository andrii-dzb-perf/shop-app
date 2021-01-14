import React, { useState, useEffect } from 'react';
import { get } from '../http/api';

export const UsersContext = React.createContext({});

export default function UsersProvider({ children }) {
    const [ user, setUser ] = useState({});
    const [ usersList, setUsersList ] = useState([]);

    const setUserById = id => {
        const selectedUser = usersList.find(user => user.id === parseInt(id));
        if (selectedUser) {
            setUser(selectedUser);
        }
    }

    const getUsersList = async () => {
        const users = await get('users');
        setUsersList(users)
    }

    useEffect(() => {
        getUsersList();
    }, [])

    return (
		<UsersContext.Provider
			value={
				{
                    user,
                    setUser,
                    usersList,
                    setUserById,
				}
			}
		>
			{children}
		</UsersContext.Provider>
	);
};