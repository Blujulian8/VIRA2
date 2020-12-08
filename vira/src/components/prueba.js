import React from 'react'
import { Link } from 'react-router-dom';
import { db } from "../index";


export default function Lista() {

    const [datos, setDatos] = React.useState([]);


    React.useEffect(() => {
        db.collection("Vira2020/categorias/categorias")
            .get()
            .then((querySnapshot) => {
                let datitos = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                    // console.log(`${doc.id} => ${doc.data()}`);
                });

                setDatos(datitos);
            })
    }, []);


    //BORRAR ESTOOOO
    // var categorias1 = ["Alimentos", "Bebidas", "Cuerpo", "Vestimenta"];
    // var subcategoriasal = ["Colaciones", "Guarniciones", "Principales", "Frutas", "Verduras", "Postres"];
    // var subcategorias2 = ["Calientes", "Frias"];

    React.useEffect(() => {
        // ForE(Prueba);
        // console.log(Prueba)
    }, []);


    const header = () => {
        if (datos !== []) {

            return (
                <div className="row row-cols-1 row-cols-md-2 text-center mt-3 mt-md-4">
                    {datos.map((elemento, i) => {
                        return (
                            <div className="col mb-4">
                                <div className="card Jumbo5 mx-md-3 Borde2 h-100 HoverCard2 Sombra negroo">
                                    <Link key={i} to={{ pathname: "/Categoria", state: { nombre: elemento.name } }} className="Tarjeta">
                                        <div className="card-header h4 Jumbo3 py-3 BordeV text3">{elemento.name}</div>
                                        <div className="card-body">
                                            <img className="imagen imagenCat Borde" src={elemento.imagen} alt={elemento.imagen} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                    }
                </div >
            );
        }
        else {
            return (datos)
        }
    }


    return (
        <div>
            {header()}
        </div>
    );
}
