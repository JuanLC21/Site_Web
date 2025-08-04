import { Whatsapp } from './Icon'
import './Widget.css'

export function Widget () {
    const linkWhatsapp = 'https://wa.me/573224492660'
    return (
        <div className='widget'>
            <label className='widget__label' htmlFor='whatsapp'>Escríbenos</label>
            <a href={linkWhatsapp} target="_blank" rel="noreferrer">
                <button className='widget__button' id='whatsapp'><Whatsapp/></button>
            </a>
        </div>
    )
}
