import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import { ROLES } from "../src/seguridad/roles";

// INICIO
const Inicio = lazy(() => import("../src/componentes/Inicio/Inicio"));

// AYUDA
const Ayuda = lazy(() => import("../src/componentes/Ayuda/Ayuda"));

// LOGIN
const Login = lazy(() => import("../src/componentes/Login/Login"));

// MENU DE COMIDAS
const Menu = lazy(() => import("../src/componentes/Menu/Menu"));

// SEGURIDAD
const Seguridad = lazy(() => import("../src/componentes/Seguridad/Seguridad"));
const Usuarios = lazy(() => import("../src/componentes/Seguridad/Usuarios/Usuarios"));
const Cajas = lazy(() => import("../src/componentes/Seguridad/Cajas/Cajas"));
const Consecutivos = lazy(() => import("../src/componentes/Seguridad/Consecutivos/Consecutivos"));
const Roles = lazy(() => import("../src/componentes/Seguridad/Roles/Roles"));
const Paises = lazy(() => import("../src/componentes/Seguridad/Paises/Paises"));
const PaisesInsertar = lazy(() => import("../src/componentes/Seguridad/Paises/PaisesInsertar"));
const UnidadMedida = lazy(() => import("../src/componentes/Seguridad/UnidadMedida/UnidadMedida"));

// RESTAURANTES
const Restaurantes = lazy(() => import("../src/componentes/Restaurantes/Restaurantes"));

// CLIENTES
const Clientes = lazy(() => import("../src/componentes/Clientes/Clientes"));

// PROVEEDORES
const Proveedores = lazy(() => import("../src/componentes/Proveedores/Proveedores"));
const Proveedores2 = lazy(() => import("../src/componentes/Proveedores/Proveedores/Proveedores2"));
const Marcas = lazy(() => import("../src/componentes/Proveedores/Marcas/Marcas"));
const MarcasInsertar = lazy(() => import("../src/componentes/Proveedores/Marcas/MarcasInsertar"));

const Productos = lazy(() => import("../src/componentes/Proveedores/Productos/Productos"));
const Comestibles = lazy(() => import("../src/componentes/Proveedores/Productos/Comestibles/Comestibles"));
const Desechables = lazy(() => import("../src/componentes/Proveedores/Productos/Desechables/Desechables"));
const Limpieza = lazy(() => import("../src/componentes/Proveedores/Productos/Limpieza/Limpieza"));
const Tecnologia = lazy(() => import("../src/componentes/Proveedores/Productos/Tecnologia/Tecnologia"));
const Utensilios = lazy(() => import("../src/componentes/Proveedores/Productos/Utensilios/Utensilios"));

// ADMINISTRACION
const Administracion = lazy(() => import("../src/componentes/Administracion/Administracion"));

const Empleados = lazy(() => import("../src/componentes/Administracion/Empleados/Empleados"));
const Mesas = lazy(() => import("../src/componentes/Administracion/Mesas/Mesas"));
const Puestos = lazy(() => import("../src/componentes/Administracion/Puestos/Puestos"));

const Especiales = lazy(() => import("../src/componentes/Administracion/Especiales/Especiales"));
const Buffet = lazy(() => import("../src/componentes/Administracion/Especiales/Buffet/Buffet"));
const Especialidades = lazy(() => import("../src/componentes/Administracion/Especiales/Especialidades/Especialidades"));

const Bebidas = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Bebidas"));
const Calientes = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Calientes/Calientes"));
const Heladas = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Heladas/Heladas"));
const Gaseosas = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Gaseosas/Gaseosas"));
const Vinos = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Vinos/Vinos"));
const Licores = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Licores/Licores"));

// REPORTES
const Reportes = lazy(() => import("../src/componentes/Reportes/Reportes"));
const Bitacoras = lazy(() => import("../src/componentes/Reportes/Bitacoras/Bitacoras"));
const ReporteUsuarios = lazy(() => import("../src/componentes/Reportes/Usuarios/ReporteUsuarios"));
const Facturas = lazy(() => import("../src/componentes/Reportes/Facturas/Facturas"));

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
                <Route path="/paises/insertar" exact>
                    <PaisesInsertar />
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
                <Route path="/proveedores-2" exact>
                    <Proveedores2 />
                </Route>
                <Route path="/marcas" exact>
                    <Marcas />
                </Route>
                <Route path="/marcas/insertar" exact>
                    <MarcasInsertar />
                </Route>
                <Route path="/productos" exact>
                    <Productos />
                </Route>
                <Route path="/comestibles" exact>
                    <Comestibles />
                </Route>
                <Route path="/desechables" exact>
                    <Desechables />
                </Route>
                <Route path="/limpieza" exact>
                    <Limpieza />
                </Route>
                <Route path="/tecnologia" exact>
                    <Tecnologia />
                </Route>
                <Route path="/utensilios" exact>
                    <Utensilios />
                </Route>

                


                {/* ADMINISTRACION */}
                <Route path="/administracion" exact>
                    <Administracion />
                </Route>
                <Route path="/empleados" exact>
                    <Empleados />
                </Route>
                <Route path="/especiales" exact>
                    <Especiales />
                </Route>
                <Route path="/mesas" exact>
                    <Mesas />
                </Route>
                <Route path="/puestos" exact>
                    <Puestos />
                </Route>
                <Route path="/buffet" exact>
                    <Buffet />
                </Route>
                <Route path="/especialidades" exact>
                    <Especialidades />
                </Route>
                <Route path="/bebidas" exact>
                    <Bebidas />
                </Route>
                <Route path="/bebidas-calientes" exact>
                    <Calientes />
                </Route>
                <Route path="/bebidas-heladas" exact>
                    <Heladas />
                </Route>
                <Route path="/gaseosas" exact>
                    <Gaseosas />
                </Route>
                <Route path="/vinos" exact>
                    <Vinos />
                </Route>
                <Route path="/licores" exact>
                    <Licores />
                </Route>


                {/* REPORTES */}
                <Route path="/reportes" exact>
                    <Reportes />
                </Route>
                <Route path="/bitacoras" exact>
                    <Bitacoras />
                </Route>
                <Route path="/reporte-usuarios" exact>
                    <ReporteUsuarios />
                </Route>
                <Route path="/facturas" exact>
                    <Facturas />
                </Route>

            </Switch>

        </Suspense>
    )
}