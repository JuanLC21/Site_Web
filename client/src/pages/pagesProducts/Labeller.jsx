import { Header } from '../../layouts/header/Header'
import { MainLabeller } from '../../layouts/main/mainProducts/MainLabeller'
import { Footer } from '../../layouts/footer/Footer'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.js'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Labeller () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <article className="container">
            <Header parameters={direction}>Máquina etiquetadora</Header>
            <MainLabeller/>
            <Footer observed={isObserved} reference={refElement}/>
        </article>
    )
}

export default Labeller
