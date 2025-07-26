import { Section } from '../../components/Section'
import './MainAbout.css'

export function MainAbout () {
    return (
        <main className='main-about'>
            <Section title={'Reseña histórica'} list={false} styleMod={'section-about-0'}>
                Fue creada en 1996 por un grupo de personas especializadas en la automatización y mantenimiento de procesos productivos, dentro de una importante empresa antioqueña del sector alimenticio. Durante el primer año de existencia, funcionó dentro de las instalaciones de la empresa a la cual pertenecieron, siendo esta el único cliente; posteriormente y durante los dos años siguientes, las oficinas se trasladaron a la sede de la Incubadora de Empresas de Antioquia, de la cual somos uno de los primeros participantes.
            </Section>
            <Section title={'¿Quienes somos?'} list={false} styleMod={'section-about-1'}>
                DDI S.A.S. es una compañía que ofrece soluciones de ingeniería, especialmente en el área de automatización y control, desarrollando e integrando sistemas electromecánicos.
            </Section>
            <Section title={'Misión'} list={false} styleMod={'section-about-2'}>
                Ser la mejor opción para la industria, en las áreas de ingeniería aplicada a los procesos productivos, y ofrecer una solución completa para obtener la satisfacción total de nuestros clientes, eliminando procesos repetitivos que no agregan valor a los procesos y a las personas.
            </Section>
            <Section title={'Visión'} list={false} styleMod={'section-about-3'}>
                Liderar y fortalecer la ejecución de proyectos de automatización y control; avanzar con éxito en los mercados nacional e internacional, posicionar nuestras máquinas etiquetadoras para 2025, apoyados en la calidad y respaldo del servicio ofrecido.
            </Section>
            <Section title={'Políticas de calidad'} list={false} styleMod={'section-about-4'}>
                Ofrecemos oportunamente soluciones tecnológicas que cumplan los requerimientos de los clientes y contribuyan a su desarrollo competitivo; para esto nos apoyamos en la gestión y mejora continua de nuestros procesos, contamos con un potencial humano competente y orientado hacia la investigación, planeación y desarrollo de proyectos de ingeniería.
            </Section>
            <Section title={'Valores institucionales'} list={true} styleMod={'section-about-5'}>
                <li><strong>Honestidad:</strong> Es el valor de tipo ético más importante en DDI. Genera confiabilidad y equilibrio en las actividades que se desarrollan las cuales deben ser ejecutadas por personas probas.</li>
                <li><strong>Igualdad:</strong> Dar un trato igualitario con todos los empleados, clientes y ciudadanos en general.</li>
                <li><strong>Respeto:</strong> Es comprensión, tolerancia y aprecio conmigo mismo y hacia los demás, aceptando las diferencias y sobre todo valorando la dignidad humana, para una mejor convivencia, armonía y libertad, en aras del mejoramiento personal, institucional y social.</li>
                <li><strong>Transparencia:</strong> Con base en los principios de imparcialidad y publicidad propendiendo por la mayor transparencia posible en las actuaciones de las personas que conformamos la empresa, hacia el interior y hacia los clientes y sociedad.</li>
                <li><strong>Responsabilidad:</strong> Cumplir con los deberes y obligaciones en forma ágil y oportuna, con sentido de pertenencia y pertinencia, para el logro de los objetivos institucionales y del desarrollo personal.</li>
                <li><strong>Integridad:</strong> Actuar con rectitud, no solo acatando las normas constitucionales y legales, sino los principios éticos y morales que rigen nuestra sociedad, propendiendo por la construcción de una mejor empresa, mejor sociedad y mejor país.</li>
            </Section>
        </main>
    )
}
