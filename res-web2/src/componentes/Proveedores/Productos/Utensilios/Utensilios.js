import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Utensilios({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del equipo", name: "codigo", placeholder: "Código del equipo", size: "pequeno" },
        { tipo: "texto", label: "Nombre del equipo", name: "nombre", placeholder: "Nombre del equipo", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Equipos y Utensilios"}
            tabla={TABLAS.UTENSILIO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/productos"
        />
    )
}