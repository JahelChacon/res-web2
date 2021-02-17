import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function TecnologiaInsertar(){
    const camposDerecha = {
        titulo: 'Información de los artículos',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Cantidad", name: "marca", placeholder: "Cantidad", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: '',
        campos: [
            { tipo: "texto", label: "Restaurante", name: "restaurante", placeholder: "Restaurante", size: "grande" },
            { tipo: "texto", label: "Marca", name: "marca", placeholder: "Marca", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
            
            
            
        ]
    };
    return (
        <Insertar
            titulo={"Insertar Tecnología"}
            tabla={TABLAS.TECNOLOGIA}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
        />
    )
}