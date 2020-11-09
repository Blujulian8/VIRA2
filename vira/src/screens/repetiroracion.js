import React, { Component } from 'react'

import ARROW from "../icons/arrow_right.svg";
import VOICE from "../icons/keyboard_voice.svg";
import STOP from "../icons/stop_rounded.svg";
import VOLUME from "../icons/volume_up.svg";

import Listener from '../components/SpeechRecogniser';
import Reader from '../components/TextToSpeech';

export default class RepetirOracion extends Component {
    render() {
        return (
            <div>

                <h2 className="my-3 my-md-4 text-center text2">
                    Repite la oracion de abajo, puedes escuchar como se pronuncia la oración
                </h2>


                <div className="d-flex flex-wrap my-md-5 Borde Jumbo2 Sombra" >

                    <div className="h2 my-auto ml-md-4 p-3 p-md-0 text3">
                        Abri la heladera en patas y me dio corriente
                    </div>

                    <a className="btn Boton Boton3sin p-2 m-3 ml-md-auto mr-md-4" >
                        <Reader className="" text="panceta" >
                            <img src={VOLUME} className="IconoSM my-auto" alt="Escuchar" />
                        </Reader>
                    </a>



                </div>


                <div className="row">

                    <div className="col-md-4 px-5">
                        <a className="btn Boton Boton3sin btn-block Sombra py-2 my-3" href="" role="button">
                            <img src={VOICE} className="IconoLG my-auto" alt="Hablar" />
                            <h3 className="my-auto">Hablar</h3>
                        </a>
                    </div>

                    <div className="col-md-4 px-5">
                        <a className="btn Boton Boton3sin btn-block Sombra py-2 my-3" href="./RepetirOracionRespuesta.html" role="button">
                            <img src={STOP} className="IconoLG my-auto" alt="Detenerse" />
                            <h3 className="my-auto">Detenerse</h3>
                        </a>
                    </div>

                    <div className="col-md-4 px-5">
                        <a className="btn Boton Boton3sin btn-block Sombra py-2 my-3" href="" role="button">
                            <img src={ARROW} className="IconoLG my-auto" alt="Siguiente oración" />
                            <h3 className="my-auto">Siguiente Oración</h3>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}
