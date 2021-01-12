import React, { useState } from 'react';

export const UsersContext = React.createContext({});

const usersList = [
    {
        name: 'Andrii',
        id: 1,
    },
    {
        name: 'Nazar',
        id: 2,
    }
];

export default function UsersProvider({ children }) {
    const [ user, setUser ] = useState({});

    const setUserById = id => {
        const selectedUser = usersList.find(user => user.id === parseInt(id));
        if (selectedUser) {
            setUser(selectedUser);
        }
    }

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