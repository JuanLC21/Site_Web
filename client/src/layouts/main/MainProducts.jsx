import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Lightbox } from '../../components/Lightbox'
import imageProduct00 from '../../assets/images/Etiquetadora.jpg'
import imageProduct01 from '../../assets/images/Tableros.jpg'
import imageProduct02 from '../../assets/images/Llenadora1.jpg'
import imageProduct03 from '../../assets/images/Fermentadora1.jpg'
import './MainProducts.css'

export function MainProducts () {
    return (
        <main className='main-products'>
            <Section title={'Máquinas etiquetadoras'} styleMod={'section-products-0'}>
                Equipos de etiquetado, para envases cilíndricos, ovalados, o caras planas, para  aplicación de etiquetas en la parte superior de envases  y cajas, o bien, equipos multi-cabezales sobre diseño para procesos especiales.
                <Button direction={'./labeller'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct00} altImage={'Máquina etiquetadora'} styleMod={'section-products-1'}/>

            <Section title={'Sistemas de control'} styleMod={'section-products-2'}>
                En DDI diseñamos y fabricamos tableros de control a medida de su necesidad con los mejores proveedores y los mas altos estandares de calidad, permitiéndole automatizar los procesos de su compañia.
                <Button direction={'./panel'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct01} altImage={'Tableros de control'} styleMod={'section-products-3'}/>

            <Section title={'Máquina Llenadora'} styleMod={'section-products-4'}>
                Diseñamos y fabricamos maquinas llenadoras de diferentes materias primas como cereales, brindando calidad en materiales y eficiencia en procesos.
                <Button direction={'./dosing'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct02} altImage={'Máquina dosificadora'} styleMod={'section-products-5'}/>

            <Section title={'Cámara de fermentación'} styleMod={'section-products-6'}>
                Nuestra cámara de fermentación permite realizar el proceso de fermentación de la masa, al tener control total del nivel de temperatura y humedad en la cámara.
                <Button direction={'./fermentation'}>Conoce más aquí</Button>
            </Section>
            <Lightbox urlImage={imageProduct03} altImage={'Cámara de fermentación'} styleMod={'section-products-7'}/>
        </main>
    )
}
