import React from 'react';
import { Link } from 'react-router-dom';

import selec from '../images/selec.jpg';

const Nav = () => {
    return (
        <nav className="white" role="">
            <div className="nav-wrapper container">
                <a id="logo-container" href="/" className="brand-logo"><img src={selec}/></a>
                <ul className="right hide-on-med-and-down col m12">
                    <li><Link  to="/presupuesto">PRESUPUESTO</Link></li>
                </ul>

                <ul id="nav-mobile" className="sidenav">
                    <li><div className="userview"><div className="background"><a href="/"><img src={selec} /></a></div></div></li>
                    <li><Link to="/presupuesto">PRESUPUESTO</Link></li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    )
}

export default Nav
