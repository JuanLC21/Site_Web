import { Section } from '../../../components/Section'
import { Slider } from '../../../components/Slider'
import * as product from '../../../assets/images/dataImagesD'
import './MainFermenter.css'

export function MainFermenter () {
    return (
        <main className='main-fermenter'>
            <Section title={'Cámara Fermentación'} list={false} styleMod={'section-fermenter-0'}>
                Nuestra cámara de fermentación permite realizar el proceso de fermentación de la masa, al tener control total del nivel de temperatura y humedad en la cámara, ademas, cuenta con un panel de control y una pantalla de Rockwell Automation que permite visualizar todos los datos en tiempo real.
            </Section>
            <Slider images={product} styleMod={'section-fermenter-1'}/>
            <div className={'section-fermenter-2'}></div>
            <Section title={'Características'} list={true} styleMod={'section-fermenter-3'} textCenter={true}>
                <li>Tiene una HMI, la cual permite una interacción muy sencilla con la producción.</li>
                <li>Tiene una capa de aislamiento de 7.5cm que permite independizar la temperatura externa, de la interna.</li>
                <li>Tiene un sistema de enfriamiento que permite tener almacenamiento de producto durante la noche sin que continue la fermentación.</li>
                <li>Gracias a su sistema de control, puede almacenar en una USB o en un PC según el deseo del cliente las curvas de humedad y temperatura por lotes de la produccion.</li>
            </Section>
        </main>
    )
}
