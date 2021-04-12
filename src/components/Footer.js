import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import selec from '../images/selec.jpg';

const Footer = () => {
    return (
        <Fragment>
            <div className="container pb">
                <div className="row">
                    <div className="col m6 s12" data-aos="zoom-in" data-aos-offset="200"
                        data-aos-duration="800">
                        <img src={ selec } />
                        <p className="grey-text text-lighten-4">Esperando poder colaborar con Ud. en el logro de sus objetivos, quedamos a su disposición para cualquier consulta.</p>
                        <h5 className="white-text">Contacto: 0381 526-4757</h5>
                    </div>
                    <div className="col m4 offset-m2 s12" data-aos="zoom-in" data-aos-offset="200"
                        data-aos-duration="800">
                        <h5 className="white-text">Horario de Atención</h5>
                        <p>De Lunes a Viernes de 08:00 a 19:00 hs. Sábados de 08:00 a 13:00 hs. Domingo Cerrado.</p>
                    </div>
                </div>
                <Link to="/presupuesto" className='btn grey lighten-5 black-text'>Presupuestar</Link>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Soluciones Eléctricas SELEC
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
