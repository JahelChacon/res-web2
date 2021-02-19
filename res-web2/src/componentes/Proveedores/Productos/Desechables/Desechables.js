import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Desechables(){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del empaque", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre del empaque", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Nombre del Restaurante", name: "restaurante", placeholder: "Restaurante", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Desechables"}
            tabla={TABLAS.DESECHABLES}
            columnas={columnas}
            filtros={filtros}
            backURL="/productos"
        />
    )
}