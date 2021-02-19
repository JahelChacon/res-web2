import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Tecnologia(){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del artefacto", name: "codigo", placeholder: "Código del artefacto", size: "pequeno" },
        { tipo: "texto", label: "Nombre del artefacto", name: "nombre", placeholder: "Nombre del artefacto", size: "pequeno" },
        { tipo: "texto", label: "Nombre del Restaurante", name: "restaurante", placeholder: "Nombre del Restaurante", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Tecnología"}
            tabla={TABLAS.TECNOLOGIA}
            columnas={columnas}
            filtros={filtros}
            backURL="/productos"
        />
    )
}