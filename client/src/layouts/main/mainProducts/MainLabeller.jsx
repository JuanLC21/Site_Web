import { Section } from '../../../components/Section'
import { Lightbox } from '../../../components/Lightbox'
import { Video } from '../../../components/Video'
import video03 from '../../../assets/videos/Etiquetadoras.mp4'
import labeller from '../../../assets/images/Etiquetadora.jpg'
import './MainLabeller.css'

export function MainLabeller () {
    return (
        <main className='main-labeller'>
            <Section title={'Máquina Etiquetadora'} list={false} styleMod={'section-labeller-0'}>
                Maquina etiquetadora automática servomotorizada para aplicación de etiquetas autoadhesivas para diferentes presentaciones de envases plástico y vidrio. Control por medio de display para ajustar todos los parámetros de trabajo en la máquina.
            </Section>
            <Lightbox urlImage={labeller} altImage={'Máquina etiquetadora'} styleMod={'section-labeller-1'}/>
            <Section title={'Características'} list={true} styleMod={'section-labeller-2'} textCenter={true}>
                <li>Velocidad de etiquetado según lo desee el cliente.</li>
                <li>Mando de control TouchScreen de marca Rockwell.</li>
                <li>Estructura en acero inoxidable, soportes y guías en poliamida, tornillería y tuercas en acero inoxidable.</li>
                <li>Cuenta con un excelente servicio pos venta que le ofrece asistencia y garantía ante cualquier eventualidad.</li>
            </Section>
            <Video url={video03} control={true} styleMod={'section-labeller-3'}/>
        </main>
    )
}
