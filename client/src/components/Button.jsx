/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Button.css'

export function Button ({ children, direction }) {
    return (
        <button className='button'>
            <Link to={direction} className='button__link'>{children}</Link>
        </button>
    )
}
