import styles from '../styles/Search.module.scss';
import MeliLogo from '../public/meli.png';
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';

const SearchForm = () => {

    const sendSearch = (e) => {
        e.preventDefault();
        console.log('Hola')
    }

    return (
        <div className={styles.search_container}>
            <Image src={MeliLogo} className={styles.logo}/>
            <form onSubmit={(e) => sendSearch(e)} className={styles.search_form}>
                <input placeholder='Buscar productos, marcas y más...'/>
                <button><BsSearch /></button>
            </form>
        </div>
    );
}
 
export default SearchForm;