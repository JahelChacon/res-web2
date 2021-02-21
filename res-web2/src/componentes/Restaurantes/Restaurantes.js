import React from "react";
import Busqueda from "../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../utils/utils";

export default function Restaurantes({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Dirección", dataField: "direccion" },
        { text: "Cantidad de Clientes", dataField: "cantidadClientes" },
        { text: "Teléfono", dataField: "telefono" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Dirección", name: "direccion", placeholder: "Dirección", size: "pequeno" },
        { tipo: "numero", label: "Cantidad de Clientes", name: "cantidadClientes", placeholder: "Cantidad de Clientes", size: "pequeno" },
        { tipo: "texto", label: "Teléfono", name: "telefono", placeholder: "Teléfono", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Dirección", name: "direccion", placeholder: "Dirección", size: "mediano" },
        { tipo: "numero", label: "Cantidad de Clientes", name: "cantidadClientes", placeholder: "Cantidad de Clientes", size: "mediano" },
        { tipo: "texto", label: "Teléfono", name: "telefono", placeholder: "Teléfono", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Restaurantes"}
            tabla={TABLAS.RESTAURANTE}
            columnas={columnas}
            filtros={filtros}
            token={token}
            editarTitulo='Editar Restaurante'
            editarCampos={editarCampos}
        />
    )
}