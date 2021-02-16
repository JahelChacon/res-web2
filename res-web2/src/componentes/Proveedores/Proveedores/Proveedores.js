import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Proveedores(){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombreMarca" },
        { text: "Primer Apellido", dataField: "primerApellido" },
        { text: "Segundo Apellido", dataField: "segundoApellido" },
        { text: "Teléfono", dataField: "telefono" },
        { text: "Fax", dataField: "fax" },
        { text: "Celular", dataField: "celular" }
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "pequeno" },
        { tipo: "texto", label: "Segundo Apellido", name: "segundoApellido", placeholder: "Segundo Apellido", size: "pequeno" },
        { tipo: "texto", label: "Teléfono", name: "telefono", placeholder: "Teléfono", size: "pequeno" },
        { tipo: "texto", label: "Fax", name: "fax", placeholder: "Fax", size: "pequeno" },
        { tipo: "texto", label: "Celular", name: "celular", placeholder: "Celular", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Proveedores"}
            tabla={TABLAS.PROVEEDORES}
            columnas={columnas}
            filtros={filtros}
        />
    )
}