const Breadcrumb = ({ categories }) => {
    
    console.log(categories)
    const makeBreadCrumb = () => {
        if(!categories) return "Categoría nueva"
        return categories.toString().replace(/,/g, " > ");;
    }

    return (
        <section className='breadcrumb'>
            <span> {makeBreadCrumb()} </span>
        </section>
    );
}
 
export default Breadcrumb;