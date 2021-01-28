import { useContext } from 'react';
import { ProductsContext } from '../providers/ProductsProvider';

export function useUserProducts() {
	const { userProducts } = useContext(ProductsContext);
	return userProducts;
}

export function useSetShouldFetchProducts() {
	const { setShouldFetchProducts } = useContext(ProductsContext);
	return setShouldFetchProducts;
}
