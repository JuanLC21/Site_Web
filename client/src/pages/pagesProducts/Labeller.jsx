import { Header } from '../../layouts/header/Header'
import { MainLabeller } from '../../layouts/main/mainProducts/MainLabeller'
import { Footer } from '../../layouts/footer/Footer'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Labeller () {
    return (
        <article className="container">
            <Header parameters={direction}>Máquina etiquetadora</Header>
            <MainLabeller/>
            <Footer/> 
        </article>
    )
}

export default Labeller
