import React, { Component } from 'react'
import { db } from "../index";

import VOLUME from "../icons/volume_up.svg";
import ARROW from "../icons/arrow_right.svg";

import Listener, { SpeechRecogniser, Coincide } from '../components/SpeechRecogniser';
import Reader from '../components/TextToSpeech';



export default function Repetir() {
    // "Abri la heladera en patas y me dio corriente"

    const [lista, setLista] = React.useState();
    const [pregunta, setPregunta] = React.useState({ opciones: [], correcta: 0, });
    const [oracion, setOracion] = React.useState("Abri la heladera en patas y me dio corriente");
    const [bien, setBien] = React.useState(0)

    const NuevaPregunta = (lista) => {
        var largo = lista.length;
        var azar = Math.floor(Math.random() * largo);
        // var posicion = pregunta.correcta;
        setPregunta(lista[azar]);
        // setOracion(pregunta.opciones[posicion])
        setOracion(lista[azar].opciones[lista[azar].correcta])
        setBien(0)
    }


    React.useEffect(() => {
        db.collection("Vira2020/frases/Frases")
            .get()
            .then((querySnapshot) => {
                let datitos = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                });

                setLista(datitos);
                var largo = datitos.length;
                var azar = Math.floor(Math.random() * largo);
                setOracion(datitos[azar].opciones[datitos[azar].correcta])
                setPregunta(datitos[azar])

            })

    }, []);

    // function Check(opcion) {
    //     if (pregunta.correcta === opcion) {
    //         setBien(1);
    //         console.log("Funciona, Epico!!");
    //         // setTitulo("¡Correcto!");
    //     }
    //     else {
    //         setBien(2);
    //         // setTitulo("Incorrecto");
    //     }


    // }

    // function Respuesta(opcion) {
    //     if (bien === 0) return ("Boton2");

    //     else if (opcion === pregunta.correcta) return ("BotonTrue1");

    //     else return ("BotonFalse1")
    // }


    return (
        <div>

            <h2 className="my-3 my-md-4 text-center text2">
                Repite la oracion de abajo, puedes escuchar como se pronuncia la oración
            </h2>


            <div className="d-flex flex-wrap my-md-5 Borde Jumbo2 Sombra" >

                <div className="h2 my-auto ml-md-4 p-3 p-md-0 text3">
                    {oracion}
                </div>

                <div className="p-0 ml-md-auto mr-md-4" >
                    <Reader text={oracion} type="icono" />
                </div>

            </div>

            <div className="row">

                <Listener palabra={oracion} />

                <div className="col-md-4 px-5">
                    <a className="btn Boton Boton3sin btn-block Sombra py-2 my-3" onClick={() => NuevaPregunta(lista)} role="button">
                        <img src={ARROW} className="IconoLG my-auto" alt="Siguiente oración" />
                        <h3 className="my-auto">Siguiente Oración</h3>
                    </a>
                </div>

            </div>


            {bien > 0 &&
                <div>
                    <div className="text-center">
                        <a className="btn Boton2 Boton px-5 py-2 mt-5 Sombra" onClick={() => NuevaPregunta(lista)} role="button">
                            <h3 className="my-auto text2">Siguiente Pregunta</h3>
                        </a>
                    </div>
                </div>
            }

        </div>
    )

}
