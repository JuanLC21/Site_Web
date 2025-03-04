import { Header } from '../components/Header'
import { MainAbout } from '../components/MainAbout'
import { Footer } from '../components/Footer'
import '../index.css'

const direction = {
    src: 'fondo_acerca',
    alt: 'Pulidora'
}

function About () {
    return (
        <section className='container'>
            <Header parameters={direction}>Acerca de nosotros</Header>
            <div className='container__scroll'>
                <MainAbout/>
                <Footer/>
            </div>
        </section>
    )
}

export default About
