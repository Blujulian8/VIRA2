import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../icons/LOGO.svg";

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg sticky-top navbar-dark navbar-toggleable-sm Barra Sombra">

                <Link className="navbar-brand ml-lg-5" to="/">
                    <img src={LOGO} alt="Menu Vira" height="50" className="align-top" />
                </Link>

                <button className="navbar-toggler BotonNavbar" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mr-lg-5 TextoHeader" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto text-center">
                        <Link className="nav-item nav-link mr-lg-1 px-lg-3" to="/Elegir">Usar VIRA</Link>
                        <Link className="nav-item nav-link mr-lg-1 px-lg-3" to="/Afasia">¿Para que sirve?</Link>
                        <Link className="nav-item nav-link px-lg-3" to="/Nosotros">Quienes Somos</Link>
                    </div>
                </div>
            </nav>

        )
    }
}
