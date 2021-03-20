import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Bitacoras({ token, usuario }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Usuario", dataField: "usuario" },
        { text: "Fecha y Hora", dataField: "fechaHora" },
        { text: "Descripción", dataField: "descripcion" },
    ];

    const filtros = [
        { tipo: "texto", label: "Usuario", name: "usuario", placeholder: "Usuario", size: "pequeno" },
        { tipo: "fecha", label: "Fecha - Inicio", name: "fechaInicio", size: "pequeno" },
        { tipo: "fecha", label: "Fecha - Final", name: "fechaFinal", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Bitácora"}
            tabla={TABLAS.BITACORA}
            columnas={columnas}
            filtros={filtros}
            token={token}
            usuario={usuario}
            backURL="/reportes"
            soloBusqueda={true}
        />
    )
}