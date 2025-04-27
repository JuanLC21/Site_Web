/* eslint-disable react/prop-types */
import './Video.css'
export function Video ({ url, control }) {
    return (
        <section className='video'>
            {
                control
                    ? <video width='100%' height='100%' src={url} controls></video>
                    : <video width='100%' height='100%' src={url} autoPlay muted loop></video>
            }
        </section>
    )
}
