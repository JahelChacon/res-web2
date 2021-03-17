import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function EmpleadosInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Información del Empleado',
        campos: [
          { tipo: "texto", disabled:true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
          { tipo: "texto", label: "Cedula", name: "cedula", placeholder: "Cedula", size: "grande" },
          { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
          { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "grande" },
          { tipo: "texto", label: "Segundo Apellido", name: "segundoAppelido", placeholder: "Segundo Apellido", size: "grande" },
          { tipo: "texto", label: "Telefono 1", name: "telefono1", placeholder: "Telefono 1", size: "grande" },
          { tipo: "texto", label: "Telefono 2", name: "telefono2", placeholder: "Telefono 2", size: "grande" },
        ]
    };

    const camposIzquierda = {
        campos: [
            { tipo: "SelectFromApi", tabla: "puestos", label: "Puesto", name: "puesto", size: "grande" },
            { tipo: "SelectFromApi", tabla:"paises" , label: "Nacionalidad", name: "nacionalidad", size: "grande" },
            { tipo: "imagen", label: "Foto del Empleado", name: "foto", size: "grande" },
            { tipo: "SelectFromApi", tabla:"restaurantes" , label: "Restaurante", name: "restaurante", size: "grande" },
        ]
    };

    return (
        <Insertar
            titulo={"Insertar Empleado"}
            tabla={TABLAS.EMPLEADO}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
            isFormData={true}
        />
    )
}
