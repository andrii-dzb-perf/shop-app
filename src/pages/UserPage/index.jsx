import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import { useSetUserById, useUser } from '../../hooks/usersHooks';
import { useUserProducts } from '../../hooks/productsHooks';
import useStyles from './styles';

function UserPage() {
    const classes = useStyles()
    const [user] = useUser();
    const setUserById = useSetUserById();
    const userProducts = useUserProducts();
    const params = useParams();
    
    useEffect(() => {
        setUserById(params.userId);
    }, [setUserById, params]);
    
    return (
        <div className={classes.wrapper}>
            <h2>List of products for { user.name }:</h2>
            <List className={classes.list}>
              { userProducts.map(product => (
                <ListItem key={product.id} className={classes.listItem}>
                    <div className={classes.listItemTitle}>{ product.title }</div>
                    <div className={classes.listItemDesc}>{ product.description }</div>
                </ListItem>
              ))}
            </List>
        </div>
    )
}

export default UserPage;