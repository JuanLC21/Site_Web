import { Email, Phone, Location, InstagramIcon } from '../../components/Icon'
import './Footer.css'

export function Footer () {
    return (
        <footer className='footer'>
            <div className='footer__div-1'>
                <section className="footer__section">
                    <Email/>
                    <p><strong className='footer__remark'>Correo:</strong> ddi@ddi.com.co</p>
                </section>
                <section className="footer__section">
                    <Phone/>
                    <p><strong className='footer__remark'>Telefono:</strong> (604) 202 45 88</p>
                </section>
                <section className="footer__section">
                    <Location/>
                    <p><strong className='footer__remark'>Dirección:</strong> Cra 42 # 39 sur 130</p>
                </section>
                <section className="footer__section">
                    <InstagramIcon/>
                    <p><strong className='footer__remark'>Instagram:</strong> @ddi_col</p>
                </section>
            </div>
            <div className='footer__div-2'>
                <img src="./logo_header.avif" alt="Logo DDI SAS" />
            </div>
            <section className="footer__section footer__section--modify">
                <p>DDI S.A.S 2022</p>
            </section>
        </footer>
    )
}
