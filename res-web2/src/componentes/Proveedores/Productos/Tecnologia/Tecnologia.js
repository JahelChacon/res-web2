import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Tecnologia({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del artefacto", name: "codigo", placeholder: "Código del artefacto", size: "pequeno" },
        { tipo: "texto", label: "Nombre del artefacto", name: "nombre", placeholder: "Nombre del artefacto", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Tecnología"}
            tabla={TABLAS.TECNOLOGIA}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/productos"
        />
    )
}