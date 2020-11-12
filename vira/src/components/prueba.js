import React from 'react'
import { db } from "../index";

import datos from '../components/codigoviau'

function Pruebaa() {
    var categorias1 = ["Alimentos", "Bebidas", "Cuerpo", "Vestimenta"];
    var subcategoriasal = ["Colaciones", "Guarniciones", "Principales", "Frutas", "Verduras", "Postres"];
    var subcategorias2 = ["Calientes", "Frias"];

    const [lista, setLista] = React.useState();
    //var estado;
    console.log("pito")



    function SacarDB(props) {
        React.useEffect(() => {
            db.doc("Vira2020/categorias/categorias/" + props)
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
                    setLista(datitos);
                })
                .catch((err) => console.log(err));


        }, []);
    }

    const Newarray = datos.map()

    function ForE(datu) {
        datu.forEach((datu) => SacarDB(datu))
    }


    ForE(datos)


    return (
        <>
            <h1>HOLAA</h1>
        </>
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


