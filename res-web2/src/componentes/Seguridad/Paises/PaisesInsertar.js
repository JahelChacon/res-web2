import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function PaisesInsertar({ token, usuario }) {
    const camposDerecha = {
        titulo: 'Información de los paises',
        campos: [
            { tipo: "texto", disabled: true, label: "Código del País", name: "codigo", placeholder: "Código del País", size: "grande" },
            { tipo: "texto", label: "Nombre del País", name: "nombre", placeholder: "Nombre del País", size: "grande" },
            { tipo: "imagen", label: "Bandera del País", name: "imagen", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Paises"}
            tabla={TABLAS.PAIS}
            camposDerecha={camposDerecha}
            token={token}
            usuario={usuario}
            isFormData={true}
        />
    )
}
