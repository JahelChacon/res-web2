import React from "react";
import Busqueda from "../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../utils/utils";

export default function Clientes({ token }) {
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
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
        { tipo: "fecha", label: "Fecha - Inicio", name: "fechaInicio", size: "x-pequeno" },
        { tipo: "fecha", label: "Fecha - Final", name: "fechaInicio", size: "x-pequeno" },
        { tipo: "fecha", label: "Fecha Reservación - Inicio", name: "fechaInicio", size: "x-pequeno" },
        { tipo: "fecha", label: "Fecha Reservación - Final", name: "fechaInicio", size: "x-pequeno" },
        { tipo: "radio", label: "Barra", name: "barra", value: 'barra', size: "x-pequeno" },
        { tipo: "radio", label: "Reservación", name: "reservacion", value: 'reservacion', size: "x-pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Clientes"}
            tabla={TABLAS.CLIENTE}
            columnas={columnas}
            filtros={filtros}
            token={token}
            soloBusqueda={true}
        />
    )
}