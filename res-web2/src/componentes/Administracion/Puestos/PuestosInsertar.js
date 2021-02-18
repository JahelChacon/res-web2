import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function PuestosInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información del Puesto',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "radio", label: "Interno", name: "trabajador", value: 'interno', size: "grande" },
            { tipo: "radio", label: "Externo", name: "trabajador", value: 'externo', size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "SelectFromApi", tabla: "roles", label: "Rol", name: "rol", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Puesto"}
            tabla={TABLAS.PUESTO}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}
