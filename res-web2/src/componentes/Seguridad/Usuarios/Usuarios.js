import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Usuarios(){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Cantidad", dataField: "cantidad" },
        { text: "Restaurante", dataField: "restaurante" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del usuario", name: "codigo", placeholder: "Código del usuario", size: "pequeno" },
        { tipo: "texto", label: "Nombre del usuario", name: "nombre", placeholder: "Nombre del usuario", size: "pequeno" },
        { tipo: "texto", label: "Nickname", name: "nickname", placeholder: "Nickname", size: "pequeno" },
        { tipo: "texto", label: "Privilegios", name: "privilegios", placeholder: "Privilegios", size: "pequeno" },
    ];

    return (
        <Busqueda
            titulo={"Usuarios"}
            tabla={TABLAS.USUARIO}
            columnas={columnas}
            filtros={filtros}
        />
    )
}