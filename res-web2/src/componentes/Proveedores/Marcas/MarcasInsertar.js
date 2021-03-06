import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function MarcasInsertar({ token, usuario }) {
    const camposDerecha = {
        titulo: 'Información de la Marca',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombreMarca", placeholder: "Nombre", size: "grande" },
            { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "grande" },
            { tipo: "texto", label: "Descripcion", name: "descripcionMarca", placeholder: "Descripcion", size: "grande" },
            { tipo: "imagen", label: "Foto de la Marca", name: "fotoMarca", placeholder: "Foto de la Marca", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: 'Información del Contacto',
        campos: [
            { tipo: "texto", label: "Cédula Jurídica", name: "cedulaEmpresa", placeholder: "Cédula Jurídica", size: "grande" },
            { tipo: "texto", label: "Nombre de la Empresa", name: "nombreEmpresa", placeholder: "Nombre de la Empresa", size: "grande" },
            { tipo: "texto", label: "Detalle de la Empresa", name: "detalleEmpresa", placeholder: "Detalle de la Empresa", size: "grande" },
            { tipo: "texto", label: "Teléfono", name: "telefonoEmpresa", placeholder: "Teléfono", size: "grande" },
            { tipo: "imagen", label: "Foto de la Empresa", name: "fotoEmpresa", placeholder: "Foto de la Empresa", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Marcas"}
            tabla={TABLAS.MARCA}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
            usuario={usuario}
            isFormData={true}
        />
    )
}
