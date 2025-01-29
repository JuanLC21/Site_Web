import { Email, Phone, Location } from './Icon'
import './Footer.css'

export function Footer () {
    return (
        <footer className='footer'>
            <section className="footer__section">
                <Email/>
                <p>Correo: ddi@ddi.com.co</p>
            </section>
            <section className="footer__section">
                <Phone/>
                <p>Telefono: (574) 202 45 88</p>
            </section>
            <section className="footer__section">
                <Location/>
                <p>Dirección: Cra 42 # 39 sur 130</p>
            </section>
        </footer>
    )
}
