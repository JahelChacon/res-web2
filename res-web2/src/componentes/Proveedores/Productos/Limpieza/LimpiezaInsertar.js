import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function LimpiezaInsertar({ token }){
    const camposDerecha = {
        titulo: 'Información de los artículos',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "numero", label: "Cantidad", name: "marca", placeholder: "Cantidad", size: "grande" },
            { tipo: "SelectFromApi", tabla: "marcas", label: "Marca", name: "marca", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: '',
        campos: [
            
            { tipo: "texto", label: "Tipo", name: "tipo", placeholder: "Tipo", size: "grande" },
            { tipo: "texto", label: "Cantidad de Medida", name: "cantidadMedida", placeholder: "Cantidad de Medida", size: "grande" },
            { tipo: "SelectFromApi", tabla: "unidadesDeMedida", label: "Unidad de Medida", name: "unidadDeMedida", size: "grande" },
        ]
    };
    return (
        <Insertar
            titulo={"Insertar Artículo de Limpieza"}
            tabla={TABLAS.LIMPIEZA}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}