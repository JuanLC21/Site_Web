/* eslint-disable react/prop-types */
import './Section.css'
export function Section ({ title, styleMod, children, list, textCenter }) {
    const center = textCenter ? 'section__paragraph--mod' : ''
    return (
        <section className={`section ${styleMod || ''}`}>
            <h2 className='section__subtitle'>{title}</h2>
            {list || <p className={`section__paragraph ${center}`}>{children}</p>}
            {list && <ul className={`section__list ${center}`}>{children}</ul>}
        </section>
    )
}
