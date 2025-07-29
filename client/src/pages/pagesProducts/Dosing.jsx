import { Header } from '../../layouts/header/Header'
import { MainDosing } from '../../layouts/main/mainProducts/MainDosing'
import { Footer } from '../../layouts/footer/Footer'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.js'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Dosing () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <article className="container">
            <Header parameters={direction}>Máquina dosificadora</Header>
            <MainDosing/>
            <Footer observed={isObserved} reference={refElement}/>
        </article>
    )
}

export default Dosing
