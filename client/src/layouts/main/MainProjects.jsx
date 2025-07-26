import { Section } from '../../components/Section.jsx'
import { Video } from '../../components/Video.jsx'
import { Lightbox } from '../../components/Lightbox.jsx'
import { Slider } from '../../components/Slider.jsx'
import * as images from '../../assets/images/dataImagesB.js'
import video01 from '../../assets/videos/Shredder.mp4'
import video02 from '../../assets/videos/Process.mp4'
import './MainProjects.css'

const projects = Object.values(images)
const imgCalifornia = { img0: images.image05, img1: images.image06, img2: images.image07, img3: images.image08, img4: images.image09 }
export function MainProjects () {
    // const imgChina = {img00: images.image00, img01: images.image01}
    return (
        <main className="main-projects">
            <Section title={'Ecogreen Equipment China'} list={false} styleMod={'section-projects-0'} textCenter={true}>
                Sistema de control para Ecogreen de planta recicladora de llantas en china.
            </Section>
            <Video url={video01} control={true} styleMod={'section-projects-1'}/>
            <Slider images={{ img00: images.image00, img01: images.image01 }} styleMod={'section-projects-2'}/>
            {/* <Lightbox urlImage={projects[0]} altImage={'Pantalla'} styleMod={'section-projects-2'}/> */}
            {/* <Lightbox urlImage={projects[1]} altImage={'Tableros de control'} styleMod={'section-projects-3'}/> */}

            <Section title={'PQP Bogotá'} list={false} styleMod={'section-projects-3'} textCenter={true}>
                Automatización de sistema de control para la planta PQP Bogotá.
            </Section>
            <Video url={video02} control={true} styleMod={'section-projects-4'}/>
            <Slider images={{ img00: images.image02, img01: images.image03 }} styleMod={'section-projects-5'}/>
            {/* <Lightbox urlImage={projects[2]} altImage={'Monitores planta de sulfunación'} styleMod={'section-projects-6'}/>
            <Lightbox urlImage={projects[3]} altImage={'Planta de sulfunación'} styleMod={'section-projects-7'}/> */}

            <Section title={'PQP Barranquilla'} list={false} styleMod={'section-projects-6'} textCenter={true}>
                Automatización de planta de acido sulfurico para PQP Barranquilla.
            </Section>
            <Lightbox urlImage={projects[4]} altImage={'Planta acido sulfurico'} styleMod={'section-projects-7'}/>

            <Section title={'Ecogreen Equipment California'} list={false} styleMod={'section-projects-8'} textCenter={true}>
                Montaje eléctrico de planta recicladora de llantas en california.
            </Section>
            <Slider images={imgCalifornia} styleMod={'section-projects-9'}/>
            {/* <Lightbox urlImage={projects[5]} altImage={'Planta instalación canastillas'} styleMod={'section-projects-11'}/>
            <Lightbox urlImage={projects[6]} altImage={'Planta instalación canastillas'} styleMod={'section-projects-12'}/>
            <Lightbox urlImage={projects[7]} altImage={'Planta máquina'} styleMod={'section-projects-13'}/>
            <Lightbox urlImage={projects[8]} altImage={'Planta instalación canastillas'} styleMod={'section-projects-14'}/>
            <Lightbox urlImage={projects[9]} altImage={'Planta recicladora de llantas'} styleMod={'section-projects-15'}/> */}
        </main>
    )
}
