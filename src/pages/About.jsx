import { Header } from '../components/Header'

const direction = {
    src: 'fondo_acerca',
    alt: 'Pulidora'
}

function About () {
    return (
        <>
            <Header parameters={direction}>Acerca de nosotros</Header>
        </>
    )
}

export default About
