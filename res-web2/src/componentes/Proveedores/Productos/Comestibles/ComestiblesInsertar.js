import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function ComestiblesInsertar({ token }){
    const camposDerecha = {
        titulo: 'Información de Comestible',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "grande" },
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
            { tipo: "texto", label: "Clase", name: "clase", placeholder: "Clase", size: "grande" },
            { tipo: "SelectFromApi", tabla: "unidadesDeMedida", label: "Unidad de Medida", name: "unidadDeMedida", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: '',
        campos: [
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Tipo", name: "tipo", placeholder: "Tipo", size: "grande" },
            { tipo: "SelectFromApi", tabla: "marcas", label: "Marca", name: "marca", size: "grande" },
            { tipo: "texto", label: "Línea", name: "linea", placeholder: "Línea", size: "grande" },
        ]
    };
console.log(camposIzquierda);
    return (
        <Insertar
            titulo={"Insertar Comestible"}
            tabla={TABLAS.COMESTIBLES}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}