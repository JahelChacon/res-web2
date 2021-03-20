import React from "react";
import Busqueda from "../../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../../utils/utils";

export default function Comestibles({ token, usuario }){
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
        { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "mediano" },
        { tipo: "texto", label: "Tipo", name: "tipo", placeholder: "Tipo", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "marcas", label: "Marca", name: "marca", size: "mediano" },
        { tipo: "texto", label: "Clase", name: "clase", placeholder: "Clase", size: "mediano" },
        { tipo: "texto", label: "Linea", name: "linea", placeholder: "Linea", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "unidadesDeMedida", label: "Unidad de Medida", name: "unidadDeMedida", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Comestibles"}
            tabla={TABLAS.COMESTIBLES}
            token={token}
            usuario={usuario}
            columnas={columnas}
            filtros={filtros}
            backURL="/productos"
            editarTitulo='Editar Comestible'
            editarCampos={editarCampos}
        />
    )
}