import React from "react";
import Insertar from "../../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../../utils/utils";

export default function HeladasInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información de la Bebida Helada',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
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
            titulo={"Insertar Bedida Helada"}
            tabla={TABLAS.BEBIDA_HELADA}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            cancelarURL='/bebidas-heladas'
            token={token}
            isFormData={true}
        />
    )
}
