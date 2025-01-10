import './Main.css'
export function Main () {
    return (
        <main className='main'>
            <article className="main__section">
                <h2 className='main__subtitle'>Nuestros procesos</h2>
                <p className='main__text'>Nuestra especialidad es diseño y montaje de soluciones de automatización y control industrial y productos terminados (maquinas), integrando a los procesos productivos, equipos para el control, con alta tecnología y software especializado de supervisión, operación y adquisición de información.</p>
            </article>
            <article className='main__section main__section--mod'>
                <video width="100%" height="159" src="../../images/Videoddi.mp4" autoPlay muted loop></video>
            </article>
            <article className="main__section">
                <h2 className='main__subtitle'>Tecnología e innovación</h2>
                <p className='main__text'>Somos una compañía que ofrece soluciones de ingeniería, especialmente en el área de automatización y control.</p>
            </article>
            <article className='main__section main__section--modimg'>
                <img src="../../images/image1.webp" alt="" className="main__images" />
                <img src="../../images/image2.webp" alt="" className="main__images" />
                <img src="../../images/image3.webp" alt="" className="main__images" />
                <img src="../../images/image4.webp" alt="" className="main__images" />
            </article>
            <article className="main__section">
                <h2 className='main__subtitle'>Razones para elegirnos</h2>
                <ul>
                    <li>Nuestra calidad ha llevado nuestros productos a más de 14 países.</li>
                    <li>Cuentas con soporte de nuestro equipo de ingenieros y técnicos.</li>
                    <li>Trabajamos con Allen-Bradley®, marca líder del mercado por su excelencia, asegurando calidad en nuestros productos y procesos.</li>
                    <li>Contamos con más de 30 años de experiencia.</li>
                    <li>Contamos con certificación Marca País.</li>
                </ul>
            </article>
        </main>
    )
}
