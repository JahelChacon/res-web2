import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Consecutivos(){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Fecha de Registro", dataField: "fechaRegistro" },
        { text: "Descripción", dataField: "descripcion" },
        { text: "Entrada de Dinero", dataField: "entradaDinero" },
        { text: "Apertura de Caja", dataField: "aperturaCaja" },
        { text: "Cierre de Caja", dataField: "cierreCaja" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del Consecutivo", name: "codigo", placeholder: "Código del Consecutivo", size: "pequeno" },
        { tipo: "texto", label: "Descripción del Consecutivo", name: "descripcion", placeholder: "Descripción del Consecutivo", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Consecutivos"}
            tabla={TABLAS.CONSECUTIVO}
            columnas={columnas}
            filtros={filtros}
            backURL="/seguridad"
        />
    )
}