import React, { Component } from 'react'

export default class ReconoceFrase extends Component {
    render() {
        return (
            <div>
                <h2 class="my-3 mt-md-4 mb-md-4 text-center text2">
                    ¿Que oracion es correcta respecto a esta imagen?
                </h2>


                <div class="row">

                    <div class="col-md-6">
                        <div class="card Jumbo1 w-md-50 Borde">
                            <div class="card-body">
                                <img class="img-fluid Borde " class="" src="./Fotos/BEBIDAS.jpeg" alt="Bebidas" />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="d-inline-flex flex-column ml-md-5">
                            <a class="btn Boton111 Boton px-5 py-2 mt-3 mt-md-5 " href="./ElegirFraseRespuesta.html" role="button">
                                <h3 class="my-auto text2">La carne está cruda</h3>
                            </a>

                            <a class="btn Boton111 Boton px-5 py-2 mt-3 mt-md-5" href="./ElegirFraseRespuesta.html" role="button">
                                <h3 class="my-auto text2">Nico saltó a la pileta</h3>
                            </a>

                            <a class="btn Boton111 Boton px-5 py-2 mt-3 mt-md-5" href="./ElegirFraseRespuesta.html" role="button">
                                <h3 class="my-auto text2">El perro tiene hambre</h3>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
