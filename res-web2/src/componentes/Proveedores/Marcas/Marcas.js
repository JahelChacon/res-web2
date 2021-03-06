import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Marcas({ token }) {
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombreMarca" },
        { text: "Descripcion", dataField: "descripcionMarca" },
        { text: "Nacionalidad", dataField: "nacionalidad" },
        { text: "Empresa", dataField: "nombreEmpresa" },
        { text: "Telefono", dataField: "telefonoEmpresa" }
    ];

    const filtros = [
        { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "pequeno" },
        { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "pequeno" },
        { tipo: "texto", label: "Empresa", name: "empresa", placeholder: "Empresa", size: "pequeno" },
        { tipo: "SelectFromApi", tabla: "paises", label: "Nacionalidad", name: "nacionalidad", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "mediano" },
        { tipo: "texto", label: "Nombre", name: "nombreMarca", placeholder: "Nombre", size: "mediano" },
        { tipo: "SelectFromApi", tabla: "paises", label: "Nacionalidad", name: "nacionalidad", size: "mediano" },
        { tipo: "texto", label: "Descripcion", name: "descripcionMarca", placeholder: "Descripcion", size: "mediano" },
        { tipo: "texto", label: "Cédula Jurídica", name: "cedulaEmpresa", placeholder: "Cédula Jurídica", size: "mediano" },
        { tipo: "texto", label: "Nombre de la Empresa", name: "nombreEmpresa", placeholder: "Nombre de la Empresa", size: "mediano" },
        { tipo: "texto", label: "Detalle de la Empresa", name: "detalleEmpresa", placeholder: "Detalle de la Empresa", size: "mediano" },
        { tipo: "texto", label: "Teléfono", name: "telefonoEmpresa", placeholder: "Teléfono", size: "mediano" },
        { tipo: "imagen", label: "Foto de la Empresa", name: "fotoEmpresa", placeholder: "Foto de la Empresa", size: "mediano" },
        { tipo: "imagen", label: "Foto de la Marca", name: "fotoMarca", placeholder: "Foto de la Marca", size: "mediano" },
    ];

    return (
        <Busqueda
            titulo={"Marcas"}
            tabla={TABLAS.MARCA}
            columnas={columnas}
            filtros={filtros}
            backURL="/proveedores-inicio"
            token={token}
            editarTitulo='Editar Marca'
            editarCampos={editarCampos}
            isFormData={true}
        />
    )
}