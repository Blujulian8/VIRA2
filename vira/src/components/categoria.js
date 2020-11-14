import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { db } from "../index";
import Reader from '../components/TextToSpeech';

export default function Categoria(props) {
    const [datos, setDatos] = React.useState(null)
    const [datos2, setDatos2] = React.useState(null)

    React.useEffect(() => {
        let datitos = [];
        db.collection(`Vira2020/categorias/${props.location.state.nombre}`)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                    // console.log(`${doc.id} => ${doc.data()}`);
                });
                setDatos(datitos)

            })

    }, [])



    function funcion(datos22) {

        return (
            <div className="row row-cols-1 row-cols-md-3 text-center">
                {datos22 && datos22.map((elemento, i) => (

                    <div class="col mb-3">
                        <div className="card Jumbo5 mx-md-3 Borde2 h-100 Sombra negroo">
                            <div className="card-header h4 Jumbo3 py-3 BordeV text3">{elemento.name}</div>
                            <div className="card-body">
                                <img className="img-fluid rounded" src={elemento.imagen} />
                            </div>
                            <div className="card-footer BordeTV Jumbo6">
                                <Reader text={elemento.name} />
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        )
    }



    function subcategorias(subcategoria) {
        let datitos = [];
        db.collection(`Vira2020/categorias/${props.location.state.nombre}/${subcategoria}/${subcategoria}`)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                    // console.log(`${doc.id} => ${doc.data()}`);
                });
                setDatos2(datitos)
                console.log(datitos);
            })

        funcion(datos2);
    }




    return (

        <>
            <h2>{props.location.state.nombre}</h2>

            {datos ? console.log(datos) : console.log("che esta vacio pete")}


            {props.location.state.nombre === "Alimentos" || props.location.state.nombre === "Bebidas" ?
                <div className="row row-cols-1 row-cols-md-2 text-center mt-3 mt-md-4">
                    {datos && datos.map((elemento, i) => (

                        <div>
                            <div>
                                <div className="col mb-3">
                                    <div className="card Jumbo5 mx-md-3 Borde2 h-100 HoverCard2 Sombra negroo">
                                        <a onClick={subcategorias(elemento.name)} className="Tarjeta">
                                            <div className="card-header h4 Jumbo3 py-3 BordeV text3">{elemento.name}</div>
                                            <div className="card-body">
                                                <img className="imagen img-fluid Borde" src={elemento.imagen} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

                :
                <div className="row row-cols-1 row-cols-md-3 text-center">
                    {datos && datos.map((elemento, i) => (

                        <div class="col mb-3">
                            <div className="card Jumbo5 mx-md-3 Borde2 h-100 Sombra negroo">
                                <div className="card-header h4 Jumbo3 py-3 BordeV text3">{elemento.name}</div>
                                <div className="card-body">
                                    <img className="img-fluid rounded" src={elemento.imagen} />
                                </div>
                                <div className="card-footer BordeTV Jumbo6">
                                    <Reader text={elemento.name} />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            }




        </>
    )

}
