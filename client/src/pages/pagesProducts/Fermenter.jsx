import { Header } from '../../layouts/header/Header'
import { MainFermenter } from '../../layouts/main/mainProducts/MainFermenter'
import { Footer } from '../../layouts/footer/Footer'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Fermenter () {
    return (
        <article className="container">
            <Header parameters={direction}>Cámara de fermentación</Header>
            <div className='container__scroll'>
                <MainFermenter/>
                <Footer/>
            </div>
        </article>
    )
}

export default Fermenter
