/* eslint-disable react/prop-types */
import './Section.css'
export function Section ({ title, children, list }) {
    return (
        <section className='section'>
            <h2 className='section__subtitle'>{title}</h2>
            <p className='section__paragraph'>{list ? '' : children}</p>
            <ul className='section__list'>{list ? children : ''}</ul>
        </section>
    )
}
