import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BreadCrumb from '../ui/Breadcrumb';
import styles from '../../styles/item.module.scss';
import axios from 'axios';
import useProduct from '../../hooks/useProduct';
import Spinner from '../ui/Spinner';
import AlertError from '../ui/AlertError';

const Item = () => {
    
    const router = useRouter();
    const { isFetch, error, product, setProduct, setIsFetch, setError } = useProduct();

    useEffect(() => {
        const retrieveProduct = async (idItem) => {
            setIsFetch();
            try {
                const url = `http://localhost:3001/api/v1/items/${idItem}`;
                const { data } = await axios.get(url);
                console.log(data)
                setProduct(data);
            } catch (error) {
                console.log('[❌][retrieveProduct]', error);
                return setError(error.message);
            }
        }
        if(!router.isReady) return;

        const { idItem } = router.query;
        retrieveProduct(idItem);

    
    }, [router.query])
    
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
            {
                Object.keys(product).length !== 0  && 
                    <>
                        <BreadCrumb categories={product.categories}/>
                        <section className={styles.item_container}>
                            <div className={styles.item_body}>
                                <img src={product.picture} />
                                <h2>Descripción del producto</h2>
                                <p>{product.description}</p>
                            </div>
                            <div className={styles.item_title}>
                                <div className={styles.condition_sold}>
                                    <span>{product.condition == 'new' ? 'Nuevo' : 'Usado'}</span>
                                    <span>{product.sold_quantity} vendidos</span>
                                </div>
                                <h1 className={styles.title}>{product.title}</h1>
                                <span className={styles.amount}>$ {product.price?.amount.toLocaleString("es-CL")}</span>
                            </div>
                        </section>
                    </>
            }
        </>
    );
}

export default Item;