import styles from '../../styles/Items.module.scss';

const ItemList = ({ id, picture, title, price, condition, free_shipping }) => {

    const launchProduct = () => {
        console.log(id)
    }

    return (
        <section className={styles.item_list_container } key={id}>
            <figure>
                <img src={picture} />
                <figcaption>
                    <a onClick={launchProduct}>{title}</a>
                    <span className={styles.price}>$ {price.amount.toLocaleString("es-CL")}</span>
                    <span className={styles.condition}>{condition == 'new' ? 'Nuevo' : 'Usado'}</span>
                    <span className={styles.free_ship}>{free_shipping && 'Envío Gratis'}</span>
                </figcaption>
            </figure>
        </section>
    );
}
 
export default ItemList;