/* eslint-disable react/prop-types */
import './Section.css'
export function Section ({ title, children, list }) {
    return (
        <section className='section'>
            <h2 className='section__subtitle'>{title}</h2>
            {list || <p className='section__paragraph'>{children}</p>}
            {list && <ul className='section__list'>{children}</ul>}
        </section>
    )
}
