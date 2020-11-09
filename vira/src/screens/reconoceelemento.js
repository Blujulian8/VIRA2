import React, { Component } from 'react'
import Recon from '../components/reconocer'

export default class ReconoceElemento extends Component {
    render() {
        return (
            <div>

                <Recon />


                <h2 className="my-3 mt-md-4 mb-md-4 text-center text2">
                    ¿Que es esta imagen?
                </h2>

                <div className="row">
                    <div className="col-lg-5 col-md-10 mx-auto">

                        <div className="card Jumbo5 Borde">
                            <div className="card-body">
                                <img className="img-fluid Borde " src="./Fotos/BEBIDAS.jpeg" alt="Bebidas" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mt-lg-4">
                    <div className="col-lg-8  mx-auto">
                        <div className="d-flex justify-content-center flex-wrap">

                            <div className="col-sm-4 text-center">
                                <a className="btn Boton2 Boton px-5 py-2 mt-3 " href="./ElegirElemento.html" role="button">
                                    <h3 className="my-auto text2">Bebida</h3>
                                </a>
                            </div>

                            <div className="col-sm-4 text-center">
                                <a className="btn Boton2 Boton px-5 py-2 mt-3 mx-auto" href="./ElegirElemento.html" role="button">
                                    <h3 className="my-auto text2">Comida</h3>
                                </a>
                            </div>

                            <div className="col-sm-4 text-center">
                                <a className="btn Boton2 Boton px-5 py-2 mt-3" href="./ElegirElementoRespuesta.html" role="button">
                                    <h3 className="my-auto text2">Saliva</h3>
                                </a>
                            </div>

                            {/* <div class="col-sm-4 text-center">
                                <a className="btn BotonFalse1 Boton px-5 py-2 mt-3" href="./ElegirElemento.html" role="button">
                                    <h3 class="my-auto text2">Bebida</h3>
                                </a>
                            </div> */}

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
