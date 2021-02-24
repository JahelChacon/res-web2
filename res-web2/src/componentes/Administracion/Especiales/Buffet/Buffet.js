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

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "mediano" },
        { tipo: "texto", label: "Tipo", name: "tipo", placeholder: "Tipo", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "unidadesDeMedida", label: "Unidad De Medida", name: "unidadDeMedida", size: "mediano" },
        { tipo: "imagen", label: "Foto del platillo", name: "foto", size: "mediano" },
    ];


    return (
        <Busqueda
            titulo={"Buffet"}
            tabla={TABLAS.BUFFET}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/especiales"
            editarTitulo='Editar Buffet'
            editarCampos={editarCampos}
        />
    )
}
