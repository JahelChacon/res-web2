import React from "react";
import Insertar from "../../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../../utils/utils";

export default function GaseosasInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información de la Bebida Gaseosa',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "SelectFromApi", tabla:"marcas" , label: "Marca", name: "marca", size: "grande" },
            { tipo: "SelectFromApi", tabla: "paises", label: "Nacionalidad", name: "nacionalidad", size: "grande" },
            { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
            { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
            { tipo: "imagen", label: "Foto de la Gaseosa", name: "foto", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Bedida Gaseosa"}
            tabla={TABLAS.BEBIDA_GASEOSA}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            cancelarURL='/gaseosas'
            token={token}
            isFormData={true}
        />
    )
}
