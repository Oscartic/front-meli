import { useRouter } from 'next/router';
import useProducts from '../../hooks/useProducts';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../ui/Spinner';
import styles from '../../styles/Items.module.scss';
import ItemList from './ItemList';
import AlertError from '../ui/AlertError';
import Breadcrumb from '../ui/Breadcrumb';

const ItemsList = () => {

    const router = useRouter();
    const {
        isFetch, 
        error, 
        categories,
        products,
        search,
        setCategories,
        setProducts,
        setSearch,
        setIsFetch,
        setError,
    } = useProducts();

    
    useEffect(() => {
        const retrieveProducts = async (search) => {
            setIsFetch();
            try {
                const url = `${process.env.API_MELI_URL}/items?search=${search}`;
                const { data } = await axios.get(url);
                setCategories(data.categories);
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
            <h1 className={styles.search_title}>{search}</h1>
            <Breadcrumb categories={categories} />
            <section className={styles.list_container}>
                { 
                    products.map(product => <ItemList key={product.id} id={product.id} picture={product.picture} title={product.title} price={product.price} condition={product.condition} free_shipping={product.free_shipping} />)
                }
            </section>
        </>
    );
}

export default ItemsList;