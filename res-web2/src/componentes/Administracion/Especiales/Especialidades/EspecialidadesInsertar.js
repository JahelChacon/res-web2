import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function EspecialidadesInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información de la Especialidad',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre del platillo", name: "nombre", placeholder: "Nombre del platillo", size: "grande" },
            { tipo: "texto", label: "Ingredientes", name: "ingredientes", placeholder: "Ingredientes", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "grande" },
            { tipo: "texto", label: "Detalle", name: "detalle", placeholder: "Detalle", size: "grande" },
            { tipo: "imagen", label: "Foto del Especial", name: "foto", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar especialidad"}
            tabla={TABLAS.ESPECIALIDAD}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            cancelarURL='/especialidades'
            token={token}
            isFormData={true}
        />
    )
}
