import React from "react";
import { db } from "../index";
import Reader from '../components/TextToSpeech';


export default function Subcategoria(props) {
    const [datos, setDatos] = React.useState(null);

    React.useEffect(() => {
        let datitos = [];
        db.collection(
            `Vira2020/categorias/${props.match.params.subcategoria}/${props.match.params.subsubcategoria}/${props.match.params.subsubcategoria}`
        )
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    datitos.push(data);
                    // console.log(`${doc.id} => ${doc.data()}`);
                });
                setDatos(datitos);
            });

        console.log(datitos)
    }, []);

    return (

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

    )
};
