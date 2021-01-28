import { get, post } from './api';

export const fetchProducts = async (id) => {
	return get(`user-products/${id}`);
};

export const fetchUsers = async () => {
	return get('users');
};

export const addProduct = async (data) => {
	return post('user-products/add', data);
};