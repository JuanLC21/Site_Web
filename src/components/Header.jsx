import { Menu } from './Menu'
import './Header.css'

export function Header () {
    return (
        <header className='header'>
            <div className='header__covert'>
                <nav className="header__naver">
                    <img className='header__logo' src='./LOGOS DDI.avif' alt='Logo desarrollo de ingeniería'></img>
                    <div className='header__menu'><Menu/></div>
                </nav>
                <h1 className='header__title'>Desarrollo De Ingeniería</h1>
            </div>
        </header>
    )
}
