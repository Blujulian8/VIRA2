import React from 'react'
import { db } from "../index";

//INHABILITAR BOTONES??

export default function Recon() {
    const [bien, setBien] = React.useState(0)
    const [pregunta, setPregunta] = React.useState({ opciones: ["Opción A", "Opcion B", "Opcion C"], correcta: 0, imagen: "", });
    const [lista, setLista] = React.useState();
    const [titulo, setTitulo] = React.useState("¿Que es esta imagen?");

    const NuevaPregunta = (datitos) => {
        var largo = datitos.length;
        var azar = Math.floor(Math.random() * largo);
        setPregunta(datitos[azar]);
        setBien(0)
        setTitulo("¿Que es esta imagen?")
    }


    React.useEffect(() => {
        db.collection("Vira2020/reconocer/Reconocer")
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


    // function ClaseTitulo(opcion) {
    //     if (titulo === "¡Correcto!") return ("CajaB3")
    //     if (titulo === "Incorrecto") return ("CajaB5")
    // }


    function Respuesta(opcion) {
        if (bien === 0) return ("Boton2");

        else if (opcion === pregunta.correcta) return ("BotonTrue1");

        else return ("BotonFalse1")
    }


    return (
        <div>

            <h2 className="my-3 mt-md-4 mb-md-4 text-center text2">
                {titulo}
            </h2>

            <div className="row">
                <div className="col-lg-7 col-md-10 mx-auto">

                    <div className="card Jumbo5 Borde Sombra">
                        <div className="card-body text-center">
                            <img className="imagenRec Borde" src={pregunta.imagen} alt={pregunta.opciones[pregunta.correcta]} />
                        </div>
                    </div>

                </div>
            </div>



            <div className="row mt-lg-4">
                <div className="col-lg-8 mx-auto" >
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="col-sm-4 text-center">
                            <button className={`btn Boton px-5 py-2 mt-3 Sombra ${Respuesta(0)}`} onClick={() => Check(0)}>
                                <h3 className="my-auto text2">{pregunta.opciones[0]}</h3>
                            </button>
                        </div>

                        <div className="col-sm-4 text-center">
                            <button className={`btn Boton px-5 py-2 mt-3 Sombra ${Respuesta(1)}`} onClick={() => Check(1)}>
                                <h3 className="my-auto text2">{pregunta.opciones[1]}</h3>
                            </button>
                        </div>

                        <div className="col-sm-4 text-center">
                            <button className={`btn Boton px-5 py-2 mt-3 Sombra ${Respuesta(2)}`} onClick={() => Check(2)}>
                                <h3 className="my-auto text2">{pregunta.opciones[2]}</h3>
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {bien > 0 &&
                <div>
                    <div className="text-center">
                        <button className="btn Boton2 Boton px-5 py-2 mt-5 Sombra" onClick={() => NuevaPregunta(lista)} >
                            <h3 className="my-auto text2">Siguiente Pregunta</h3>
                        </button>
                    </div>
                </div>
            }

        </div>
    )

}
