import { Link } from 'react-router-dom'

function NotFoundPage () {
    return (
        <>
            <h1>Error 404 Página no encontrada</h1>
            <Link to={'/'}><button>Home</button></Link>
        </>
    )
}

export default NotFoundPage
