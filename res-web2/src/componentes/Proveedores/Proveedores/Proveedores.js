import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Proveedores({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Primer Apellido", dataField: "primerApellido" },
        { text: "Segundo Apellido", dataField: "segundoApellido" },
        { text: "Teléfono Oficina", dataField: "telefonoOficina" },
        { text: "Fax", dataField: "fax" },
        { text: "Celular", dataField: "celular" },
        { text: "Cédula", dataField: "cedula" }
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Cédula", name: "cedula", placeholder: "Cédula", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Cédula", name: "cedula", placeholder: "Nombre", size: "mediano" },
        { tipo: "fecha", label: "Fecha de Ingreso", name: "fechaIngreso", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "mediano" },
        { tipo: "texto", label: "Primer Apellido", name: "segundoApellido", placeholder: "Primer Apellido", size: "mediano" },
        { tipo: "texto", label: "Segundo Apellido", name: "primerApellido", placeholder: "Segundo Apellido", size: "mediano" },
        { tipo: "texto", label: "Correo Electrónico", name: "correo", placeholder: "Correo Electrónico", size: "mediano" },
        { tipo: "texto", label: "Dirección", name: "direccion", placeholder: "Dirección", size: "mediano" },
        { tipo: "texto", label: "Teléfono", name: "telefonoOficina", placeholder: "Teléfono", size: "mediano" },
        { tipo: "texto", label: "Fax", name: "fax", placeholder: "Fax", size: "mediano" },
        { tipo: "texto", label: "Celular", name: "celular", placeholder: "Celular", size: "mediano" },
        { tipo: "SelectProductos", label: "Productos", name: "productos", size: "mediano" },
        { tipo: "imagen", label: "Foto", name: "foto", placeholder: "Foto", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Proveedores"}
            tabla={TABLAS.PROVEEDORES}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/proveedores-inicio"
            editarTitulo='Editar Proveedor'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}