import { Header } from '../../layouts/header/Header'
import { MainPanel } from '../../layouts/main/mainProducts/MainPanel'
import { Footer } from '../../layouts/footer/Footer'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Panel () {
    return (
        <article className="container">
            <Header parameters={direction}>Sistemas de control</Header>
            <div className='container__scroll'>
                <MainPanel/>
                <Footer/>
            </div>
        </article>
    )
}

export default Panel
