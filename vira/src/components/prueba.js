import React from 'react'
import { db } from "../index";

import Prueba from '../components/codigoviau'

function Pruebaa() {
    var categorias1 = ["Alimentos", "Bebidas", "Cuerpo", "Vestimenta"];
    var subcategoriasal = ["Colaciones", "Guarniciones", "Principales", "Frutas", "Verduras", "Postres"];
    var subcategorias2 = ["Calientes", "Frias"];
    //var estado;
    console.log("¨pito")


    return (
        <div>
            {Prueba("Vira2020/categorias/categorias")}
        </div>
        // if (estado === 0) {
        //     Prueba("Vira2020/categorias/categorias/categorias1[estado]");
        // }
        // if (estado === 1) {
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