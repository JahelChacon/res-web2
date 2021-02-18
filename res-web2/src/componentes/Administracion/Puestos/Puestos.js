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
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Rol", name: "rol", placeholder: "Rol", size: "pequeno" },
        { tipo: "radio", label: "Interno", name: "trabajador", value:'interno', size: "pequeno" },
        { tipo: "radio", label: "Externo", name: "trabajador", value:'externo', size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Puestos"}
            tabla={TABLAS.PUESTO}
            columnas={columnas}
            filtros={filtros}
            token={token}
        />
    )
}
