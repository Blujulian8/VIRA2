import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LOGO from "../icons/LOGO.svg"

export default class Navbar2 extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark Barra Sombra mt-5 mx-auto ">
                <Link className=" ml-lg-5" to="/">
                    <img src={LOGO} alt="Menu Vira" height="50" class="align-top" />
                </Link>
            </nav>
        )
    }
}
