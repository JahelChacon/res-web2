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
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "marcas", label: "Marca", name: "marca", size: "mediano" },
        { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "mediano" },
        { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Tecnología"}
            tabla={TABLAS.TECNOLOGIA}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/productos"
            editarTitulo='Editar Tecnologia'
            editarCampos={editarCampos}
        />
    )
}