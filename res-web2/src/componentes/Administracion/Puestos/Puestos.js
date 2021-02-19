import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Puestos({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Rol", dataField: "rol" },
        { text: "Interno al Restaurante", dataField: "interno" },
        { text: "Externo al Restaurante", dataField: "externo" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Rol", name: "rol", placeholder: "Rol", size: "mediano" },
        { tipo: "radio", label: "Interno", name: "trabajador", value: 'interno', size: "mediano" },
        { tipo: "radio", label: "Externo", name: "trabajador", value: 'externo', size: "mediano" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "radio", label: "Interno", name: "trabajador", value: 'interno', size: "mediano" },
        { tipo: "radio", label: "Externo", name: "trabajador", value: 'externo', size: "mediano" },
        { tipo: "SelectFromApi", tabla: "roles", label: "Rol", name: "rol", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Puestos"}
            tabla={TABLAS.PUESTO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/administracion"
            editarTitulo='Editar Puesto'
            editarCampos={editarCampos}
        />
    )
}
