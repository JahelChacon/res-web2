import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function ProveedoresInsertar() {
    const camposDerecha = {
        titulo: 'Información del proveedor',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Segundo Apellido", name: "segundoApellido", placeholder: "Foto de la Marca", size: "grande" },
            { tipo: "texto", label: "Dirección", name: "direccion", placeholder: "Dirección", size: "grande" },
            { tipo: "texto", label: "Celular", name: "celular", placeholder: "Celular", size: "grande" },
            { tipo: "imagen", label: "URL Foto", name: "url", placeholder: "URL Foto", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: '       ',
        campos: [
            { tipo: "texto", label: "Cédula", name: "cedula", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Descripcion", size: "grande" },
            { tipo: "texto", label: "Correo Electrónico", name: "correo", placeholder: "Correo Electrónico", size: "grande" },
            { tipo: "texto", label: "Teléfono", name: "telefono", placeholder: "Teléfono", size: "grande" },
            { tipo: "texto", label: "Fax", name: "fax", placeholder: "Fax", size: "grande" },
            
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Proveedores"}
            tabla={TABLAS.PROVEEDORES}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
        />
    )
}
