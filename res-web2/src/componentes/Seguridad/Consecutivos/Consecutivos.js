import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Consecutivos({ token, usuario }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Descripción", dataField: "descripcion" },
        { text: "Colección", dataField: "tabla" },
        { text: "Valor", dataField: "valor" },
        { text: "Tiene Prefijo", dataField: "tienePrefijo" },
        { text: "Prefijo", dataField: "prefijo" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "mediano" },
        { tipo: "texto", label: "Colección", name: "tabla", placeholder: "Colección", size: "mediano" },
        { tipo: "texto", readOnly: true, label: "Valor", name: "valor", placeholder: "Valor", size: "mediano" },
        { tipo: "texto", label: "Prefijo", name: "prefijo", placeholder: "Prefijo", size: "mediano" },
        { tipo: "checkbox", label: "Tiene Prefijo", name: "tienePrefijo", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Consecutivos"}
            tabla={TABLAS.CONSECUTIVO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            usuario={usuario}
            backURL="/seguridad"
            editarTitulo='Editar Consecutivo'
            editarCampos={editarCampos}
            soloEditar={true}
        />
    )
}