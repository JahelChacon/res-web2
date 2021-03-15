import React from "react";
import Insertar from "../../Compartidos/Busquedas/Insertar";
import { TABLAS } from "../../../utils/utils";

export default function UsuariosInsertar({ token }) {
    const camposDerecha = {
        titulo: 'Datos Personales del Usuario',
        campos: [
            { tipo: "texto", disabled: true, label: "Código", name: "codigo", placeholder: "Código", size: "grande" },
            { tipo: "texto", label: "Nombre", name: "nombre", placeholder: "Nombre", size: "grande" },
            { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "grande" },
            { tipo: "texto", label: "Segundo Apellido", name: "segundoApellido", placeholder: "Segundo Apellido", size: "grande" },
            { tipo: "texto", label: "Teléfono Fijo", name: "telefonoFijo", placeholder: "Teléfono Fijo", size: "grande" },
            { tipo: "texto", label: "Teléfono Celular", name: "telefonoCelular", placeholder: "Teléfono Celular", size: "grande" },

        ]
    };

    const camposIzquierda = {
        titulo: 'Datos Técnicos del Usuario',
        campos: [
            { tipo: "password", label: "Contraseña", name: "contrasena", placeholder: "Contraseña", size: "grande" },
            { tipo: "password", label: "Confirmar Contraseña", name: "contrasenaConfirmar", placeholder: "Confirmar Contraseña", size: "grande" },
            { tipo: "texto", label: "Login", name: "login", placeholder: "Login", size: "grande" },
            { tipo: "checkbox", label: "Administrador de Sistema", name: "privilejios", size: "grande" },
            { tipo: "checkbox", label: "Administrador de Seguridad", name: "privilejios", size: "grande" },
            { tipo: "checkbox", label: "Administrador de Restaurante", name: "privilejios", size: "grande" },
            { tipo: "SelectFromApi", tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "mediano" },
            { tipo: "checkbox", label: "Administrador de Cuentas", name: "privilejios", size: "grande" },
        ]
    };
    return (
        <Insertar
            titulo={"Insertar Usuario"}
            tabla={TABLAS.USUARIO}
            camposDerecha={camposDerecha}
            camposIzquierda={camposIzquierda}
            token={token}
        />
    )
}