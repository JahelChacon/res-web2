import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Marcas() {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombreMarca" },
        { text: "Descripcion", dataField: "descripcionMarca" },
        { text: "Nacionalidad", dataField: "nacionalidad" },
        { text: "Empresa", dataField: "nombreEmpresa" },
        { text: "Telefono", dataField: "telefonoEmpresa" }
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Empresa", name: "empresa", placeholder: "Empresa", size: "pequeno" },
        { tipo: "nacionalidad", label: "Nacionalidad", name: "nacionalidad", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Marcas"}
            tabla={TABLAS.MARCA}
            columnas={columnas}
            filtros={filtros}
        />
    )
}