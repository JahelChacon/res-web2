import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Cajas({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Fecha", dataField: "fecha" },
        { text: "Descripción", dataField: "descripcion" },
        { text: "Entrada de Dinero", dataField: "dineroRecibido" },
        { text: "Apertura de Caja", dataField: "aperturaCaja" },
        { text: "Cierre de Caja", dataField: "cierreCaja" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "fecha", label: "Fecha", name: "fecha", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
        { tipo: "checkbox", label: "Apertura de caja", name: "aperturaCaja", size: "pequeno" },
        { tipo: "checkbox", label: "Cierre de caja", name: "cierreCaja", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "fecha", label: "Fecha", name: "fecha", size: "mediano" },
        { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "mediano" },
        { tipo: "numero", label: "Entrada de Dinero", name: "dineroRecibido", placeholder: "Entrada de Dinero", size: "mediano" },
        { tipo: "checkbox", label: "Apertura de caja", name: "aperturaCaja", size: "mediano" },
        { tipo: "checkbox", label: "Cierre de caja", name: "cierreCaja", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Cajas"}
            tabla={TABLAS.CAJAS}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/seguridad"
            editarTitulo='Editar Caja'
            editarCampos={editarCampos}
            soloEditar={true}
        />
    )
}