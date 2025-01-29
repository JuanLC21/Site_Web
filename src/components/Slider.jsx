/* eslint-disable react/prop-types */
import * as products from '../assets/images/dataImages.js'
import { useState } from 'react'
import { LeftArrow, RightArrow } from './Icon'
import './Slider.css'

const productsImages = Object.values(products)

export function Slider () {
    const [indexImage, setIndexImage] = useState(0)
    function previous () {
        const imageChanged = indexImage > 0
        imageChanged ? setIndexImage(indexImage - 1) : setIndexImage(productsImages.length - 1)
    }
    function next () {
        const imageChanged = indexImage < productsImages.length - 1
        imageChanged ? setIndexImage(indexImage + 1) : setIndexImage(0)
    }
    return (
        <section className='slider'>
            <div className='slider__images'>
                {productsImages.map((img, index) => (
                    <img key={index} className='slider__product' src={img} style={{ translate: `${-100 * indexImage}%` }} alt={`Maquina ${index}`}/>
                ))}
            </div>
            <div className='slider__arrows'>
                <button className='slider__button' name='left' onClick={previous}><LeftArrow/></button>
                <button className='slider__button' name='right' onClick={next}><RightArrow/></button>
            </div>
        </section>
    )
}
