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