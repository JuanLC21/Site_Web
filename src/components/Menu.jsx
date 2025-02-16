import { useReducer } from 'react'
import './Menu.css'

const initialState = {
    firstDiv: 'menu__default',
    secondDiv: 'menu__default',
    thirdDiv: 'menu__default',
    showMenu: 'menu__content--hidden'
}

function reducer (state, action) {
    // reducer(state, {type, payload}) --> desestructuración del 'action'
    switch (action.type) {
    case 'rotate+45':
        return state.firstDiv === 'menu__default' ? { ...state, firstDiv: action.payload } : { ...state, firstDiv: 'menu__default' }

    case 'traslate100%':
        return state.secondDiv === 'menu__default' ? { ...state, secondDiv: action.payload } : { ...state, secondDiv: 'menu__default' }

    case 'rotate-45':
        return state.thirdDiv === 'menu__default' ? { ...state, thirdDiv: action.payload } : { ...state, thirdDiv: 'menu__default' }

    case 'show':
        return state.showMenu === 'menu__content--hidden' ? { ...state, showMenu: action.payload } : { ...state, showMenu: 'menu__content--hidden' }

    default:
        return state
    }
}

export function Menu () {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [{firstDiv, secondDiv, thirdDiv} , dispatch] = useReducer(reducer, initialState) --> desestructuración del 'state'
    function handleBtnIcon () {
        dispatch({ type: 'rotate+45', payload: 'menu__transform1' })
        dispatch({ type: 'traslate100%', payload: 'menu__transform2' })
        dispatch({ type: 'rotate-45', payload: 'menu__transform3' })
        dispatch({ type: 'show', payload: '' })
    }

    return (
        <nav className="menu">
            <button className='menu__btn' onClick={handleBtnIcon}>
                <div className={state.firstDiv}></div>
                <div className={state.secondDiv}></div>
                <div className={state.thirdDiv}></div>
            </button>
            <ul className={`menu__content ${state.showMenu}`}>
                <li className='menu__li'></li>
                <li className='menu__li'><button>Inicio</button></li>
                <li className='menu__li'><button>Productos</button></li>
                <li className='menu__li'><button>Proyectos</button></li>
                <li className='menu__li'><button>Sobre nosotros</button></li>
                <li className='menu__li'><button>Contactenos</button></li>
            </ul>
        </nav>
    )
}
