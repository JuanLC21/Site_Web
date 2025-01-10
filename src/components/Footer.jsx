import { Email, Phone, Location } from './Icon'
import './Footer.css'

export function Footer () {
    return (
        <footer className='footer'>
            <div className="footer__section">
                <Email/>
                <p>Correo: ddi@ddi.com.co</p>
            </div>
            <div className="footer__section">
                <Phone/>
                <p>Telefono: (574) 202 45 88</p>
            </div>
            <div className="footer__section">
                <Location/>
                <p>Dirección: Cra 42 # 39 sur 130</p>
            </div>
        </footer>
    )
}
