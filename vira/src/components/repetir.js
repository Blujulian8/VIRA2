import React, { Component } from 'react'
import { db } from "../index";

import VOLUME from "../icons/volume_up.svg";
import ARROW from "../icons/arrow_right.svg";

import Listener, { Coincide } from '../components/SpeechRecogniser';
import Reader from '../components/TextToSpeech';



export default function Repetir() {
    //TE TIRA UNA RONDA ATRASADA (SOLO PASA SI LO HAGO DESDE OTRA FUNCION)
    //SE ESCUCHA LA PALABRA DEFAULT
    //NO SE MUESTRA EL CORRECTO O INCORRECTO

    // "Abri la heladera en patas y me dio corriente"

    const [lista, setLista] = React.useState();
    const [pregunta, setPregunta] = React.useState({ opciones: [], correcta: 0, });
    const [oracion, setOracion] = React.useState("");
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

    React.useEffect(() => {

    }, [])

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

                <div className="h2  ml-md-4 p-3 my-4 text3">
                    {oracion}
                </div>

                {/* <div className="p-0 ml-md-auto mr-md-4" >
                    <Reader text={oracion} type="icono" />
                </div> */}

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


            <Coincide />

        </div>
    )

}
