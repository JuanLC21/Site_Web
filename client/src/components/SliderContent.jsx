/* eslint-disable react/prop-types */
import { LeftArrow, RightArrow } from './Icon'

export function SliderContent ({ products, currentIndex, onSlide }) {
    return (
        <>
            <div className='slider__images'>
                {products.map((img, index) => (
                    <img
                        key={index}
                        className='slider__product'
                        src={img}
                        style={{ translate: `${-100 * currentIndex}%` }}
                        alt={`Maquina ${index}`}
                    />
                ))}
            </div>
            <div className='slider__arrows'>
                <button
                    className='slider__button'
                    name='left'
                    onClick={() => onSlide('previous')}
                >
                    <LeftArrow />
                </button>
                <button
                    className='slider__button slider__button--right'
                    name='right'
                    onClick={() => onSlide('next')}
                >
                    <RightArrow />
                </button>
            </div>
        </>
    )
}
