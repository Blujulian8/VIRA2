import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Elegir extends Component {
    render() {
        return (
            <div>
                <h2 className="my-3 mt-md-4 mb-md-4 text-center text2">
                    Elige la actividad que deseas realizar:
                </h2>


                <div className="row row-cols-1 row-cols-md-2 text-center">

                    <div className="col mb-4 mb-md-5 ">
                        <div className="card Jumbo4 mx-md-4 Borde2 h-100 HoverCard1 Sombra negroo">
                            <Link to="/ListaElementos" className="Tarjeta">
                                <div className="card-header h4 Jumbo2 py-3 BordeR text3">Lista de Elementos</div>
                                <div className="card-body">
                                    <h5 className="card-text my-md-2">Gran variedad de palabras, imágenes y sonidos que te permitirán mejorar tus habilidades de comunicación</h5>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="col mb-4 mb-md-5">
                        <div className="card Jumbo4 mx-md-4 Borde2 h-100 HoverCard1 Sombra negroo">
                            <Link to="ReconoceElemento" className="Tarjeta">
                                <div className="card-header h4 Jumbo2 py-3 BordeR text3">Reconoce el Elemento</div>
                                <div className="card-body">
                                    <h5 className="card-text my-md-2">Ejercita tus habilidades de comunicación eligiendo la palabra que le corresponda a la imagen que se visualiza</h5>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col mb-4 mb-md-5">
                        <div className="card Jumbo4 mx-md-4 Borde2 h-100 HoverCard1 Sombra negroo">
                            <Link to="ReconoceFrase" className="Tarjeta">
                                <div className="card-header h4 Jumbo2 py-3 BordeR text3">Reconoce la frase</div>
                                <div className="card-body">
                                    <h5 className="card-text my-md-2 align-middle">Ejercita tus habilidades de comunicación eligiendo la frase que se asocie a la imagen que se visualiza</h5>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className="col mb-4 mb-md-5">
                        <div className="card Jumbo4 mx-md-4 Borde2 h-100 HoverCard1 Sombra negroo">
                            <Link to="RepiteOracion" className="Tarjeta">
                                <div className="card-header h4 Jumbo2 py-3 BordeR text3">Repite la Oración</div>
                                <div className="card-body">
                                    <h5 className="card-text my-md-2">Ejercita tus habilidades de comunicación repitiendo la frase dada sin ningún error</h5>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
