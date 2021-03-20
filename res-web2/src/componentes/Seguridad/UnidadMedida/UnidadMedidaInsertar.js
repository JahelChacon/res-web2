import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function UnidadMedidaInsertar({ token, usuario }) {
    const camposDerecha = {
        titulo: 'Información de Unidades de Medida',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Unidad", name: "unidad", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Escala", name: "escala", placeholder: "Descripción", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "texto", label: "Símbolo", name: "simbolo", placeholder: "Símbolo", size: "grande" },
            { tipo: "texto", label: "Simbología", name: "simbologia", placeholder: "Simbología", size: "grande" },
            { tipo: "texto", label: "Detalle", name: "detalle", placeholder: "Detalle", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Unidad de Medida"}
            tabla={TABLAS.UNIDAD_DE_MEDIDA}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            cancelarURL='/medidas'
            token={token}
            usuario={usuario}
        />
    )
}
