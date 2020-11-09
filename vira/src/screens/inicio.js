import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class inicio extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid CajaB1 Borde mt-3 mt-md-5 Sombra">
                    <div className="mx-3 mx-md-5 aaaa">
                        <h2 className="mb-3 text3">VIRA es un sistema de rehabilitación dirigida a personas que padecen de afasia.</h2>
                        <h5 className="text2">Esta posee una interfaz accesible y amistosa para los usuarios que busca ayudar a las personas que padecen de afasia a realizar actividades terapéuticas persiguiendo objetivos lingüísticos mediante una serie de ejercicios interrelacionados y crecientes en complejidad.
                        </h5>
                        <Link className="btn Boton111 Boton px-4 py-2 mt-2" to="/Elegir" role="button">
                            <h3 className="my-auto text2">Empezar a usar</h3>
                        </Link>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid CajaB2 Borde Sombra">
                    <div className="mx-3 mx-md-5 aaaa">
                        <h2 className="mb-3 text3">La afasia es una condición que afecta a la capacidad de comunicación de sus pacientes.</h2>
                        <h5 className="text2"> La afasia puede tener diferentes causas, y afectar a diferente modo a las personas. <br />Por más que la afasia no tenga una cura, con la rehabilitación del lenguaje, se puede mejorar notablemente la calidad de vida de los pacientes.</h5>

                        <div className="row my-3 my-md-4 mx-0 mx-md-0 CajaRosa">
                            <div className="col-sm mt-md-5 mt-4">
                                <div className=" mx-2 mx-md-5">
                                    <h4>Lista de Elementos</h4>
                                    <h6 className="mb-4">Aquí podrás encontrar una gran variedad de palabras, imágenes y sonidos que te permitirán mejorar tu habilidades de comunicación</h6>
                                    <h4>Reconoce el Elemento</h4>
                                    <h6 className="mb-3 mb-md-5">Aquí podrás ejercitar tus habilidades de comunicación eligiendo la palabra que le corresponda a la imagen que se visualiza</h6>
                                </div>
                            </div>
                            {/* <span className="border-right border-left border pan"></span> HASTA QUE NO ARREGLE EL COLOR NO VA*/}
                            <div className="col-sm mt-4 mt-md-5">
                                <div className="mx-2 mx-md-5">
                                    <h4>Reconoce la Frase</h4>
                                    <h6 className="mb-4">Aquí podrás ejercitar tus habilidades de comunicación eligiendo la frase que se asocie a la imagen que se visualiza</h6>
                                    <h4>Repite la Oración</h4>
                                    <h6 className="mb-4 mb-md-5">Aquí podrás ejercitar tus habilidades de comunicación repitiendo la frase dada sin ningún error</h6>
                                </div>
                            </div>

                        </div>

                        <Link className="btn Boton2 Boton px-4 py-2 mt-2" to="/Afasia" role="button">
                            <h3 className="my-auto text2">Seguir leyendo</h3>
                        </Link>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid CajaB3 Borde Sombra">
                    <div className="mx-3 mx-md-5 aaaa">
                        <h2 className="mb-3 text3">Somos 3 estudiantes de 16 y 17 años del instituto ORT</h2>
                        <h5 className="text2">Somos Julian, Sofía y Camila, estudiantes de 4to año que decidieron hacer este proyecto para ayudar a las personas con afasia, usando así nuestros conocimientos para conseguir el bienestar de otros.</h5>
                        <Link className="btn Boton3 Boton px-4 py-2 mt-2" to="/Nosotros" role="button">
                            <h3 className="my-auto text2">Seguir leyendo</h3>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
