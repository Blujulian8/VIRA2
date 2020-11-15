import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";

import "./styles/General.css";
import "./styles/Navs.css";
import "./styles/Cajas.css";
import "./styles/CajaBordes.css";
import "./styles/Botones.css";
import "./styles/BotonesRespuestas.css";
import "./styles/Tarjetas.css";
import "./styles/Icons.css";
import "./styles/Fotos.css";

import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { db } from "./index";
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Atras from './components/atras'

import Inicio from './screens/inicio';
import Elegir from './screens/elegir';
import Afasia from './screens/afasia';
import Nosotros from './screens/nosotros';
import ListaElementos from './screens/listaelementos';
import ReconoceElemento from './screens/reconoceelemento';
import ReconoceFrase from './screens/reconocefrase';
import RepetirOracion from './screens/repetiroracion';

import Lista from './components/prueba';
import Categoria from './components/categoria';
import Subcategoria from './components/subcategoria.js'

import ATRAS from './icons/back.svg'

function App() {

	//REPETIR (.THEN , .TOLOWERCASE, EXPORTAR RESULTADO) - RETROCEDER - FOOTER CAMBIAR CONTENIDO
	//SE BORRARIN LAS FOTOS DE LAS CATEGORIAS DE BEBIDAS
	function goBack() {
		window.history.go(-1);
	}

	return (
		<Router>
			<div className="Fond0">
				<Navbar />

				{/* <div className="mt-3" >
					<a className="p-3 mx-5 btn Boton Boton3sin Jumbo6 Borde" role="button" onClick={goBack()}>
						<img src={ATRAS} className="IconoXS my-auto" alt="Escuchar" />
					</a>
				</div> */}

				<div className="container Content">
					<Switch>
						<Route path="/" exact component={Inicio} />
						<Route path="/Elegir" component={Elegir} />
						<Route path="/Afasia" component={Afasia} />
						<Route path="/Nosotros" component={Nosotros} />

						<Route path="/ListaElementos" component={ListaElementos} />
						<Route path="/ReconoceElemento" component={ReconoceElemento} />
						<Route path="/ReconoceFrase" component={ReconoceFrase} />
						<Route exact path="/RepiteOracion" component={RepetirOracion} />

						<Route exact path="/Categoria" component={Categoria} />

						<Route exact path="/Lista" component={Lista} />
						<Route exact path="/categoria/:subcategoria/:subsubcategoria" component={Subcategoria} />
					</Switch>
				</div>

				<Navbar2 />
			</div>
		</Router>
	)
}

export default App;
