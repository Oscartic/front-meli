import { useState } from 'react';
import styles from '../../styles/Search.module.scss';
import MeliLogo from '../../public/meli.png';
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SearchForm = () => {

    const [search, setSearch] = useState('');
    const router = useRouter(); 



    const sendSearch = (e) => {
        e.preventDefault();
        router.push(`/items?query=${search}`);
    }

    return (
        <div className={styles.search_container}>
            <Image src={MeliLogo} className={styles.logo}/>
            <form onSubmit={(e) => sendSearch(e)} className={styles.search_form}>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar productos, marcas y más...'/>
                <button><BsSearch /></button>
            </form>
        </div>
    );
}
 
export default SearchForm;