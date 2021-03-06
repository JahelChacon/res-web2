import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Paises({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código del País", name: "codigo", placeholder: "Código del País", size: "mediano" },
        { tipo: "texto", label: "Nombre del País", name: "nombre", placeholder: "Nombre del País", size: "mediano" },
        { tipo: "imagen", label: "Bandera del País", name: "imagen", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Países"}
            tabla={TABLAS.PAIS}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/seguridad"
            editarTitulo='Editar País'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}
