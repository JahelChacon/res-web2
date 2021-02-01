import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import { ROLES } from "./seguridad/roles";

// INICIO
const Inicio = lazy(() => import("./componentes/Inicio/Inicio"));

// AYUDA
const Ayuda = lazy(() => import("./componentes/Ayuda/Ayuda"));

// LOGIN
const Login = lazy(() => import("./componentes/Login/Login"));

// MENU DE COMIDAS
const Menu = lazy(() => import("./componentes/Menu/Menu"));

// SEGURIDAD
const Seguridad = lazy(() => import("./componentes/Seguridad/Seguridad"));
const Usuarios = lazy(() => import("./componentes/Seguridad/Usuarios/Usuarios"));
const Cajas = lazy(() => import("./componentes/Seguridad/Cajas/Cajas"));
const Consecutivos = lazy(() => import("./componentes/Seguridad/Consecutivos/Consecutivos"));
const Roles = lazy(() => import("./componentes/Seguridad/Roles/Roles"));
const Paises = lazy(() => import("./componentes/Seguridad/Paises/Paises"));
const UnidadMedida = lazy(() => import("./componentes/Seguridad/UnidadMedida/UnidadMedida"));

// RESTAURANTES
const Restaurantes = lazy(() => import("./componentes/Restaurantes/Restaurantes"));

// CLIENTES
const Clientes = lazy(() => import("./componentes/Clientes/Clientes"));

// PROVEEDORES
const Proveedores = lazy(() => import("./componentes/Proveedores/Proveedores"));

// ADMINISTRACION
const Administracion = lazy(() => import("./componentes/Administracion/Administracion"));

// REPORTES
const Reportes = lazy(() => import("./componentes/Reportes/Reportes"));

export function Rutas() {
    return(
        <Suspense fallback={<div>Cargando</div>}>
            <Switch>

                {/* INICIO */}
                <Route path="/" exact>
                    <Inicio />
                </Route>

                {/* AYUDA */}
                <Route path="/ayuda" exact>
                    <Ayuda />
                </Route>

                {/* LOGIN */}
                <Route path="/login" exact> 
                    <Login />
                </Route>

                {/* MENU */}
                <Route path="/menu" exact>
                    <Menu />
                </Route>


                {/* SEGURIDAD */}
                <Route path="/seguridad" exact>
                    <Seguridad />
                </Route>
                <Route path="/usuarios" exact>
                    <Usuarios />
                </Route>
                <Route path="/cajas" exact>
                    <Cajas />
                </Route>
                <Route path="/consecutivos" exact>
                    <Consecutivos />
                </Route>
                <Route path="/roles" exact>
                    <Roles />
                </Route>
                <Route path="/paises" exact>
                    <Paises />
                </Route>
                <Route path="/medidas" exact>
                    <UnidadMedida />
                </Route>


                {/* RESTAURANTES */}
                <Route path="/restaurantes" exact>
                    <Restaurantes />
                </Route>


                {/* CLIENTES */}
                <Route path="/clientes" exact>
                    <Clientes />
                </Route>


                {/* PROVEEDORES */}
                <Route path="/proveedores" exact>
                    <Proveedores />
                </Route>


                {/* ADMINISTRACION */}
                <Route path="/administracion" exact>
                    <Administracion />
                </Route>


                {/* REPORTES */}
                <Route path="/reportes" exact>
                    <Reportes />
                </Route>

            </Switch>

        </Suspense>
    )
}