import { Header } from '../../layouts/header/Header'
import { MainPanel } from '../../layouts/main/mainProducts/MainPanel'
import { Footer } from '../../layouts/footer/Footer'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.js'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Panel () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <article className="container">
            <Header parameters={direction}>Sistemas de control</Header>
            <MainPanel/>
            <Footer observed={isObserved} reference={refElement}/>
        </article>
    )
}

export default Panel
