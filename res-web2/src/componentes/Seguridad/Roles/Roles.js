import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Roles({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre del Rol", dataField: "nombre" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código de Rol", name: "codigo", placeholder: "Código de Rol", size: "pequeno" },
        { tipo: "texto", label: "Nombre de Rol", name: "nombre", placeholder: "Nombre de Rol", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código del Rol", name: "codigo", placeholder: "Código del Rol", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Roles"}
            tabla={TABLAS.ROL}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/seguridad"
            editarTitulo='Editar Rol'
            editarCampos={editarCampos}
        />
    )
}