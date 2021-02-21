import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Empleados({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Cedula", dataField: "cedula" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Primer Apellido", dataField: "primerApellido" },
        { text: "Segundo Apellido", dataField: "segundoAppelido" },
        { text: "Telefono 1", dataField: "telefono1" },
        { text: "Telefono 2", dataField: "telefono2" },
        { text: "Puesto", dataField: "puesto" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Cedula", name: "cedula", placeholder: "Cedula", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "pequeno" },
        { tipo: "texto", label: "Segundo Apellido", name: "segundoAppelido", placeholder: "Segundo Apellido", size: "pequeno" },
        { tipo: "texto", label: "Telefono 1", name: "telefono1", placeholder: "Telefono 1", size: "pequeno" },
        { tipo: "texto", label: "Telefono 2", name: "telefono2", placeholder: "Telefono 2", size: "pequeno" },
        { tipo: "texto", label: "Puesto", name: "puesto", placeholder: "Puesto", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Cedula", name: "cedula", placeholder: "Cedula", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "mediano" },
        { tipo: "texto", label: "Segundo Apellido", name: "segundoAppelido", placeholder: "Segundo Apellido", size: "mediano" },
        { tipo: "texto", label: "Telefono 1", name: "telefono1", placeholder: "Telefono 1", size: "mediano" },
        { tipo: "texto", label: "Telefono 2", name: "telefono2", placeholder: "Telefono 2", size: "mediano" },
        { tipo: "texto", label: "Puesto", name: "puesto", placeholder: "Puesto", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "paises", label: "Nacionalidad", name: "nacionalidad", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "mediano" },
        { tipo: "imagen", label: "Foto del Empleado", name: "foto", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Empleados"}
            tabla={TABLAS.EMPLEADO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/administracion"
            editarTitulo='Editar Empleado'
            editarCampos={editarCampos}
        />
    )
}
