import { useRouter } from 'next/router';
import useProducts from '../../hooks/useProducts';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../ui/Spinner';
import styles from '../../styles/Items.module.scss';
import ItemList from './ItemList';
import AlertError from '../ui/AlertError';

const ItemsList = () => {

    const router = useRouter();
    const {
        isFetch, 
        error, 
        products,
        search,
        setProducts,
        setSearch,
        setIsFetch,
        setError,
    } = useProducts();

    
    useEffect(() => {
        const retrieveProducts = async (search) => {
            setIsFetch();
            try {
                const url = `http://localhost:3001/api/v1/items?search=${search}`;
                console.log(url);
                const { data } = await axios.get(url);
                console.log(data);
                setProducts(data.items);
            } catch (error) {
                console.log('[❌][retrieveProducts]', error);
                return setError(error.message);
            }
        }
        if(!router.isReady) return;
        const { query } = router.query;
        setSearch(query);
        if(search !== '') retrieveProducts(search);
    },[router.query, search]);

    console.log(products);

    return (
        <>
            {
                isFetch && 
                <Spinner />
            }
            {
                error !== '' && 
                <AlertError error={error} />
            }
            <h1>{search}</h1>
            <section className={styles.list_container}>
                { 
                    products.map(product => <ItemList id={product.id} picture={product.picture} title={product.title} price={product.price} condition={product.condition} free_shipping={product.free_shipping} />)
                }
            </section>
        </>
    );
}

export default ItemsList;