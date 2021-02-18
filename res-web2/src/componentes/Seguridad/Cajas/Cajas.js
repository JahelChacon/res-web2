import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Cajas(){
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
        { tipo: "texto", label: "Código del Registro", name: "codigo", placeholder: "Código del Registro", size: "pequeno" },
        { tipo: "texto", label: "Fecha del Registro", name: "fecha", placeholder: "Fecha del Registro", size: "pequeno" },
        { tipo: "texto", label: "Nombre del Restaurante", name: "restaurante", placeholder: "Nombre del Restaurante", size: "pequeno" },
        { tipo: "texto", label: "Apertura/Cierre caja", name: "aperturaCierreCaja", placeholder: "Apertura/Cierre caja", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Cajas"}
            tabla={TABLAS.CAJAS}
            columnas={columnas}
            filtros={filtros}
        />
    )
}