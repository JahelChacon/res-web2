import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Puestos({ token, usuario }) {
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
        { tipo: "checkbox", label: "Interno", name: "interno", size: "x-pequeno" },
        { tipo: "checkbox", label: "Externo", name: "externo", size: "x-pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "checkbox", label: "Interno", name: "interno", size: "mediano" },
        { tipo: "checkbox", label: "Externo", name: "externo", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "roles", label: "Rol", name: "rol", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Puestos"}
            tabla={TABLAS.PUESTO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            usuario={usuario}
            backURL="/administracion"
            editarTitulo='Editar Puesto'
            editarCampos={editarCampos}
        />
    )
}
