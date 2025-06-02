import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Lightbox } from '../../components/Lightbox'
import imageProduct00 from '../../assets/images/Etiquetadora.jpg'
import imageProduct01 from '../../assets/images/Tableros.jpg'
import imageProduct02 from '../../assets/images/Llenadora1.jpg'
import imageProduct03 from '../../assets/images/Fermentadora1.jpg'
import '../../styles/main.css'

export function MainProducts () {
    return (
        <main className='main'>
            <Section title={'Máquinas etiquetadoras'}>
                Equipos de etiquetado, para envases cilíndricos, ovalados, o caras planas, para  aplicación de etiquetas en la parte superior de envases  y cajas, o bien, equipos multi-cabezales sobre diseño para procesos especiales.
                <Button direction={'./labeller'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct00} altImage={'Máquina etiquetadora'}/>

            <Section title={'Sistemas de control'}>
                En DDI diseñamos y fabricamos tableros de control a medida de su necesidad con los mejores proveedores y los mas altos estandares de calidad, permitiéndole automatizar los procesos de su compañia.
                <Button direction={'./panel'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct01} altImage={'Tableros de control'}/>

            <Section title={'Máquina Llenadora'}>
                Diseñamos y fabricamos maquinas llenadoras de diferentes materias primas como cereales, brindando calidad en materiales y eficiencia en procesos.
                <Button direction={'./dosing'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct02} altImage={'Máquina dosificadora'}/>

            <Section title={'Cámara de fermentación'}>
                Nuestra cámara de fermentación permite realizar el proceso de fermentación de la masa, al tener control total del nivel de temperatura y humedad en la cámara.
                <Button direction={'./fermentation'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct03} altImage={'Cámara de fermentación'}/>
        </main>
    )
}
