import React from 'react'
import { Link } from 'react-router-dom';
import { db } from "../index";
import Reader from '../components/TextToSpeech';

export default function Categoria(props) {
    console.log(props.location.state)
    const [datos, setDatos] = React.useState(null)

    React.useEffect(() => {
        let datitos = [];
        db.collection(`Vira2020/categorias/${props.location.state.nombre}`)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                });
                setDatos(datitos)
            })

    }, [])


    return (
        <>
            {/* <h2>{props.location.state.nombre}</h2> */}

            {datos ? console.log(datos) : console.log("che esta vacio pete")}


            {props.location.state.nombre === "Alimentos" || props.location.state.nombre === "Bebidas" ?
                <div className="row row-cols-1 row-cols-md-2 text-center mt-3 mt-md-4">
                    {datos && datos.map((elemento, i) => (

                        <div className="col mb-4">
                            <div className="card Jumbo5 mx-md-3 Borde2 h-100 HoverCard2 Sombra negroo">
                                <Link key={i} to={`/categoria/${props.location.state.nombre}/${elemento.name}`} className="Tarjeta">

                                    <div className="card-header h4 Jumbo3 py-3 BordeV text3">{elemento.name}</div>
                                    <div className="card-body">
                                        <img className="imagen imagenCat Borde" src={elemento.imagen} alt={elemento.name} />
                                    </div>
                                </Link>
                            </div>
                        </div>

                    ))
                    }

                </div >

                :

                <div className="row row-cols-1 row-cols-md-3 text-center mt-3 mt-md-4">
                    {datos && datos.map((elemento, i) => (

                        <div class="col mb-4">
                            <div className="card Jumbo5 mx-md-3 Borde2 h-100 Sombra negroo">
                                <div className="card-header h4 Jumbo3 py-3 BordeV text3">{elemento.name}</div>
                                <div className="card-body">
                                    <img className="imagenEle rounded" src={elemento.imagen} alt={elemento.name} />
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
