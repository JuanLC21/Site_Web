/* eslint-disable react/prop-types */
import * as products from '../assets/images/dataImagesA.js'
import { useEffect, useRef, useState } from 'react'
import { LeftArrow, RightArrow } from './Icon'
import './Slider.css'

const productsImages = Object.values(products)

export function Slider () {
    const [indexImage, setIndexImage] = useState(0)
    const indexRef = useRef(null)
    useEffect(() => {
        indexRef.current = setInterval(() => {
            setIndexImage(prevIndex => (prevIndex < productsImages.length - 1 ? prevIndex + 1 : 0))
        }, 5000)

        return () => { clearInterval(indexRef.current) }
    }, [])
    function previous () {
        setIndexImage(prevIndex => (prevIndex > 0 ? prevIndex - 1 : productsImages.length - 1))
    }
    function next () {
        setIndexImage(prevIndex => (prevIndex < productsImages.length - 1 ? prevIndex + 1 : 0))
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
                <button className='slider__button slider__button--right' name='right' onClick={next}><RightArrow/></button>
            </div>
        </section>
    )
}
