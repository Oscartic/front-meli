import { useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import styles from '../../styles/Search.module.scss';
import MeliLogo from '../../public/meli.png';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import Image from 'next/image';
import Spinner from '../ui/Spinner';

const SearchForm = () => {

    const {
        isFetch, 
        error, 
        products,
        search,
        setProducts,
        setSearch,
        setFetch,
        setError,
    } = useProducts();

    const sendSearch = async (e) => {
        e.preventDefault();
        setFetch(true);
        try {
            const url = `http://localhost:3001/api/v1/items?search=gel`;
            const { data } = await axios.get(url);
            setProducts(data.items);
        } catch (error) {
            console.log(error);
            setFetch(false);
        }
    }

    return (
        <>
            {
                isFetch && 
                    <Spinner />
            }
                <div className={styles.search_container}>
                    <Image src={MeliLogo} className={styles.logo}/>
                    <form onSubmit={(e) => sendSearch(e)} className={styles.search_form}>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar productos, marcas y más...'/>
                        <button><BsSearch /></button>
                    </form>
                </div>
                
        </>
    );
}
 
export default SearchForm;