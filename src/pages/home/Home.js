import React, { Fragment } from 'react';
import uno from '../../images/7.jpg';
import dos from '../../images/1.jpg';
import tres from '../../images/2.jpg';
import cuatro from '../../images/3.jpg';
import cinco from '../../images/4.jpg';
import seis from '../../images/5.jpg';
import siete from '../../images/Sin título-6.jpg';
import uno1 from '../../images/8.jpg';
import vision from '../../images/vision.svg';
import valores from '../../images/valores.svg';
import mision from '../../images/mision.svg';
import { Link } from 'react-router-dom';
import selec from '../../images/selec.jpg';
const Home = () => {
    return (
        <Fragment>
        <h1>Soluciones Eléctricas SELEC</h1>
        <div className="parallax-container">
            <div className="parallax"><img id="image-test" src={uno}/></div>
        </div>
        <section>
        <div className="row nosotros">
            <div className="col s12 l6">
                <img src={uno1}/>
            </div>
            <div className="col s12 l6 block white valing-wrapper">
                        <div className="col s10 offset-s1 center">
                        <h3>Nosotros, nuestra historia</h3>
                <p className="col s10 center offset-s1 center">SELEC es una moderna empresa que entrega soluciones ajustadas a la realidad particular de cada uno de sus clientes.

Nuestro desafío permanente es mantener la excelencia en los servicios que brindamos, innovando continuamente para apoyar realmente la gestión y competitividad de los planes y proyectos de quienes nos contratan. </p>
                        </div>
                    </div>
        </div>
        </section>
        <div className="row nosotros" id="staggered-test">
            <div className="col s12 m4 menor">
                <ul>
                    <li><img src={mision}/></li>
                    <li><h5>Mision</h5></li>
                    <li>SELEC es una moderna empresa que entrega soluciones ajustadas a la realidad particular de cada uno de sus clientes.</li>
                </ul>
            </div>
            <div className="col s12 m4">
                <ul>
                <img src={vision}/>
                <li><h5>Visión</h5></li>
                <li>Nuestro desafío permanente es mantener la excelencia en los servicios que brindamos, innovando continuamente para apoyar realmente la gestión y competitividad de los planes y proyectos de quienes nos contratan. </li>
                </ul>
            </div>
            <div className="col s12 m4 menor2">
                <ul>
                <img src={valores}/>
                <li><h5>Valores</h5></li>
                <li>Líder auténtico.Proactivo y optimista.Servicial.Comunicación efectiva.Trabajo en equipo.Gratitud.</li>
                </ul>
            </div>
        </div>
        <h3>Galería</h3>
            <div className="slider container">
                <ul className="slides">
                    <li>
                        <img src={tres} />
                        <div className="caption center-align">
                            <h3>Compromiso</h3>
                        </div>
                    </li>
                    <li>
                        <img src={cuatro} />
                        <div className="caption left-align">
                            <h3>Excelencia</h3>
                        </div>
                    </li>
                    <li>
                        <img src={cinco} />
                        <div className="caption right-align">
                            <h3>Inovación</h3>
                        </div>
                    </li>
                    <li>
                        <img src={dos} />
                        <div className="caption center-align">
                            <h3>Comunicación Efectiva</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <footer className="page-footer teal lighten-2">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <img src={selec}/>
                <p className="grey-text text-lighten-4">Esperando poder colaborar con Ud. en el logro de sus objetivos, quedamos a su disposición para cualquier consulta.</p>
                <h5 className="white-text">Contacto: 0381 526-4757</h5>
              </div>
              <div className="col m4 offset-l2 s12">
                <h5 className="white-text">Horario de Atención</h5>
                <p>De Lunes a Viernes de 08:00 a 19:00 hs. Sábados de 08:00 a 13:00 hs. Domingo Cerrado.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Soluciones Eléctricas SELEC
            </div>
          </div>
        </footer>
        </Fragment>
    )
}

export default Home;