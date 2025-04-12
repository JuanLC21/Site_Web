import { Header } from '../layouts/header/Header'
import { MainProducts } from '../layouts/main/MainProducts'
import { Footer } from '../layouts/footer/Footer'

const direction = {
    src: 'fondo_producto',
    alt: 'Impresora 3D'
}

function Products () {
    return (
        <section className='container'>
            <Header parameters={direction}>Productos</Header>
            <div className='container__scroll'>
                <MainProducts/>
                <Footer/>
            </div>
        </section>
    )
}

export default Products
