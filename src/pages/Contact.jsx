import { Header } from '../layouts/header/Header'

const direction = {
    src: 'fondo_contacto',
    alt: 'Red Comunicación'
}

function Contact () {
    return (
        <>
            <Header parameters={direction}>Contactanos</Header>
        </>
    )
}

export default Contact
