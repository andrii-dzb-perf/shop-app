import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem, Button, Input } from '@material-ui/core';
import Modal from '../../components/Modal';
import { addProduct } from '../../http/methods';
import { useSetUserById, useUser } from '../../hooks/usersHooks';
import { useUserProducts, useSetShouldFetchProducts } from '../../hooks/productsHooks';
import useStyles from './styles';

function UserPage() {
    const classes = useStyles()
    const [user] = useUser();
    const setUserById = useSetUserById();
    const userProducts = useUserProducts();
    const setShouldFetchProducts = useSetShouldFetchProducts();
    const params = useParams();
    const [productModalOpen, setProductModalOpen] = useState(false);
    const [formState, setFormState] = useState({});

    const openModal = () => setProductModalOpen(true);
    const closeModal = () => {
        setProductModalOpen(false);
        setFormState({});
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            addProduct({ ...formState, userId: user.id });
            setShouldFetchProducts(true);
            closeModal();
        } catch (error) {
            throw error;
        }
    };
    
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
            <div className={classes.addProductWrap}>
                <Button
                    variant="outlined"
                    className={classes.addProductBtn}
                    onClick={openModal}
                >
                    Add product
                </Button>
            </div>
            <Modal
                open={productModalOpen}
                onClose={closeModal}
                onSubmit={handleSubmit}
            >
                <form className={classes.modalForm}>
                    <Input
                        className={classes.input}
                        placeholder="Enter product title"
                        name="title"
                        onChange={handleChange}
                        required
                    />
                    <Input
                        className={classes.input}
                        multiline
                        placeholder="Enter product description"
                        name="description"
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        className={classes.submitButton}
                        onClick={handleSubmit}
                        variant="contained"
                        disabled={!formState.title || !formState.description}
                    >
                        Apply
                    </Button>
                </form>
            </Modal>
        </div>
    )
}

export default UserPage;