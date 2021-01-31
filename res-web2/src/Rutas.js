import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import { ROLES } from "./seguridad/roles";

const Inicio = lazy(() => import("./componentes/Inicio/Inicio"));
const Ayuda = lazy(() => import("./componentes/Ayuda/Ayuda"));
const Login = lazy(() => import("./componentes/Login/Login"));
const Menu = lazy(() => import("./componentes/Menu/Menu"));

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



            </Switch>

        </Suspense>
    )
}