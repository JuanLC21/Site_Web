import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'
import { Footer } from './components/Footer.jsx'
import './Home.css'

const direction = {
    src: 'fondo_principal',
    alt: 'Maquina Etiquetadora'
}
function Home () {
    return (
        <div className="container">
            <Header parameters={direction}>Desarrollo de ingeniería</Header>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home
