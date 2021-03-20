import React from "react";
import Busqueda from "../../Compartidos/Busquedas/Busqueda";
import { TABLAS } from "../../../utils/utils";

export default function Usuarios({ token, usuario }){
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
        { tipo: "checkbox", label: "Administrador de Sistema", name: "administradorSistema", size: "pequeno" },
        { tipo: "checkbox", label: "Administrador de Seguridad", name: "administradorSeguridad", size: "pequeno" },
        { tipo: "checkbox", label: "Administrador de Restaurante", name: "administradorRestaurante", size: "pequeno" },
        { tipo: "checkbox", label: "Administrador de Cuentas", name: "administradorCuentas", size: "pequeno" },
    ];

    const editarCampos = [
        { tipo: "texto", disabled: true, label: "Código del usuario", name: "codigo", placeholder: "Código del usuario", size: "mediano" },
        { tipo: "texto", label: "Nombre del usuario", name: "nombre", placeholder: "Nombre del usuario", size: "mediano" },
        { tipo: "texto", required: false, label: "Primer Apellido", name: "primerApellido", placeholder: "Primer Apellido", size: "mediano" },
        { tipo: "texto", required: false, label: "Segundo Apellido", name: "segundoApellido", placeholder: "Segundo Apellido", size: "mediano" },
        { tipo: "texto", required: false, label: "Teléfono Fijo", name: "telefonoFijo", placeholder: "Teléfono Fijo", size: "mediano" },
        { tipo: "texto", label: "Teléfono Celular", name: "telefonoCelular", placeholder: "Teléfono Celular", size: "mediano" },
        { tipo: "texto", label: "Nickname", name: "login", placeholder: "Nickname", size: "mediano" },
        { tipo: "EditPassword", name: "contrasena", size: "grande" },
        { tipo: "checkbox", label: "Administrador de Sistema", name: "administradorSistema", size: "mediano" },
        { tipo: "checkbox", label: "Administrador de Seguridad", name: "administradorSeguridad", size: "mediano" },
        { tipo: "checkbox", label: "Administrador de Restaurante", name: "administradorRestaurante", size: "mediano" },
        { tipo: "checkbox", label: "Administrador de Cuentas", name: "administradorCuentas", size: "mediano" },
        { tipo: "SelectFromApi", required: false, tabla: "restaurantes", label: "Restaurante", name: "restaurante", size: "mediano" },
    ];


    return (
        <Busqueda
            titulo={"Usuarios"}
            tabla={TABLAS.USUARIO}
            columnas={columnas}
            filtros={filtros}
            token={token}
            usuario={usuario}
            backURL="/seguridad"
            editarTitulo='Editar Usuario'
            editarCampos={editarCampos}
        />
    )
}