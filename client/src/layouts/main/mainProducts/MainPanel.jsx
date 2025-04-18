import { Section } from '../../../components/Section'
import { Lightbox } from '../../../components/Lightbox'
import { Video } from '../../../components/Video'
import video04 from '../../../assets/videos/Tableros.mp4'
import panel from '../../../assets/images/Tableros.jpg'
import '../../../styles/main.css'

export function MainPanel () {
    return (
        <main className='main'>
            <Section title={'Sistemas de control'} list={false}>
                Ingeniería, diseño, montaje y fabricación de paneles de control para máquinas o procesos, utilizando modernos equipos de automatización y la adición de software especializado de control y adquisición de datos.
            </Section>
            <Lightbox urlImage={panel} altImage={'Tableros eléctricos'}></Lightbox>
            <Section title={'Características'} list={true}>
                <li>Gabinete eléctrico, según necesidad del trabajo a realizar de la marca Rittal.</li>
                <li>Variadores de velocidad marca Rockwell, Siemens, según la elección del cliente.</li>
                <li>Arrancadores suaves de estado solido marca Rockwell, o de Bypass marca Siemens.</li>
                <li>Cableado del gabinete según la norma NEC.</li>
            </Section>
            <Video url={video04} control={false}/>
        </main>
    )
}
