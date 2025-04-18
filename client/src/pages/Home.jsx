import { Header } from '../layouts/header/Header.jsx'
import { MainHome } from '../layouts/main/MainHome.jsx'
import { Footer } from '../layouts/footer/Footer.jsx'
import '../styles/index.css'

const direction = {
    src: 'fondo_principal',
    alt: 'Maquina Etiquetadora'
}

function Home () {
    return (
        <div className="container">
            <Header parameters={direction}>Desarrollo de ingeniería</Header>
            <div className='container__scroll'>
                <MainHome/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
