import { Slider } from '../../components/Slider'
import { Section } from '../../components/Section'
import { Video } from '../../components/Video'
import * as products from '../../assets/images/dataImagesA.js'
import video00 from '../../assets/videos/Videoddi.mp4'
import '../../styles/main.css'

export function MainHome () {
    return (
        <main className='main'>
            <Section title={'Nuestros procesos'} list={ false }>
                Nuestra especialidad es diseño y montaje de soluciones de automatización y control industrial, integrando a los procesos productivos equipos para el control, con alta tecnología en software especializado de supervisión y operación.
            </Section>
            <Video url={video00} control={false}/>
            <Section title={'Tecnología e innovación'} list={ false }>
                Somos una compañía que ofrece soluciones de ingeniería, especialmente en el área de automatización y control.
            </Section>
            <Slider images={products}/>
            <Section title={'Razones para elegirnos'} list={ true }>
                <li>Trabajamos con Allen-Bradley®, marca líder del mercado por su excelencia.</li>
                <li>Nuestra calidad ha llevado nuestros productos a más de 14 países.</li>
                <li>Cuentas con soporte de nuestro equipo de ingenieros y técnicos.</li>
                <li>Contamos con más de 30 años de experiencia.</li>
                <li>Contamos con certificación Marca País.</li>
            </Section>
        </main>
    )
}
