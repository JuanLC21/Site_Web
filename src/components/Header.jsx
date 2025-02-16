import { Menu } from './Menu'
import './Header.css'

export function Header () {
    return (
        <header className='header'>
            <div className='header__covert'>
                <nav className="header__naver">
                    <img className='header__logo' src='./logo_header.avif' alt='Desarrollo de ingeniería'></img>
                    <Menu/>
                </nav>
                <h1 className='header__title'>Desarrollo De Ingeniería</h1>
            </div>
        </header>
    )
}
