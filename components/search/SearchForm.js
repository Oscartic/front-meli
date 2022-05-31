import { useState } from 'react';
import styles from '../../styles/Search.module.scss';
import MeliLogo from '../../public/meli.png';
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SearchForm = () => {

    const [search, setSearch] = useState('');
    const router = useRouter(); 



    const sendSearch = (e) => {
        e.preventDefault();
        const isId = search.substring(0,3);
        if(isId === 'MLA') {
            router.push(`/items/${search}`);
        } else {
            router.push(`/items?query=${search}`);
        }

        setSearch('');
        
    }

    return (
        <div className={styles.search_container}>
            <Link href="/">
                <Image src={MeliLogo} className={styles.logo}/>
            </Link>
            <form onSubmit={(e) => sendSearch(e)} className={styles.search_form}>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar productos, marcas y más...'/>
                <button><BsSearch /></button>
            </form>
        </div>
    );
}
 
export default SearchForm;