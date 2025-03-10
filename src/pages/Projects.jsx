import { Header } from '../components/Header'
import { MainProjects } from '../components/MainProjects'
import { Footer } from '../components/Footer'

const direction = {
    src: 'fondo_proyecto',
    alt: 'Minas'
}

function Projects () {
    return (

        <div className="container">
            <Header parameters={direction}>Proyectos</Header>
            <div className='container__scroll'>
                <MainProjects/>
                <Footer/>
            </div>
        </div>

    )
}

export default Projects
