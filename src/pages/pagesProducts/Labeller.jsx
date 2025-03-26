import { Header } from '../../layouts/header/Header'
import { MainLabeller } from '../../layouts/main/MainLabeller'
import { Footer } from '../../layouts/footer/Footer'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Labeller () {
    return (
        <article className="container">
            <Header parameters={direction}>Máquina etiquetadora</Header>
            <div className='container__scroll'>
                <MainLabeller/>
                <Footer/>
            </div>
        </article>
    )
}

export default Labeller
