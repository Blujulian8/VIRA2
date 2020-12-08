import React from 'react'
import { db } from "../index";

//QUE SE MANDEN LAS FOTOS (actualizar firebase)
//INHABILITAR BOTONES??
//APLUCARLO Y MODIFICAR PAAR EL DE REPETIR ORACION 

//TODO LO DE LISTA DE ELEMENTOOOOOS

export default function Recon2() {
    const [bien, setBien] = React.useState(0)
    const [pregunta, setPregunta] = React.useState({ opciones: ["Opción A", "Opcion B", "Opcion C"], correcta: 0, imagen: "", });
    const [lista, setLista] = React.useState();
    const [titulo, setTitulo] = React.useState("¿Que oracion es correcta respecto a esta imagen?");

    const NuevaPregunta = (datitos) => {
        var largo = datitos.length;
        var azar = Math.floor(Math.random() * largo);
        setPregunta(datitos[azar]);
        setBien(0)
        setTitulo("¿Que oracion es correcta respecto a esta imagen?")
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
                return datitos;
            })
            .then((datitos) => {
                NuevaPregunta(datitos);
                setLista(datitos);
            })
            .catch((err) => console.log(err));


    }, []);

    // console.log(pregunta)

    function Check(opcion) {
        if (pregunta.correcta === opcion) {
            setBien(1);
            // console.log("Funciona, Epico!!");
            setTitulo("¡Correcto!");
        }
        else {
            setBien(2);
            setTitulo("Incorrecto");
        }


    }

    function Respuesta(opcion) {
        if (bien === 0) return ("Boton111");

        else if (opcion === pregunta.correcta) return ("BotonTrue1");

        else return ("BotonFalse1")
    }


    return (
        <div>
            {/* {bien === 1 &&
                <h1>BIEN</h1>
            }
            {bien === 2 && <h1>MAL</h1>} */}

            <h2 className="my-3 mt-md-4 mb-md-4 text-center text2">
                {titulo}
            </h2>


            <div class="row">

                <div class="col-md-6">
                    <div class="card Jumbo1 w-md-50 Borde Sombra">
                        <div class="card-body text-center">
                            <img class="imagenRec2 Borde" src={pregunta.imagen} alt={pregunta.opciones[pregunta.correcta]} />
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="d-inline-flex flex-column ml-md-5">
                        <button class={`btn Boton px-5 py-2 mt-3 mt-md-5 Sombra ${Respuesta(0)}`} onClick={() => Check(0)}>
                            <h3 class="my-auto text2">{pregunta.opciones[0]}</h3>
                        </button>

                        <button class={`btn Boton px-5 py-2 mt-3 mt-md-5 Sombra ${Respuesta(1)}`} onClick={() => Check(1)}>
                            <h3 class="my-auto text2">{pregunta.opciones[1]}</h3>
                        </button>

                        <button class={`btn Boton px-5 py-2 mt-3 mt-md-5 Sombra ${Respuesta(2)}`} onClick={() => Check(2)}>
                            <h3 class="my-auto text2">{pregunta.opciones[2]}</h3>
                        </button>
                    </div>
                </div>

                {bien > 0 &&
                    <div className="mx-auto">
                        <button className="btn Boton111 Boton px-5 py-2 mt-5 Sombra" onClick={() => NuevaPregunta(lista)}>
                            <h3 className="my-auto text2">Siguiente Pregunta</h3>
                        </button>
                    </div>
                }

            </div>

        </div>
    )

}
