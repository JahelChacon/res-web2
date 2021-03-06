import React from "react";
import Busqueda from "../../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../../utils/utils";

export default function Licores({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Precio Unitario", dataField: "precioUnitario" },
        { text: "Precio Botella", dataField: "precioBotella" },
        { text: "Nacionalidad", dataField: "nacionalidad" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "pequeno" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "numero", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "numero", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"marcas" , label: "Marca", name: "marca", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "mediano" },
        { tipo: "texto", label: "Precio Unitario", name: "precioUnitario", placeholder: "Precio Unitario", size: "mediano" },
        { tipo: "texto", label: "Precio Botella", name: "precioBotella", placeholder: "Precio Botella", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripción", placeholder: "Descripción", size: "mediano" },
        { tipo: "imagen", label: "foto del Licor", name: "foto", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Licores"}
            tabla={TABLAS.LICOR}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/bebidas"
            editarTitulo='Editar Licor'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}
