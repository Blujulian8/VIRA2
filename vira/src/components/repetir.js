import React, { Component } from 'react'
import { db } from "../index";

import VOLUME from "../icons/volume_up.svg";

import Listener from '../components/SpeechRecogniser';
import Reader from '../components/TextToSpeech';



export default function Repetir() {
    const [bien, setBien] = React.useState(0)
    const [pregunta, setPregunta] = React.useState({ opciones: [], correcta: 0, imagen: "", });
    const [lista, setLista] = React.useState();
    // const [titulo, setTitulo] = React.useState("¿Que es esta imagen?");

    const NuevaPregunta = (datitos) => {
        var largo = datitos.length;
        var azar = Math.floor(Math.random() * largo);
        setPregunta(datitos[azar]);
        setBien(0)
        // setTitulo("¿Que es esta imagen?")
    }


    React.useEffect(() => {
        db.collection("Vira2020/reconocer/Reconocer")
            .get()
            .then((querySnapshot) => {
                let datitos = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                    // console.log(`${doc.id} => ${doc.data()}`);
                });
                return datitos;
            })
            .then((datitos) => {
                NuevaPregunta(datitos);
                setLista(datitos);
            })
            .catch((err) => console.log(err));


    }, []);

    console.log(pregunta)

    function Check(opcion) {
        if (pregunta.correcta === opcion) {
            setBien(1);
            console.log("Funciona, Epico!!");
            // setTitulo("¡Correcto!");
        }
        else {
            setBien(2);
            // setTitulo("Incorrecto");
        }


    }

    function Respuesta(opcion) {
        if (bien === 0) return ("Boton2");

        else if (opcion === pregunta.correcta) return ("BotonTrue1");

        else return ("BotonFalse1")
    }


    return (
        <div>

            <h2 className="my-3 my-md-4 text-center text2">
                Repite la oracion de abajo, puedes escuchar como se pronuncia la oración
            </h2>


            <div className="d-flex flex-wrap my-md-5 Borde Jumbo2 Sombra" >

                <div className="h2 my-auto ml-md-4 p-3 p-md-0 text3">
                    "Abri la heladera en patas y me dio corriente"
                </div>

                <div className="p-2 m-3 ml-md-auto mr-md-4" >
                    <Reader text={"Abri la heladera en patas y me dio corriente"} type="icono" />
                </div>

            </div>

            <div>
                <Listener palabra={"owo"} />
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
