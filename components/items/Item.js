import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BreadCrumb from '../ui/Breadcrumb';
import styles from '../../styles/Item.module.scss';
import axios from 'axios';
import useProduct from '../../hooks/useProduct';
import Spinner from '../ui/Spinner';
import AlertError from '../ui/AlertError';
import Image from 'next/image';
import NotFound from '../../public/product-not-found.jpg';

const Item = () => {
    
    const router = useRouter();
    const { id, isFetch, error, product, setId, setProduct, setIsFetch, setError } = useProduct();

    useEffect(() => {
        const retrieveProduct = async (idItem) => {
            setIsFetch();
            try {
                const url = `${process.env.API_MELI_URL}/items/${idItem}`;
                const { data } = await axios.get(url);
                console.log('desde data', data)
                setProduct(data);
            } catch (error) {
                console.log('[❌][retrieveProduct]', error);

                return setError(error.message);
            }
        }
        if(!router.isReady) return;

        const { idItem } = router.query;
        setId(idItem);
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
                error && Object.keys(product).length === 0 &&
                <section className={styles.item_not_found}>
                    <Image src={NotFound} width={200} height={200} />
                    <p><strong>¡El producto con id {id} no se ha encontrado!</strong><br />
                    Por favor verifique el valor ingresado o pruebe realizar otra busqueda.</p>
                </section>
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