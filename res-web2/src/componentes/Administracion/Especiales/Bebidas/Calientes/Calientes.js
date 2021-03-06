import React from "react";
import Busqueda from "../../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../../utils/utils";

export default function Calientes({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Precio", dataField: "precio" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Ingredientes", name: "ingredientes", placeholder: "Ingredientes", size: "mediano" },
        { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "mediano" },
        { tipo: "imagen", label: "foto de la Bebida", name: "foto", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Bebidas Calientes"}
            tabla={TABLAS.BEBIDA_CALIENTE}
            columnas={columnas}
            filtros={filtros}
            insertarURL='/bebidas-calientes/insertar'
            token={token}
            backURL="/bebidas"
            editarTitulo='Editar Bebida Caliente'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}
