import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Especialidades({ token, usuario }) {
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
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Ingredientes", name: "ingredientes", placeholder: "Ingredientes", size: "mediano" },
        { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "mediano" },
        { tipo: "texto", label: "Detalle", name: "detalle", placeholder: "Detalle", size: "mediano" },
        { tipo: "imagen", label: "foto de la Especialidad", name: "foto", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Especialidades"}
            tabla={TABLAS.ESPECIALIDAD}
            columnas={columnas}
            filtros={filtros}
            insertarURL='/especialidades/insertar'
            token={token}
            usuario={usuario}
            backURL="/especiales"
            editarTitulo='Editar Especialidad'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}
