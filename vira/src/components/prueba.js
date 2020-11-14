import React from 'react'
import { Link } from 'react-router-dom';
import { db } from "../index";

// import Prueba from '../components/codigoviau'

function Pruebaa() {

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


    var categorias1 = ["Alimentos", "Bebidas", "Cuerpo", "Vestimenta"];
    var subcategoriasal = ["Colaciones", "Guarniciones", "Principales", "Frutas", "Verduras", "Postres"];
    var subcategorias2 = ["Calientes", "Frias"];

    const [lista, setLista] = React.useState();
    //var estado;

    React.useEffect(() => {
        // ForE(Prueba);
        // console.log(Prueba)
    }, []);

    // const SacarDB = (props) => {
    //     React.useEffect(() => {
    //         db.doc("Vira2020/categorias/categorias/" + props)
    //             .get()
    //             .then((querySnapshot) => {
    //                 let datitos = [];
    //                 querySnapshot.forEach((doc) => {
    //                     const data = doc.data();
    //                     datitos.push(data);
    //                     // console.log(`${doc.id} => ${doc.data()}`);
    //                 });
    //                 return datitos;
    //             })
    //             .then((datitos) => {
    //                 setLista(datitos);
    //             })
    //             .catch((err) => console.log(err));


    //     }, []);
    // }


    const header = () => {
        if (datos !== []) {

            return (
                <div>
                    {datos.map((elemento, i) => {
                        // console.log(elemento)
                        return (
                            // <a className="btn" key={i}> {elemento.name} </a>
                            <Link key={i} to={{ pathname: "/categoria", state: { nombre: elemento.name } }} >{elemento.name}</Link>
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

    // const Newarray = datos.map()

    // const ForE = (datu) => {
    //     datu.forEach((datu) => SacarDB(datu))
    // }




    return (
        <div>
            {header()}
        </div>
        // < div >
        //     { Prueba("Vira2020/categorias/categorias") }
        // </div >
        //     Prueba("Vira2020/categorias/categorias/categorias1[estado]");
        // }
        //     Prueba("Vira2020/categorias/categorias/categorias1[estado]");
        // }
        // if (estado === 2) {
        //     Prueba("¨Vira2020/categorias/categorias1[estado]/Partes de Nuestro Cuerpo/Partes de Nuestro Cuerpo");
        // }
        // if (estado === 3) {
        //     Prueba("¨Vira2020/categorias/categorias1[estado]/Prendas/Prendas");
        // }
    );
}
export default Pruebaa


