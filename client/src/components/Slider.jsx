/* eslint-disable react/prop-types */
import { useEffect, useRef, useReducer } from 'react'
import { SliderContent } from './SliderContent'
import { Close } from './Icon'
import './Slider.css'

const initialState = {
    currentIndex: 0, // Imagen actual
    isLightboxOpen: false, // Estado del lightbox
    isMainSliderVisible: true, // Estado del slider principal
    isPaused: false // Autoplay pausado o no
}

function reducer (state, action) {
    switch (action.type) {
    case 'previous':
        return {
            ...state,
            currentIndex: state.currentIndex > 0
                ? state.currentIndex - 1
                : action.payload.length - 1
        }

    case 'next':
        return {
            ...state,
            currentIndex: state.currentIndex < action.payload.length - 1
                ? state.currentIndex + 1
                : 0
        }

    case 'toggleLightbox':
        return { ...state, isLightboxOpen: action.payload, isMainSliderVisible: !action.payload }

    case 'setPause':
        return { ...state, isPaused: action.payload }
    }
}

export function Slider ({ images, styleMod }) {
    const productsImages = Object.values(images)
    const [{ currentIndex, isLightboxOpen, isMainSliderVisible, isPaused }, dispatch] = useReducer(reducer, initialState)
    const indexRef = useRef(null)

    useEffect(() => {
        if (!isPaused) indexRef.current = setInterval(() => { dispatch({ type: 'next', payload: productsImages }) }, 3000)
        return () => { clearInterval(indexRef.current) }
    }, [isPaused, productsImages])

    function handleSlider (openLightbox) {
        dispatch({ type: 'toggleLightbox', payload: openLightbox })
        dispatch({ type: 'setPause', payload: openLightbox })
    }

    function slide (type) { dispatch({ type, payload: productsImages }) }

    return (
        <section className={`slider ${styleMod || ''}`}>
            <div className={`slider__lightbox ${isLightboxOpen ? '' : 'slider__lightbox--hidden'}`}>
                <button className='slider__close' onClick={() => handleSlider(false)}>
                    <Close />
                </button>
            </div>
            <div className={`slider__slider ${isMainSliderVisible ? '' : 'slider__slider--lightbox'}`} onClick={() => handleSlider(true)}>
                <SliderContent products={productsImages} currentIndex={currentIndex} onSlide={slide}/>
            </div>
        </section>
    )
}
