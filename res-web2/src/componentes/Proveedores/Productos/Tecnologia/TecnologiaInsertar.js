import React from "react";
import Insertar from "../../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../../utils/utils";

export default function TecnologiaInsertar({ token, usuario }){
    const camposDerecha = {
        titulo: 'Información de los artículos',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "numero", label: "Cantidad", name: "cantidad", placeholder: "Cantidad", size: "grande" },
            { tipo: "numero", label: "Precio", name: "precio", placeholder: "Precio", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: '',
        campos: [
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "grande" },
            { tipo: "SelectFromApi", tabla: "marcas", label: "Marca", name: "marca", size: "grande" },
            { tipo: "texto", label: "Descripción", name: "descripcion", placeholder: "Descripción", size: "grande" },
        ]
    };
    return (
        <Insertar
            titulo={"Insertar Tecnología"}
            tabla={TABLAS.TECNOLOGIA}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
            usuario={usuario}
        />
    )
}