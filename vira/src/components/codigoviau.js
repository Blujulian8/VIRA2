import React from 'react'
import { db } from "../index";



function Prueba() {

    const [datos, setDatos] = React.useState([]);

    React.useEffect(() => {
        console.log("holaaaaaaaaaaaaaaaaaaaaaa");
        db.collection("Vira2020/categorias/categorias")
            .get()
            .then((querySnapshot) => {
                let datitos = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                    // console.log(`${doc.id} => ${doc.data()}`);
                });
                console.log("GG", datitos)
                return datitos;
            })
            .then((datitos) => setDatos(datitos))
            .catch((err) => console.log(err));
    }, []);

    console.log("HOlaa", datos);
    return (
        <div>
            {datos.map((elemento, i) => {
                console.log(elemento)
                return (
                    <p key={i}> "elemento" </p>
                )
            })}
        </div>
    );

}

export default Prueba;



