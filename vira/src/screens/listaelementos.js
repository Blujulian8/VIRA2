import React, { Component } from 'react'
import Reader from '../components/TextToSpeech';
import VOLUME from "../icons/volume_up.svg";


export default class ListaElementos extends Component {
    render() {
        return (
            <div class="row row-cols-1 row-cols-md-2 text-center mt-3 mt-md-4">

                {/* <div className="col mb-3">
                    <div className="card Jumbo5 mx-md-3 Borde2 h-100 HoverCard2 Sombra negroo">
                        <a href="#" className="Tarjeta">
                            <div className="card-header h4 Jumbo3 py-3 BordeV text3">Comidas</div>
                            <div className="card-body">
                                <img className="img-fluid Borde" src="./Fotos/COMIDA.jpeg" alt="Comidas" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col mb-3">
                    <div className="card Jumbo5 mx-md-3 Borde2 h-100 HoverCard2 Sombra negroo">
                        <a href="#" className="Tarjeta">
                            <div className="card-header h4 Jumbo3 py-3 BordeV text3">Bebidas</div>
                            <div className="card-body">
                                <img className="img-fluid Borde" src="./Fotos/BEBIDAS.jpeg" alt="Bebidas" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col mb-3">
                    <div className="card Jumbo5 mx-md-3 Borde2 h-100 HoverCard2 Sombra negroo">
                        <a href="#" className="Tarjeta">
                            <div className="card-header h4 Jumbo3 py-3 BordeV text3">Partes del Cuerpo</div>
                            <div className="card-body">
                                <img className="img-fluid Borde" src="./Fotos/CUERPO.png" alt="Partes del cuerpo" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col mb-3">
                    <div className="card Jumbo5 mx-md-3 Borde2 h-100 HoverCard2 Sombra negroo">
                        <a href="#" className="Tarjeta">
                            <div className="card-header h4 Jumbo3 py-3 BordeV text3">Vestimenta</div>
                            <div className="card-body">
                                <img className="img-fluid Borde" src="./Fotos/VESTIMENTA.jpg" alt="Prendas de Vestir" />
                            </div>
                        </a>
                    </div>
                </div> */}

                <div class="row row-cols-1 row-cols-md-3 text-center">

                    <div class="col mb-3">
                        <div className="card Jumbo5 mx-md-3 Borde2 h-100 Sombra negroo">
                            <div className="card-header h4 Jumbo3 py-3 BordeV text3">Comidas</div>
                            <div className="card-body">
                                <img className="img-fluid rounded" src="./Fotos/COMIDA.jpeg" alt="Comidas" />
                            </div>
                            <div className="card-footer BordeTV Jumbo6">
                                {/* <a className="Tarjeta2" href="#" role="button">
                                    <h4 className="my-auto text2">Reproducir sonido</h4>
                                </a> */}
                                <Reader className="" text="panceta" />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
