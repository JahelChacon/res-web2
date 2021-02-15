import { Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import PrivateRoute from './PrivateRoute';

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
const ProveedoresInsertar = lazy(() => import("../src/componentes/Proveedores/Proveedores/Proveedores2Insertar"));
const Marcas = lazy(() => import("../src/componentes/Proveedores/Marcas/Marcas"));
const MarcasInsertar = lazy(() => import("../src/componentes/Proveedores/Marcas/MarcasInsertar"));

const Productos = lazy(() => import("../src/componentes/Proveedores/Productos/Productos"));
const Comestibles = lazy(() => import("../src/componentes/Proveedores/Productos/Comestibles/Comestibles"));
const ComestiblesInsertar = lazy(() => import("../src/componentes/Proveedores/Productos/Comestibles/ComestiblesInsertar"));
const Desechables = lazy(() => import("../src/componentes/Proveedores/Productos/Desechables/Desechables"));
const DesechablesInsertar = lazy(() => import("../src/componentes/Proveedores/Productos/Desechables/DesechablesInsertar"));
const Limpieza = lazy(() => import("../src/componentes/Proveedores/Productos/Limpieza/Limpieza"));
const Tecnologia = lazy(() => import("../src/componentes/Proveedores/Productos/Tecnologia/Tecnologia"));
const Utensilios = lazy(() => import("../src/componentes/Proveedores/Productos/Utensilios/Utensilios"));

// ADMINISTRACION
const Administracion = lazy(() => import("../src/componentes/Administracion/Administracion"));

const Empleados = lazy(() => import("../src/componentes/Administracion/Empleados/Empleados"));
const Mesas = lazy(() => import("../src/componentes/Administracion/Mesas/Mesas"));
const MesasInsertar = lazy(() => import("../src/componentes/Administracion/Mesas/MesasInsertar"));
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

export function Rutas({ usuario, token }) {
    return (
        <Suspense fallback={<div>Cargando</div>}>
            <Switch>

                {/* INICIO */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad || usuario.administradorCuentas}
                    component={Inicio}
                    usuario={usuario}
                    path="/"
                    exact
                />

                {/* AYUDA */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Ayuda}
                    path="/ayuda"
                    exact
                />

                {/* LOGIN */}
                <Route path="/login" exact>
                    <Login usuario={usuario} />
                </Route>

                {/* MENU */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Menu}
                    path="/menu"
                    exact
                />


                {/* SEGURIDAD */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad || usuario.administradorCuentas}
                    component={Seguridad}
                    usuario={usuario}
                    path="/seguridad"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Usuarios}
                    path="/usuarios"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad || usuario.administradorCuentas}
                    component={Cajas}
                    path="/cajas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Consecutivos}
                    path="/consecutivos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Roles}
                    path="/roles"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Paises}
                    token={token}
                    path="/paises"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={PaisesInsertar || usuario.administradorSeguridad}
                    token={token}
                    path="/paises/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={UnidadMedida}
                    path="/medidas"
                    exact
                />


                {/* RESTAURANTES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Restaurantes}
                    path="/restaurantes"
                    exact
                />


                {/* CLIENTES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Clientes}
                    path="/clientes"
                    exact
                />


                {/* PROVEEDORES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Proveedores}
                    path="/proveedores"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Proveedores2}
                    path="/proveedores-2"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ProveedoresInsertar}
                    path="/proveedores-2/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Marcas}
                    token={token}
                    path="/marcas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={MarcasInsertar}
                    token={token}
                    path="/marcas/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Productos}
                    path="/productos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Comestibles}
                    path="/comestibles"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ComestiblesInsertar}
                    path="/comestibles/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Desechables}
                    path="/desechables"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={DesechablesInsertar}
                    path="/desechables/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Limpieza}
                    path="/limpieza"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Tecnologia}
                    path="/tecnologia"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Utensilios}
                    path="/utensilios"
                    exact
                />



                {/* ADMINISTRACION */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Administracion}
                    path="/administracion"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Empleados}
                    path="/empleados"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Especiales}
                    path="/especiales"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Mesas}
                    token={token}
                    path="/mesas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={MesasInsertar}
                    token={token}
                    path="/mesas/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Puestos}
                    path="/puestos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Buffet}
                    path="/buffet"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Especialidades}
                    path="/especialidades"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Bebidas}
                    path="/bebidas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Calientes}
                    path="/bebidas-calientes"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Heladas}
                    path="/bebidas-heladas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Gaseosas}
                    path="/gaseosas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Vinos}
                    path="/vinos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Licores}
                    path="/licores"
                    exact
                />


                {/* REPORTES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad || usuario.administradorCuentas}
                    component={Reportes}
                    usuario={usuario}
                    path="/reportes"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Bitacoras}
                    path="/bitacoras"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ReporteUsuarios}
                    path="/reporte-usuarios"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorCuentas}
                    component={Facturas}
                    path="/facturas"
                    exact
                />

            </Switch>

        </Suspense>
    )
}