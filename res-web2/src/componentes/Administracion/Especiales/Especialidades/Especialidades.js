import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Especialidades({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre del platillo", dataField: "nombre" },
        { text: "Ingredientes", dataField: "ingredientes" },
        { text: "Precio", dataField: "precio" },
        { text: "Detalle", dataField: "detalle" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre del platillo", name: "nombre", placeholder: "Nombre del platillo", size: "pequeno" },
        { tipo: "texto", label: "Ingredientes", name: "ingredientes", placeholder: "Ingredientes", size: "pequeno" },
        { tipo: "texto", label: "Precio", name: "precio", placeholder: "Precio", size: "pequeno" },
        { tipo: "texto", label: "Detalle", name: "detalle", placeholder: "Detalle", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Especialidades"}
            tabla={TABLAS.ESPECIAL}
            columnas={columnas}
            filtros={filtros}
            insertarURL='/especialidades/insertar'
            token={token}
            backURL="/especiales"
        />
    )
}
