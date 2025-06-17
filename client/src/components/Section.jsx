/* eslint-disable react/prop-types */
import './Section.css'
export function Section ({ title, styleMod, children, list }) {
    const appearence = styleMod || ''
    console.log(appearence)
    return (
        <section className={`section ${appearence}`}>
            <h2 className='section__subtitle'>{title}</h2>
            {list || <p className='section__paragraph'>{children}</p>}
            {list && <ul className='section__list'>{children}</ul>}
        </section>
    )
}
