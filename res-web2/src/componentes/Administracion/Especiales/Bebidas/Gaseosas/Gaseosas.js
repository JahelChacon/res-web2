import React from "react";
import Busqueda from "../../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../../utils/utils";

export default function Gaseosas({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Precio", dataField: "precio" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Precio", name: "precio", placeholder: "Precio", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Bebidas Gaseosas"}
            tabla={TABLAS.BEBIDA_GASEOSA}
            columnas={columnas}
            filtros={filtros}
            insertarURL='/gaseosas/insertar'
            token={token}
        />
    )
}
