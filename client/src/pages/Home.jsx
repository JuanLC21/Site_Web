import { Header } from '../layouts/header/Header.jsx'
import { MainHome } from '../layouts/main/MainHome.jsx'
import { Footer } from '../layouts/footer/Footer.jsx'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js'
import '../styles/index.css'

const direction = {
    src: 'fondo_principal',
    alt: 'Maquina Etiquetadora'
}

function Home () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <div className="container">
            <Header parameters={direction}>Desarrollo de ingeniería</Header>
            <MainHome/>
            <Footer observed={isObserved} reference={refElement}/>
        </div>
    )
}

export default Home
