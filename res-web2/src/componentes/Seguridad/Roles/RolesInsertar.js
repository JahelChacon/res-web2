import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function RolesInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información de los Roles',
        campos: [
            { tipo: "texto", disabled: true, label: "Código Rol", name: "codigo", placeholder: "Código Rol", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "nombre", placeholder: "Descripción", size: "grande" },
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
