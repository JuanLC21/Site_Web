/* eslint-disable react/prop-types */
import { Menu } from './Menu'
import './Header.css'

export function Header ({ parameters, children }) {
    return (
        <header className='header'>
            <img className='header__background' src={`${parameters.src}.jpg`} alt={parameters.alt} />
            <div className='header__covert'>
                <nav className="header__naver">
                    <img className='header__logo' src='./logo_header.avif' alt='Desarrollo de ingeniería'></img>
                    <Menu/>
                </nav>
                <h1 className='header__title'>{children}</h1>
            </div>
        </header>
    )
}
