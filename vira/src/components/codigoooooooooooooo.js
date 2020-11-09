// import React from 'react';
// import { db } from "../index";


// class Mostrador extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             type = this.props.type,
//             categorias=[]
//         }
//     }

//     render() {


//         onComponentDidMount(){
//             //agarrar las subcategorias de la base de datos
//             //de la categoria "type"

//             const [datos, setDatos] = React.useState([]);
//             React.useEffect(() => {
//                 db.collection("Vira2020/Categorías")
//                     .get()
//                     .then((querySnapshot) => {
//                         let datitos = [];
//                         querySnapshot.forEach((doc) => {
//                             const data = doc.data();
//                             datitos.push(data);
//                             // console.log(`${doc.id} => ${doc.data()}`);
//                         });
//                         return datitos;
//                     })
//                     .then((datitos) => setDatos(datitos))
//                     .catch((err) => console.log(err));
//             }, []);



//             var subcategorias = fb.traemeSubcategorias(this.state.type); // [{nombre:"prendas",elementos:[]}, ""]
//             setState({ categoras: subcategorias })

//         }


//         return (
//             <div>
//                 {this.state.categorias.length > 0 ? (
//                     this.state.categorias.map(categoria => {
//                         <h1>{categoria.nombre}</h1>;
//                         <img src={categoria.pfp} alt={categoria.nombre} />
//                     })
//                 ) : (
//                         <p> no hay subcategorias </p>
//                     )}
//             </div>
//         )


//     }
// }