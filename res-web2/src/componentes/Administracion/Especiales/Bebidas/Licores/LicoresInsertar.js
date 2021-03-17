import React from "react";
import Insertar from "../../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../../utils/utils";

export default function LicoresInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información del Licor',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "SelectFromApi", tabla:"marcas" , label: "Marca", name: "marca", size: "grande" },
            { tipo: "numero", label: "Precio Unitario", name: "precioUnitario", placeholder: "Precio Unitario", size: "grande" },
            { tipo: "numero", label: "Precio Botella", name: "precioBotella", placeholder: "Precio Botella", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "SelectFromApi", tabla: "paises", label: "Nacionalidad", name: "nacionalidad", size: "grande" },
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
            { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripción", placeholder: "Descripción", size: "grande" },
            { tipo: "imagen", label: "Foto del Licor", name: "foto", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Licor"}
            tabla={TABLAS.LICOR}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
            isFormData={true}
        />
    )
}
