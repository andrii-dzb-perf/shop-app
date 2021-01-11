import { useContext } from 'react';
import { UsersContext } from '../providers/UsersProvider';

export function useUser() {
	const { user, setUser } = useContext(UsersContext);
	return [user, setUser];
}

export function useUsersList() {
    const { usersList } = useContext(UsersContext);
    return usersList;
}