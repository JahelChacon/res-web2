import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function RolesInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información de los Roles',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Roles"}
            tabla={TABLAS.ROL}
            camposDerecha={camposDerecha}
            token={token}
        />
    )
}
