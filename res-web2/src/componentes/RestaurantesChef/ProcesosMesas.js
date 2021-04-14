import React from "react";
import Busqueda from "../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../utils/utils";

export default function ProcesosMesas({ token }) {
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
            titulo={"Clientes en Mesas"}
            tabla={TABLAS.CLIENTE}
            editarCampos='EditarClienteMesa'
            tamano='xl'
            mesas={true}
            columnas={columnas}
            filtros={filtros}
            token={token}
            soloEditar={true}
            editarTitulo='Editar Cliente'
        />
    )
}
