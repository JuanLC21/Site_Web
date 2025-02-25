import { Header } from '../components/Header'
const direction = {
    src: 'fondo_producto',
    alt: 'Impresora 3D'
}
function Products () {
    return (
        <>
            <Header parameters={direction}>Productos</Header>
        </>
    )
}

export default Products
