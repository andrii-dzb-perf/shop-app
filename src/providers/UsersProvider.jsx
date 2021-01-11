import React, { useState, useEffect } from 'react';

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

    return (
		<UsersContext.Provider
			value={
				{
                    user,
                    setUser,
                    usersList,
				}
			}
		>
			{children}
		</UsersContext.Provider>
	);
};