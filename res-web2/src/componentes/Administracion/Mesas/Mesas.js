import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Mesas({ token, usuario }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Numero", dataField: "numero" },
        { text: "Cantidad de Sillas", dataField: "sillas" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "pequeno" },
        { tipo: "numero", label: "Cantidad de Sillas", name: "sillas", placeholder: "Sillas", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "numero", label: "Numero", name: "numero", placeholder: "Numero", size: "mediano" },
        { tipo: "numero", label: "Cantidad de Sillas", name: "sillas", placeholder: "Sillas", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "SelectStatus", disabled: true, label: "Status", name: "status", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Mesas"}
            tabla={TABLAS.MESAS}
            columnas={columnas}
            filtros={filtros}
            token={token}
            usuario={usuario}
            backURL="/administracion"
            editarTitulo='Editar Mesa'
            editarCampos={editarCampos}
        />
    )
}