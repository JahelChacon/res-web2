import React from "react";
import Busqueda from "../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../utils/utils";

export default function ProcesosBarras({ token, usuario }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Monto Pagado", dataField: "montoPago" },
        { text: "Fecha", dataField: "fecha" },
        { text: "Reservación", dataField: "reservacion" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Clientes en Barras"}
            tabla={TABLAS.CLIENTE}
            editarCampos='EditarClienteBarra'
            tamano='xl'
            barra={true}
            usuario={usuario}
            columnas={columnas}
            filtros={filtros}
            noEliminar={true}
            token={token}
            soloEditar={true}
            editarTitulo='Editar Cliente'
        />
    )
}
