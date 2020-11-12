import React from 'react'
import { db } from "../index";



function Prueba() {

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
                return datitos;
            })
            .then((datitos) => setDatos(datitos))
            .catch((err) => console.log(err));
    }, []);

    console.log(datos);
    return (
        <>
            {datos.map((dato, index) => {
                return <h6 key={index}>{dato.name}</h6>;
            })}{" "}
        </>
    );

}

export default Prueba;
//HACER QUE EK EXPORT SEA DE DATOS???

