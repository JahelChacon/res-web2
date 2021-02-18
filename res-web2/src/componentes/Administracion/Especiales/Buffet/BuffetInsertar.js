import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function BuffetInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información del Buffet',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Precio", name: "precio", placeholder: "Precio", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "texto", label: "Tipo", name: "tipo", placeholder: "Tipo", size: "grande" }, // Viene de comestibles
            { tipo: "SelectFromApi", tabla:"unidadesDeMedida" , label: "Unidad de Medida", name: "unidadDeMedida", size: "pequeno" },
            { tipo: "imagen", label: "Foto del platillo", name: "foto", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Buffet"}
            tabla={TABLAS.BUFFET}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}
