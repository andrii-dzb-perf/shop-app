import React, { useState, useEffect } from 'react';
import { useUser } from '../hooks/usersHooks';
import getUserProductsById from '../http/requests/getUserProductsById';

export const ProductsContext = React.createContext({});

export default function ProductsCProvider({ children }) {
    const [userProducts, setUserProducts ] = useState([]);
    const [user] = useUser();

    const getProducts = async (id) => {
        const products = await getUserProductsById(id);
        setUserProducts(products);
    }

    useEffect(() => {
        if (user.id) {
            getProducts(user.id);
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