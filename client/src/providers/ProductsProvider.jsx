import React, { useState, useEffect } from 'react';
import { useUser } from '../hooks/usersHooks';
import { get } from '../http/api';

export const ProductsContext = React.createContext({});

export default function ProductsCProvider({ children }) {
    const [userProducts, setUserProducts ] = useState([]);
    const [user] = useUser();

    const getProducts = async (id) => {
        const products = await get(`user-products/${id}`);
        setUserProducts(products);
    }

    useEffect(() => {
        if (user.id) {
            getProducts(user.id);
        } else {
            setUserProducts([]);
        }
    }, [user.id])

    return (
		<ProductsContext.Provider
			value={
				{
                    userProducts,
				}
			}
		>
			{children}
		</ProductsContext.Provider>
	);
};