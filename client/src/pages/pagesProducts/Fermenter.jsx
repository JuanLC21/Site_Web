import { Header } from '../../layouts/header/Header'
import { MainFermenter } from '../../layouts/main/mainProducts/MainFermenter'
import { Footer } from '../../layouts/footer/Footer'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.js'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Fermenter () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <article className="container">
            <Header parameters={direction}>Cámara de fermentación</Header>
            <MainFermenter/>
            <Footer observed={isObserved} reference={refElement}/>
        </article>
    )
}

export default Fermenter
