import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Usuarios({ token }){
    const columnas = [
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombre" },
        { text: "Primer Apellido", dataField: "primerApellido" },
        { text: "Segundo Apellido", dataField: "segundoApellido" },
        { text: "Teléfono Fijo", dataField: "telefonoFijo" },
        { text: "Teléfono Celular", dataField: "telefonoCelular" },
        { text: "Login", dataField: "login" },
        { text: "Administrador de Sistema", dataField: "administradorSistema" },
        { text: "Administrador de Seguridad", dataField: "administradorSeguridad" },
        { text: "Administrador de Restaurante", dataField: "administradorRestaurante" },
        { text: "Administrador de Cuentas", dataField: "administradorCuentas" },
    ];

    const filtros = [
        { tipo: "texto", label: "Código del usuario", name: "codigo", placeholder: "Código del usuario", size: "pequeno" },
        { tipo: "texto", label: "Nombre del usuario", name: "nombre", placeholder: "Nombre del usuario", size: "pequeno" },
        { tipo: "texto", label: "Nickname", name: "login", placeholder: "Nickname", size: "pequeno" },
        { tipo: "checkbox", label: "Administrador de Sistema", name: "privilejios", size: "pequeno" },
        { tipo: "checkbox", label: "Administrador de Seguridad", name: "privilejios", size: "pequeno" },
        { tipo: "checkbox", label: "Administrador de Restaurante", name: "privilejios", size: "pequeno" },
        { tipo: "checkbox", label: "Administrador de Cuentas", name: "privilejios", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código del usuario", name: "codigo", placeholder: "Código del usuario", size: "mediano" },
        { tipo: "texto", label: "Nombre del usuario", name: "nombre", placeholder: "Nombre del usuario", size: "mediano" },
        { tipo: "texto", label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "mediano" },
        { tipo: "texto", label: "Segundo Apellido", name: "segundoApellido", placeholder: "Segundo Apellido", size: "mediano" },
        { tipo: "texto", label: "Teléfono Fijo", name: "telefonoFijo", placeholder: "Teléfono Fijo", size: "mediano" },
        { tipo: "texto", label: "Teléfono Celular", name: "telefonoCelular", placeholder: "Teléfono Celular", size: "mediano" },
        { tipo: "texto", label: "Nickname", name: "login", placeholder: "Nickname", size: "mediano" },
        { tipo: "checkbox", label: "Cambio de Contraseña", name: "cambioContrasena", size: "grande" },
        { tipo: "password", label: "Contrasena", name: "contrasena", placeholder: "Contrasena", size: "grande" },
        { tipo: "password", label: "Confirmar Contrasena", name: "contrasenaConfirmar", placeholder: "Confirmar Contrasena", size: "grande" },
        { tipo: "checkbox", label: "Administrador de Sistema", name: "privilejios", size: "mediano" },
        { tipo: "checkbox", label: "Administrador de Seguridad", name: "privilejios", size: "mediano" },
        { tipo: "checkbox", label: "Administrador de Restaurante", name: "privilejios", size: "mediano" },
        { tipo: "checkbox", label: "Administrador de Cuentas", name: "privilejios", size: "mediano" },
    ];


    return (
        <Busqueda
            titulo={"Usuarios"}
            tabla={TABLAS.USUARIO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            backURL="/seguridad"
            editarTitulo='Editar Usuario'
            editarCampos={editarCampos}
        />
    )
}