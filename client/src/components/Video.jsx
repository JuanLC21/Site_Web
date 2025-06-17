/* eslint-disable react/prop-types */
import './Video.css'
export function Video ({ url, control, styleMod }) {
    const appearence = styleMod || ''
    return (
        <section className={`video ${appearence}`}>
            {
                control
                    ? <video width='100%' height='auto' src={url} controls></video>
                    : <video width='100%' height='auto' src={url} autoPlay muted loop></video>
            }
        </section>
    )
}
