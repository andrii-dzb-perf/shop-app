import { useContext } from 'react';
import { ProductsContext } from '../providers/ProductsProvider';

export function useUserProducts() {
	const { userProducts } = useContext(ProductsContext);
	return userProducts;
}
