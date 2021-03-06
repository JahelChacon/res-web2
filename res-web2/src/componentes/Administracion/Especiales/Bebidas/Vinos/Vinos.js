import React from "react";
import Busqueda from "../../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../../utils/utils";

export default function Vinos({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Precio Unitario", dataField: "precioUnitario" },
        { text: "Precio Botella", dataField: "precioBotella" },
        { text: "Nacionalidad", dataField: "nacionalidad" },
        { text: "Cosecha", dataField: "cosecha" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Año", name: "año", placeholder: "Año", size: "pequeno" },
        { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "pequeno" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Cosecha", name: "cosecha", placeholder: "Cosecha", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"marcas" , label: "Marca", name: "marca", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "mediano" },
        { tipo: "numero", label: "Precio Unitario", name: "precioUnitario", placeholder: "Precio Unitario", size: "mediano" },
        { tipo: "numero", label: "Precio Botella", name: "precioBotella", placeholder: "Precio Botella", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "texto", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "mediano" },
        { tipo: "imagen", label: "foto del Vino", name: "foto", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Vinos"}
            tabla={TABLAS.VINO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/bebidas"
            editarTitulo='Editar Vino'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}
