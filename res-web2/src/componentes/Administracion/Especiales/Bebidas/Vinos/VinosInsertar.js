import React from "react";
import Insertar from "../../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../../utils/utils";

export default function VinosInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información del Vino',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Marca", name: "marca", placeholder: "Marca", size: "grande" },
            { tipo: "SelectFromApi", tabla: "paises", label: "Nacionalidad", name: "nacionalidad", size: "grande" },
            { tipo: "texto", label: "Precio Unitario", name: "precioUnitario", placeholder: "Precio Unitario", size: "grande" },
            { tipo: "texto", label: "Precio Botella", name: "precioBotella", placeholder: "Precio Botella", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "texto", label: "Año", name: "año", placeholder: "Año", size: "grande" },
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
            { tipo: "texto", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
            { tipo: "imagen", label: "Foto del Vino", name: "foto", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Vino"}
            tabla={TABLAS.VINO}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}
