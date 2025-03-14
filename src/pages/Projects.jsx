import { Header } from '../layouts/header/Header'
import { MainProjects } from '../layouts/main/MainProjects'
import { Footer } from '../layouts/footer/Footer'

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
