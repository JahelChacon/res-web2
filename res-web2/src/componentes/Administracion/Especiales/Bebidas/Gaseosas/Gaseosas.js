import React from "react";
import Busqueda from "../../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../../utils/utils";

export default function Gaseosas({ token }) {
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
        { tipo: "SelectFromApi", tabla:"marcas" , label: "Marca", name: "marca", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "mediano" },
        { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "mediano" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "mediano" },
        { tipo: "imagen", label: "foto de la Gaseosa", name: "foto", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Bebidas Gaseosas"}
            tabla={TABLAS.BEBIDA_GASEOSA}
            columnas={columnas}
            filtros={filtros}
            insertarURL='/gaseosas/insertar'
            token={token}
            backURL="/bebidas"
            editarTitulo='Editar Bebida Gaseosa'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}
