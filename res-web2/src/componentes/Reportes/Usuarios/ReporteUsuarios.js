import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function ReporteUsuarios({ token, usuario }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Monto Pagado", dataField: "montoPago" },
        { text: "Detalle", dataField: "detalle" },
        { text: "Fecha", dataField: "fecha" },
        { text: "Reservación", dataField: "reservacion" },
        { text: "Barra", dataField: "barra" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
        { tipo: "fecha", label: "Fecha - Inicio", name: "fechaInicio", size: "pequeno" },
        { tipo: "fecha", label: "Fecha - Final", name: "fechaFinal", size: "pequeno" },
        { tipo: "checkbox", label: "Barra", name: "barra", size: "pequeno" },
        { tipo: "checkbox", label: "Reservación", name: "reservacion", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Clientes"}
            tabla={TABLAS.CLIENTE}
            backURL="/reportes"
            columnas={columnas}
            filtros={filtros}
            token={token}
            usuario={usuario}
            soloBusqueda={true}
        />
    )
}