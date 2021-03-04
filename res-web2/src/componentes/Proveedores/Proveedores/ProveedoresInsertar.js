import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function ProveedoresInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información del proveedor',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Cédula", name: "cedula", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Fecha de Ingreso", name: "fechaIngreso", placeholder: "Fecha de Ingreso", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Primer Apellido", name: "segundoApellido", placeholder: "Primer Apellido", size: "grande" },
            { tipo: "texto", label: "Segundo Apellido", name: "primerApellido", placeholder: "Segundo Apellido", size: "grande" },
            { tipo: "texto", label: "Correo Electrónico", name: "correo", placeholder: "Correo Electrónico", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "texto", label: "Dirección", name: "direccion", placeholder: "Dirección", size: "grande" },
            { tipo: "texto", label: "Teléfono", name: "telefonoOficina", placeholder: "Teléfono", size: "grande" },
            { tipo: "texto", label: "Fax", name: "fax", placeholder: "Fax", size: "grande" },
            { tipo: "texto", label: "Celular", name: "celular", placeholder: "Celular", size: "grande" },
            { tipo: "SelectProductos", label: "Productos", name: "productos", size: "grande" },
            { tipo: "imagen", label: "Foto", name: "foto", placeholder: "Foto", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Proveedores"}
            tabla={TABLAS.PROVEEDORES}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}
