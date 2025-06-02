import { Header } from '../layouts/header/Header'
import { MainContact } from '../layouts/main/MainContact'
import { Footer } from '../layouts/footer/Footer'

const direction = {
    src: 'fondo_contacto',
    alt: 'Red Comunicación'
}

function Contact () {
    return (
        <div className="container">
            <Header parameters={direction}>Contáctanos</Header>
            <div className='container__scroll'>
                <MainContact/>
                <Footer/>
            </div>
        </div>
    )
}

export default Contact
