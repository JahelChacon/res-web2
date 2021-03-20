import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Facturas({ token, usuario }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Fecha", dataField: "fecha" },
        { text: "Descripción", dataField: "descripcion" },
        { text: "Entrada de Dinero", dataField: "dineroRecibido" },
        { text: "Apertura de Caja", dataField: "aperturaCaja" },
        { text: "Cierre de Caja", dataField: "cierreCaja" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    return (
        <Busqueda
            titulo={"Facturas"}
            tabla={TABLAS.FACTURA}
            backURL="/reportes"
            columnas={columnas}
            token={token}
            usuario={usuario}
            soloBusqueda={true}
            soloTabla={true}
        />
    )
}