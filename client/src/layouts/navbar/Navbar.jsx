import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const initialState = {
    firstDiv: 'navbar__default',
    secondDiv: 'navbar__default',
    thirdDiv: 'navbar__default',
    showNavbar: 'navbar__content--hidden'
}

function reducer (state, action) {
    // reducer(state, {type, payload}) --> desestructuración del 'action'
    switch (action.type) {
    case 'rotate+45':
        return state.firstDiv === 'navbar__default' ? { ...state, firstDiv: 'navbar__transform1' } : { ...state, firstDiv: 'navbar__default' }

    case 'traslate100%':
        return state.secondDiv === 'navbar__default' ? { ...state, secondDiv: 'navbar__transform2' } : { ...state, secondDiv: 'navbar__default' }

    case 'rotate-45':
        return state.thirdDiv === 'navbar__default' ? { ...state, thirdDiv: 'navbar__transform3' } : { ...state, thirdDiv: 'navbar__default' }

    case 'show':
        return state.showNavbar === 'navbar__content--hidden' ? { ...state, showNavbar: '' } : { ...state, showNavbar: 'navbar__content--hidden' }

    default:
        return state
    }
}

export function Navbar () {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [{firstDiv, secondDiv, thirdDiv} , dispatch] = useReducer(reducer, initialState) --> desestructuración del 'state'
    function handleBtnIcon () {
        dispatch({ type: 'rotate+45' })
        dispatch({ type: 'traslate100%' })
        dispatch({ type: 'rotate-45' })
        dispatch({ type: 'show' })
    }

    return (
        <nav className="navbar">
            <button className='navbar__btn' onClick={handleBtnIcon}>
                <div className={state.firstDiv}></div>
                <div className={state.secondDiv}></div>
                <div className={state.thirdDiv}></div>
            </button>
            <ul className={`navbar__content ${state.showNavbar}`}>
                <li className='navbar__li'></li>
                <li className='navbar__li'>
                    <Link to={'/'} className='navbar__link-route'> Inicio</Link>
                </li>
                <li className='navbar__li'>
                    <Link to={'/products'} className='navbar__link-route'>Productos</Link>
                </li>
                <li className='navbar__li'>
                    <Link to={'/projects'} className='navbar__link-route'>Proyectos</Link>
                </li>
                <li className='navbar__li'>
                    <Link to={'/about'} className='navbar__link-route'>Sobre nosotros</Link>
                </li>
                <li className='navbar__li'>
                    <Link to={'/contact'} className='navbar__link-route'>Contáctanos</Link>
                </li>
            </ul>
        </nav>
    )
}
// Nota: El payload, no siempre es necesario. En este caso era prescindible, puesto que no hay un valor dentro del componente Navbar
//       que se necesite extraer para utilizar dentro de la función 'reducer'. En cambio en el componente Slider si era necesario el
//       payload, puesto que la prop que maneja dicho componente, no se puede utilizar fuera de este.
