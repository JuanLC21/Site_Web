import { Header } from '../layouts/header/Header'
import { MainContact } from '../layouts/main/MainContact'
import { Footer } from '../layouts/footer/Footer'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js'

const direction = {
    src: 'fondo_contacto',
    alt: 'Red Comunicación'
}

function Contact () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <div className='container'>
            <Header parameters={direction}>Contáctanos</Header>
            <MainContact/>
            <Footer observed={isObserved} reference={refElement}/>
        </div>
    )
}

export default Contact
