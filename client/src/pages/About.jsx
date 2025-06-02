import { Header } from '../layouts/header/Header'
import { MainAbout } from '../layouts/main/MainAbout'
import { Footer } from '../layouts/footer/Footer'

const direction = {
    src: 'fondo_acerca',
    alt: 'Pulidora'
}

function About () {
    return (
        <section className='container'>
            <Header parameters={direction}>Sobre nosotros</Header>
            <div className='container__scroll'>
                <MainAbout/>
                <Footer/>
            </div>
        </section>
    )
}

export default About
