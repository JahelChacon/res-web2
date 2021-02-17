import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function UsuariosInsertar(){
    const camposDerecha = {
        titulo: 'Datos Personales del Usuario',
        campos: [
            { tipo: "texto", label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "grande" },
            { tipo: "texto", label: "Segundo Apellido", name: "segundoApellido", placeholder: "Segundo Apellido", size: "grande" },
            { tipo: "texto", label: "Teléfono 1", name: "telefono1", placeholder: "Teléfono 1", size: "grande" },
            { tipo: "texto", label: "Teléfono 2", name: "telefono2", placeholder: "Teléfono 2", size: "grande" },
            { tipo: "texto", label: "Cambio de Contraseña", name: "cambioContrasena", placeholder: "Cambio de Contraseña", size: "grande" },
        ]
    };

    const camposIzquierda = {
        titulo: 'Datos Técnicos del Usuario',
        campos: [
            { tipo: "texto", label: "Login", name: "login", placeholder: "Login", size: "grande" },
            { tipo: "texto", label: "Contraseña", name: "contrasena", placeholder: "Contraseña", size: "grande" },
            { tipo: "texto", label: "Confirmar Contraseña", name: "confirmarContrasena", placeholder: "Confirmar Contraseña", size: "grande" },
        ]
    };
    return (
        <Insertar
            titulo={"Insertar Usuario"}
            tabla={TABLAS.USUARIO}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
        />
    )
}