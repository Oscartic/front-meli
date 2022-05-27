const Breadcrumb = ({ categories }) => {
    
    console.log(categories)
    const makeBreadCrumb = () => {
        if(categories.length <= 0) return "Categoría nueva"
        return categories.toString().replace(/,/g, " > ");;
    }

    return (
        <section className='breadcrumb'>
            <span> {makeBreadCrumb()} </span>
        </section>
    );
}
 
export default Breadcrumb;