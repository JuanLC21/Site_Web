import { Header } from '../../layouts/header/Header'
import { MainDosing } from '../../layouts/main/mainProducts/MainDosing'
import { Footer } from '../../layouts/footer/Footer'

const direction = {
    src: '../fondo_producto',
    alt: 'Impresora 3D'
}

function Dosing () {
    return (
        <article className="container">
            <Header parameters={direction}>Máquina dosificadora</Header>
            <div className='container__scroll'>
                <MainDosing/>
                <Footer/>
            </div>
        </article>
    )
}

export default Dosing
