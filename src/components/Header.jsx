import { Menu } from './Menu'
import './Header.css'

export function Header () {
    return (
        <header className='header'>
            <img className='header__logo' src='../images/LOGOS DDI.avif'></img>
            <h1 className='header__title'>Desarrollo De Ingeniería</h1>
            <div className='header__menu'><Menu/></div>
        </header>
    )
}
