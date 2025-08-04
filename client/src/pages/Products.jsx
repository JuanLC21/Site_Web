import { Header } from '../layouts/header/Header'
import { MainProducts } from '../layouts/main/MainProducts'
import { Widget } from '../components/Widget.jsx'
import { Footer } from '../layouts/footer/Footer'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const direction = {
    src: 'fondo_producto',
    alt: 'Impresora 3D'
}

function Products () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <section className='container'>
            <Header parameters={direction}>Productos</Header>
            <MainProducts/>
            <Widget/>
            <Footer observed={isObserved} reference={refElement}/>
        </section>
    )
}

export default Products
