import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BreadCrumb from '../ui/Breadcrumb';
import styles from '../../styles/item.module.scss';
import axios from 'axios';
import useProduct from '../../hooks/useProduct';
import Image from 'next/image';

const Item = () => {
    
    const router = useRouter();
    const { isFetch, error, product, setProduct, setIsFetch, setError } = useProduct();

    useEffect(() => {
        const retrieveProduct = async (idItem) => {

            try {
                const url = `http://localhost:3001/api/v1/items/${idItem}`;
                const { data } = await axios.get(url);
                console.log(data)
                setProduct(data);
            } catch (error) {
                console.log('[❌][retrieveProduct]', error);
                // return setError(error.message);
            }
        }
        if(!router.isReady) return;

        const { idItem } = router.query;
        retrieveProduct(idItem);

    
    }, [router.query])
    
    console.log(product)

    return (
        <>
        <BreadCrumb />
        <section className={styles.item_container}>
            <div className={styles.item_body}>
                <img src={product.picture} />
                <h2>Descripción del producto</h2>
                <p>{product.description}</p>
            </div>
            <div className={styles.item_title}>
                <div>
                    <span>{product.condition == 'new' ? 'Nuevo' : 'Usado'}</span>
                    <span>{product.sold_quantity} vendidos</span>
                </div>
                <h1>{product.title}</h1>
                <span>${product.price.amount}</span>
            </div>
        </section>
        </>
    );
}

export default Item;