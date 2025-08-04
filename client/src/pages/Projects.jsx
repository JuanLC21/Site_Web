import { Header } from '../layouts/header/Header'
import { MainProjects } from '../layouts/main/MainProjects'
import { Widget } from '../components/Widget.jsx'
import { Footer } from '../layouts/footer/Footer'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const direction = {
    src: 'fondo_proyecto',
    alt: 'Minas'
}

function Projects () {
    const { isObserved, refElement } = useIntersectionObserver()
    return (
        <div className="container">
            <Header parameters={direction}>Proyectos</Header>
            <MainProjects/>
            <Widget/>
            <Footer observed={isObserved} reference={refElement}/>
        </div>

    )
}

export default Projects
