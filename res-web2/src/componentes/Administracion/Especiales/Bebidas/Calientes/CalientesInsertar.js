import React from "react";
import Insertar from "../../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../../utils/utils";

export default function CalientesInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información de la Bebida Caliente',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Ingredientes", name: "ingredientes", placeholder: "Ingredientes", size: "grande" },
            { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
            { tipo: "imagen", label: "Foto de la Bebida", name: "foto", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Bedida Caliente"}
            tabla={TABLAS.BEBIDA_CALIENTE}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            cancelarURL='/bebidas-calientes'
            token={token}
        />
    )
}
