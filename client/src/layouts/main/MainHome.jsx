import { Slider } from '../../components/Slider'
import { Section } from '../../components/Section'
import { Video } from '../../components/Video'
import * as products from '../../assets/images/dataImagesA.js'
import video00 from '../../assets/videos/Videoddi.mp4'
import './MainHome.css'

export function MainHome () {
    return (
        <main className='main-home'>

            <Section title={'Oferta de valor'} styleMod={'section-0'} list={ false }>
                Queremos entregarles nuestra experiencia, de más de 28 años en diferentes sectores, ingeniería y conocimiento para entregar la mejor solución que requiere su empresa, de una manera flexible y adaptable al proceso, que impacte su productividad y rentabilidad.
            </Section>

            <section className='main-home__image-section'>
                <img src='../mapamundi.avif' alt='Mapa mundial'/>
            </section>

            <Section title={'Nuestros procesos'} styleMod={'section-1'} list={ false }>
                Nuestra especialidad es diseño y montaje de soluciones de automatización y control industrial, integrando a los procesos productivos equipos para el control, con alta tecnología en software especializado de supervisión y operación.
            </Section>

            <Video url={video00} control={false} styleMod={'section-2'}/>

            <Section title={'Tecnología e innovación'} styleMod={'section-3'} list={ false }>
                Somos una compañía que ofrece soluciones de ingeniería, especialmente en el área de automatización y control, desarrollando e integrando sistemas electromecánicos, con una elevada adición de conocimiento y aplicación de software especializado, para soluciones y productos de la industria manufacturera en general.
            </Section>

            <Slider images={products} styleMod={'section-4'}/>

            <Section title={'Razones para elegirnos'} styleMod={'section-5'} list={ true } textCenter={true}>
                <li>Trabajamos con Allen-Bradley®, marca líder del mercado por su excelencia.</li>
                <li>Nuestra calidad ha llevado nuestros productos a más de 14 países.</li>
                <li>Contamos con más de 30 años de experiencia.</li>
                <li>Contamos con certificación Marca País.</li>
            </Section>

        </main>
    )
}
