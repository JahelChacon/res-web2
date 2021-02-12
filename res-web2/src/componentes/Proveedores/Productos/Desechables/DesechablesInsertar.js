import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function DesechablesInsertar(){
    const camposDerecha = {
        titulo: 'Información de Comestible',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: '',
        campos: [
            { tipo: "texto", label: "Restaurante", name: "restaurante", placeholder: "Restaurante", size: "grande" },
            { tipo: "texto", label: "Marca", name: "marca", placeholder: "Marca", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
        ]
    };
console.log(camposIzquierda);
    return (
        <Insertar
            titulo={"Insertar Desechable"}
            tabla={TABLAS.DESECHABLES}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
        />
    )
}