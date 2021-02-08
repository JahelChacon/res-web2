import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Marcas() {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "imagen", label: "Bandera", name: "imagen", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Países"}
            tabla={TABLAS.PAIS}
            columnas={columnas}
            filtros={filtros}
        />
    )
}
