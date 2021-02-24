import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function UnidadMedida({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Unidad de Medida", dataField: "unidad" },
        { text: "Escala", dataField: "escala" },
        { text: "Detalle", dataField: "detalle" },
        { text: "Simbologia", dataField: "simbologia" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Detalle", name: "detalle", placeholder: "Detalle", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Unidad de Medida", name: "unidad", placeholder: "Unidad de Medida", size: "mediano" },
        { tipo: "texto", label: "Escala", name: "escala", placeholder: "Escala", size: "mediano" },
        { tipo: "texto", label: "Detalle", name: "detalle", placeholder: "Detalle", size: "mediano" },
        { tipo: "texto", label: "Simbolo", name: "simbolo", placeholder: "Simbolo", size: "mediano" },
        { tipo: "texto", label: "Simbologia", name: "simbologia", placeholder: "Simbologia", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Unidades de Medida"}
            tabla={TABLAS.UNIDAD_DE_MEDIDA}
            columnas={columnas}
            filtros={filtros}
            token={token}
            insertarURL='/medidas/insertar'
            backURL="/seguridad"
            editarTitulo='Editar Unidad de Medida'
            editarCampos={editarCampos}
        />
    )
}
