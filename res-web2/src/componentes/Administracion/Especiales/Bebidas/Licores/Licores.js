import React from "react";
import Busqueda from "../../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../../utils/utils";

export default function Licores({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Precio", dataField: "precio" },
        { text: "Nacionalidad", dataField: "nacionalidad" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "pequeno" },
        { tipo: "texto", label: "Precio", name: "precio", placeholder: "Precio", size: "pequeno" },
        { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Licores"}
            tabla={TABLAS.LICOR}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/bebidas"
        />
    )
}
