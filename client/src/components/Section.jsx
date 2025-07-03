/* eslint-disable react/prop-types */
import './Section.css'
export function Section ({ title, styleMod, children, list, textCenter }) {
    const appearence = styleMod || ''
    const center = textCenter ? 'section__paragraph--mod' : ''
    return (
        <section className={`section ${appearence}`}>
            <h2 className='section__subtitle'>{title}</h2>
            {list || <p className={`section__paragraph ${center}`}>{children}</p>}
            {list && <ul className='section__list'>{children}</ul>}   
        </section>
    )
}
