import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Limpieza({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del artículo", name: "codigo", placeholder: "Código del artículo", size: "pequeno" },
        { tipo: "texto", label: "Nombre del artículo", name: "nombre", placeholder: "Nombre del artículo", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Limpieza e Higiene"}
            tabla={TABLAS.LIMPIEZA}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/productos"
        />
    )
}