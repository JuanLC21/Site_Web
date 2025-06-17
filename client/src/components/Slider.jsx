/* eslint-disable react/prop-types */
import { useEffect, useRef, useReducer } from 'react'
import { LeftArrow, RightArrow, Close } from './Icon'
import './Slider.css'

const initialState = {
    position: 0,
    lightbox: 'slider__lightbox--hide',
    slider: '',
    none: ''
}

function reducer (state, action) {
    switch (action.type) {
    case 'previous':
        return { ...state, position: state.position > 0 ? state.position - 1 : action.payload.length - 1 }

    case 'next':
        return { ...state, position: state.position < action.payload.length - 1 ? state.position + 1 : 0 }

    case 'openLightbox':
        return { ...state, lightbox: state.lightbox === 'slider__lightbox--hide' ? '' : 'slider__lightbox--hide' }

    case 'openSlider':
        return { ...state, slider: state.slider === '' ? 'slider__slider--lightbox' : '' }

    case 'hideSlider':
        return { ...state, none: state.none === '' ? 'slider__slider--none' : '' }
    }
}

export function Slider ({ images, styleMod }) {
    const productsImages = Object.values(images)
    const [{ position, lightbox, slider, none }, dispatch] = useReducer(reducer, initialState)
    const indexRef = useRef(null)

    useEffect(() => {
        indexRef.current = setInterval(() => { dispatch({ type: 'next', payload: productsImages }) }, 5000)
        return () => { clearInterval(indexRef.current) }
    }, [])

    function previous () { dispatch({ type: 'previous', payload: productsImages }) }

    function next () { dispatch({ type: 'next', payload: productsImages }) }

    function handleSlider () {
        dispatch({ type: 'openLightbox' })
        dispatch({ type: 'openSlider' })
        dispatch({ type: 'hideSlider' })
    }
    const appearence = styleMod || ''
    return (
        <section className={`slider ${appearence}`}>
            <div className={`slider__slider ${none}`} onClick={handleSlider}>
                <div className='slider__images'>
                    {productsImages.map((img, index) => (
                        <img key={index} className='slider__product' src={img} style={{ translate: `${-100 * position}%` }} alt={`Maquina ${index}`}/>
                    ))}
                </div>
                <div className='slider__arrows'>
                    <button className='slider__button' name='left' onClick={previous}><LeftArrow/></button>
                    <button className='slider__button slider__button--right' name='right' onClick={next}><RightArrow/></button>
                </div>
            </div>
            <div className={`slider__lightbox ${lightbox}`}>
                <button className='slider__close' onClick={handleSlider}><Close/></button>
                <div className={`slider__slider ${slider}`}>
                    <div className='slider__images'>
                        {productsImages.map((img, index) => (
                            <img key={index} className='slider__product' src={img} style={{ translate: `${-100 * position}%` }} alt={`Maquina ${index}`}/>
                        ))}
                    </div>
                    <div className='slider__arrows'>
                        <button className='slider__button' name='left' onClick={previous}><LeftArrow/></button>
                        <button className='slider__button slider__button--right' name='right' onClick={next}><RightArrow/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
