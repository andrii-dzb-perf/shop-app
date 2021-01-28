import React, { useState, useEffect } from 'react';
import { useUser } from '../hooks/usersHooks';
import { fetchProducts } from '../http/methods';

export const ProductsContext = React.createContext({});

export default function ProductsCProvider({ children }) {
    const [userProducts, setUserProducts ] = useState([]);
    const [shouldFetchProducts, setShouldFetchProducts] = useState(false);
    const [user] = useUser();

    const getProducts = async (id) => {
        const products = await fetchProducts(id);
        setUserProducts(products);
    }

    useEffect(() => {
        if (user.id) {
            getProducts(user.id);
        } else {
            setUserProducts([]);
        }
        setShouldFetchProducts(false);
    }, [user.id, shouldFetchProducts])

    return (
		<ProductsContext.Provider
			value={
				{
                    userProducts,
                    setShouldFetchProducts
				}
			}
		>
			{children}
		</ProductsContext.Provider>
	);
};