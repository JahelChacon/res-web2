import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function MesasInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información de la Mesa',
        campos: [
          { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
          { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
          { tipo: "numero", label: "Numero", name: "numero", placeholder: "Numero", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "numero", label: "Cantidad de Sillas", name: "sillas", placeholder: "Sillas", size: "grande" },
            { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Mesas"}
            tabla={TABLAS.MESAS}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}
