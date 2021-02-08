import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function PaisesInsertar() {
    const camposDerecha = {
        titulo: 'Información de los paises',
        campos: [
            { tipo: "texto", label: "Código del País", name: "codigo", placeholder: "Código del País", size: "grande" },
            { tipo: "texto", label: "Nombre del País", name: "nombre", placeholder: "Nombre del País", size: "grande" },
            { tipo: "imagen", label: "Bandera del País", name: "imagen", placeholder: "Bandera del País", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Marcas"}
            tabla={TABLAS.PAIS}
            camposDerecha={camposDerecha}
        />
    )
}
