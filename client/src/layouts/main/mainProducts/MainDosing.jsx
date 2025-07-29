import { Section } from '../../../components/Section'
import { Slider } from '../../../components/Slider'
import { Video } from '../../../components/Video'
import * as product from '../../../assets/images/dataImagesC'
import video05 from '../../../assets/videos/Llenadora.mp4'
import './MainDosing.css'

export function MainDosing () {
    return (
        <main className='main-dosing'>
            <Section title={'Dosificadora'} list={false} styleMod={'section-dosing-0'}>
                En DDI diseñamos y fabricamos máquinas de llenado para toda la industria (farmacéutica, alimentaria, química y cosmética) de acuerdo a las necesidades que su empresa presente, fabricando maquinas semiautomáticas y maquinas completamente automáticas optimizadas a los niveles de producción de su compañía.
            </Section>
            <Slider images={product} styleMod={'section-dosing-1'}/>
            <Section title={'Características'} list={true} styleMod={'section-dosing-2'} textCenter={true}>
                <li>Mayor velocidad y agilidad en sus procesos de llenado y envasado.</li>
                <li>Fabricamos todos nuestros productos con los mejores materiales del mercado.</li>
                <li>Puede usarse para llenar productos líquidos o sólidos de acuerdo a la necesidad de su compañía.</li>
                <li>Cuenta con un excelente servicio pos venta que le ofrece asistencia y garantía ante cualquier eventualidad.</li>
            </Section>
            <Video url={video05} control={true} styleMod={'section-dosing-3'}/>
        </main>
    )
}
