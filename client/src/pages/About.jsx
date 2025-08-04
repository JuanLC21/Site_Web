import { Header } from '../layouts/header/Header'
import { MainAbout } from '../layouts/main/MainAbout'
import { Widget } from '../components/Widget.jsx'
import { Footer } from '../layouts/footer/Footer'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js'

const direction = {
    src: 'fondo_acerca',
    alt: 'Pulidora'
}

function About () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <section className='container'>
            <Header parameters={direction}>Sobre nosotros</Header>
            <MainAbout/>
            <Widget/>
            <Footer observed={isObserved} reference={refElement}/>
        </section>
    )
}

export default About
