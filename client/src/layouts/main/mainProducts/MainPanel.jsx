import { Section } from '../../../components/Section'
import { Lightbox } from '../../../components/Lightbox'
import { Video } from '../../../components/Video'
import video04 from '../../../assets/videos/Tableros.mp4'
import panel from '../../../assets/images/Tableros.jpg'
import './MainPanel.css'

export function MainPanel () {
    return (
        <main className='main-panel'>
            <Section title={'Sistemas de control'} list={false} styleMod={'section-panel-0'}>
                Ingeniería, diseño, montaje y fabricación de paneles de control para máquinas o procesos, utilizando modernos equipos de automatización y la adición de software especializado de control y adquisición de datos.
            </Section>
            <Lightbox urlImage={panel} altImage={'Tableros eléctricos'} styleMod={'section-panel-1'}/>
            <Section title={'Características'} list={true} styleMod={'section-panel-2'} textCenter={true}>
                <li>Cableado del gabinete según la norma NEC.</li>
                <li>Gabinete eléctrico, según necesidad del trabajo a realizar de la marca Rittal.</li>
                <li>Variadores de velocidad marca Rockwell, Siemens, según la elección del cliente.</li>
                <li>Arrancadores suaves de estado solido marca Rockwell, o de Bypass marca Siemens.</li>
            </Section>
            <Video url={video04} control={false} styleMod={'section-panel-3'}/>
        </main>
    )
}
