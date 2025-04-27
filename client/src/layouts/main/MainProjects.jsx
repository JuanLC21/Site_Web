import { Section } from '../../components/Section.jsx'
import { Video } from '../../components/Video.jsx'
import { Lightbox } from '../../components/Lightbox.jsx'
import * as images from '../../assets/images/dataImagesB.js'
import video01 from '../../assets/videos/Shredder.mp4'
import video02 from '../../assets/videos/Process.mp4'
import '../../styles/main.css'

const projects = Object.values(images)

export function MainProjects () {
    return (
        <main className="main">
            <Section title={'Ecogreen Equipment China'} list={false}>
                Sistema de control para Ecogreen de planta recicladora de llantas en china.
            </Section>
            <Video url={video01} control={true}/>
            <Lightbox urlImage={projects[0]} altImage={'Pantalla'}/>
            <Lightbox urlImage={projects[1]} altImage={'Tableros de control'}/>

            <Section title={'PQP Bogotá'} list={false}>
                Automatización de sistema de control para la planta PQP Bogotá.
            </Section>
            <Video url={video02} control={true}/>
            <Lightbox urlImage={projects[2]} altImage={'Monitores planta de sulfunación'}/>
            <Lightbox urlImage={projects[3]} altImage={'Planta de sulfunación'}/>

            <Section title={'PQP Barranquilla'} list={false}>
                Automatización de planta de acido sulfurico para PQP Barranquilla.
            </Section>
            <Lightbox urlImage={projects[4]} altImage={'Planta acido sulfurico'}/>

            <Section title={'Ecogreen Equipment California'} list={false}>
                Montaje eléctrico de planta recicladora de llantas en california.
            </Section>
            <Lightbox urlImage={projects[5]} altImage={'Planta instalación canastillas'}/>
            <Lightbox urlImage={projects[6]} altImage={'Planta instalación canastillas'}/>
            <Lightbox urlImage={projects[7]} altImage={'Planta máquina'}/>
            <Lightbox urlImage={projects[8]} altImage={'Planta instalación canastillas'}/>
            <Lightbox urlImage={projects[9]} altImage={'Planta recicladora de llantas'}/>
        </main>
    )
}
