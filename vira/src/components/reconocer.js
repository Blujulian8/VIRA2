import React, { Component } from 'react'
import { db } from "../index";



export default function Recon() {
    const [datos, setDatos] = React.useState([]);

    React.useEffect(() => {
        db.doc("Vira2020/reconocer/Reconocer/Pie")
            .get()
            .then((querySnapshot) => {
                let datitos = [];
                //querySnapshot.forEach((doc) => {
                //  const data = doc.data();
                //datitos.push(data);
                // console.log(`${doc.id} => ${doc.data()}`);
                // });
                console.log(querySnapshot.data());
                return datitos;
            })
            .then((datitos) => setDatos(datitos))
            .catch((err) => console.log(err));
        console.log(datos);
    }, []);





    // var largo = datos.length;

    //var azar = Math.round(Math.random() * largo);

    //var pregunta = datos[azar]



    return (
        <div>
            <h1></h1>
        </div>
    )
}
