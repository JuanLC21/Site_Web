/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Close } from './Icon'
import './Lightbox.css'

export function Lightbox ({ urlImage, altImage, styleMod }) {
    const [openImg, setOpenImg] = useState('lightbox__box--close')
const appearance = styleMod || ''
    function handleOpenImg () {
        setOpenImg(openImg === 'lightbox__box--close' ? '' : 'lightbox__box--close')
    }
    return (
        <section className={`lightbox ${appearance}`}>
            <img className='lightbox__image' src={urlImage} alt={altImage} onClick={handleOpenImg}/>
            <div className={`lightbox__box ${openImg}`}>
                <div className="lightbox__container lightbox__container--button">
                    <button className='lightbox__close' onClick={handleOpenImg}><Close/></button>
                </div>
                <div className="lightbox__container">
                    <img className='lightbox__image-box' src={urlImage} alt={altImage}/>
                </div>
                <div className="lightbox__container"></div>
            </div>
        </section>
    )
}
