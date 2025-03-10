import { Section } from './Section'
import { Lightbox } from './Lightbox'
import * as images from '../assets/images/dataImages.js'
import video01 from '../assets/Shredder.mp4'
import video02 from '../assets/Process.mp4'
import './MainProjects.css'

const projects = Object.values(images)

export function MainProjects () {
    return (
        <main className="main-projects">
            <Section title={'Ecogreen Equipment China'} list={false}>
                Sistema de control para Ecogreen de planta recicladora de llantas en china.
            </Section>
            <section className='main-projects__video'>
                <video width="100%" height="100%" src={video01} controls></video>
            </section>
            <Lightbox urlImage={projects[4]} altImage={'Pantalla'}/>
            <Lightbox urlImage={projects[5]} altImage={'Tableros de control'}/>

            <Section title={'PQP Bogotá'} list={false}>
                Automatización de sistema de control para la planta PQP Bogotá.
            </Section>
            <section className='main-projects__video'>
                <video width="100%" height="100%" src={video02} controls></video>
            </section>
            <Lightbox urlImage={projects[6]} altImage={'Monitores planta de sulfunación'}/>
            <Lightbox urlImage={projects[7]} altImage={'Planta de sulfunación'}/>

            <Section title={'PQP Barranquilla'} list={false}>
                Automatización de planta de acido sulfurico para PQP Barranquilla.
            </Section>
            <Lightbox urlImage={projects[8]} altImage={'Planta acido sulfurico'}/>

            <Section title={'Ecogreen Equipment California'} list={false}>
                Montaje eléctrico de planta recicladora de llantas en california.
            </Section>
            <Lightbox urlImage={projects[9]} altImage={'Planta instalación canastillas'}/>
            <Lightbox urlImage={projects[10]} altImage={'Planta instalación canastillas'}/>
            <Lightbox urlImage={projects[11]} altImage={'Planta máquina'}/>
            <Lightbox urlImage={projects[12]} altImage={'Planta instalación canastillas'}/>
            <Lightbox urlImage={projects[13]} altImage={'Planta recicladora de llantas'}/>
        </main>
    )
}
