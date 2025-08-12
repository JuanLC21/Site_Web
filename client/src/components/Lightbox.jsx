/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Close } from './Icon'
import './Lightbox.css'

export function Lightbox ({ urlImage, altImage, styleMod }) {
    const [openImg, setOpenImg] = useState(false)

    function toggleImg (stateValue) { setOpenImg(stateValue) }

    return (
        <section className={`lightbox ${styleMod || ''}`}>
            <img className='lightbox__image' src={urlImage} alt={altImage} onClick={() => toggleImg(true)}/>
            <div className={`lightbox__box ${openImg ? '' : 'lightbox__box--close'}`}>
                <div className="lightbox__container lightbox__container--button">
                    <button className='lightbox__close' onClick={() => toggleImg(false)}><Close/></button>
                </div>
                <div className="lightbox__container">
                    <img className='lightbox__image-box' src={urlImage} alt={altImage}/>
                </div>
                <div className="lightbox__container"></div>
            </div>
        </section>
    )
}
