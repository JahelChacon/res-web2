import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Buffet({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Precio", dataField: "precio" },
        { text: "Tipo", dataField: "tipo" },
        { text: "Unidad de Medida", dataField: "unidadDeMedida" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Buffet"}
            tabla={TABLAS.BUFFET}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/especiales"
        />
    )
}
