import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function DesechablesInsertar({ token, usuario }){
    const camposDerecha = {
        titulo: 'Información de Comestible',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: '',
        campos: [
            { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "grande" },
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Desechable"}
            tabla={TABLAS.DESECHABLES}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
            usuario={usuario}
        />
    )
}