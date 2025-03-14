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
        return state.firstDiv === 'navbar__default' ? { ...state, firstDiv: action.payload } : { ...state, firstDiv: 'navbar__default' }

    case 'traslate100%':
        return state.secondDiv === 'navbar__default' ? { ...state, secondDiv: action.payload } : { ...state, secondDiv: 'navbar__default' }

    case 'rotate-45':
        return state.thirdDiv === 'navbar__default' ? { ...state, thirdDiv: action.payload } : { ...state, thirdDiv: 'navbar__default' }

    case 'show':
        return state.showNavbar === 'navbar__content--hidden' ? { ...state, showNavbar: action.payload } : { ...state, showNavbar: 'navbar__content--hidden' }

    default:
        return state
    }
}

export function Navbar () {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [{firstDiv, secondDiv, thirdDiv} , dispatch] = useReducer(reducer, initialState) --> desestructuración del 'state'
    function handleBtnIcon () {
        dispatch({ type: 'rotate+45', payload: 'navbar__transform1' })
        dispatch({ type: 'traslate100%', payload: 'navbar__transform2' })
        dispatch({ type: 'rotate-45', payload: 'navbar__transform3' })
        dispatch({ type: 'show', payload: '' })
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
                    <Link to={'/contact'} className='navbar__link-route'>Contactenos</Link>
                </li>
            </ul>
        </nav>
    )
}
