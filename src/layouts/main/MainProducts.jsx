import { Link } from 'react-router-dom'
import { Section } from '../../components/Section'
// import { Lightbox } from '../../components/Lightbox'
import './MainProducts.css'

export function MainProducts () {
    return (
        <main className='main-products'>
            <Section title={'Máquinas Etiquetadoras'}>
                Equipos de etiquetado, para envases cilíndricos, ovalados, o caras planas, para  aplicación de etiquetas en la parte superior de envases  y cajas, o bien, equipos multi-cabezales sobre diseño para procesos especiales.
            </Section>
            <Link>Conoce Aquí</Link>
            <Section title={'Sistemas De Control'}>
                En DDI diseñamos y fabricamos tableros de control a medida de su necesidad con los mejores proveedores y los mas altos estandares de calidad, permitiéndole automatizar los procesos de su compañia.
            </Section>
            <Section title={'Máquina Llenadora'}>
                Diseñamos y fabricamos maquinas llenadoras de diferentes materias primas como cereales, brindando calidad en materiales y eficiencia en procesos.
            </Section>
            <Section title={'Cámara De Fermentación'}>
                Nuestra cámara de fermentación permite realizar el proceso de fermentación de la masa, al tener control total del nivel de temperatura y humedad en la cámara.
            </Section>
        </main>
    )
}
