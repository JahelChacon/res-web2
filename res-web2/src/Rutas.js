import { Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import PrivateRoute from './PrivateRoute';
import RolesInsertar from "./componentes/Seguridad/Roles/RolesInsertar";

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
const UsuariosInsertar = lazy(() => import("../src/componentes/Seguridad/Usuarios/UsuariosInsertar"));
const Cajas = lazy(() => import("../src/componentes/Seguridad/Cajas/Cajas"));
// const CajasInsertar = lazy(() => import("../src/componentes/Seguridad/Cajas/CajasInsertar"));
const Consecutivos = lazy(() => import("../src/componentes/Seguridad/Consecutivos/Consecutivos"));
const Roles = lazy(() => import("../src/componentes/Seguridad/Roles/Roles"));
const RolesIsertar = lazy(() => import("../src/componentes/Seguridad/Roles/RolesInsertar"));
const Paises = lazy(() => import("../src/componentes/Seguridad/Paises/Paises"));
const PaisesInsertar = lazy(() => import("../src/componentes/Seguridad/Paises/PaisesInsertar"));
const UnidadMedida = lazy(() => import("../src/componentes/Seguridad/UnidadMedida/UnidadMedida"));
const UnidadMedidaInsertar = lazy(() => import("../src/componentes/Seguridad/UnidadMedida/UnidadMedidaInsertar"));

// RESTAURANTES
const Restaurantes = lazy(() => import("../src/componentes/Restaurantes/Restaurantes"));

// CLIENTES
const Clientes = lazy(() => import("../src/componentes/Clientes/Clientes"));

// PROVEEDORES
const ProveedoresInicio = lazy(() => import("./componentes/Proveedores/ProveedoresInicio"));
const Proveedores = lazy(() => import("./componentes/Proveedores/Proveedores/Proveedores"));
const ProveedoresInsertar = lazy(() => import("./componentes/Proveedores/Proveedores/ProveedoresInsertar"));
const Marcas = lazy(() => import("../src/componentes/Proveedores/Marcas/Marcas"));
const MarcasInsertar = lazy(() => import("../src/componentes/Proveedores/Marcas/MarcasInsertar"));

const Productos = lazy(() => import("../src/componentes/Proveedores/Productos/Productos"));
const Comestibles = lazy(() => import("../src/componentes/Proveedores/Productos/Comestibles/Comestibles"));
const ComestiblesInsertar = lazy(() => import("../src/componentes/Proveedores/Productos/Comestibles/ComestiblesInsertar"));
const Desechables = lazy(() => import("../src/componentes/Proveedores/Productos/Desechables/Desechables"));
const DesechablesInsertar = lazy(() => import("../src/componentes/Proveedores/Productos/Desechables/DesechablesInsertar"));
const Limpieza = lazy(() => import("../src/componentes/Proveedores/Productos/Limpieza/Limpieza"));
const LimpiezaInsertar = lazy(() => import("../src/componentes/Proveedores/Productos/Limpieza/LimpiezaInsertar"));
const Tecnologia = lazy(() => import("../src/componentes/Proveedores/Productos/Tecnologia/Tecnologia"));
const TecnologiaInsertar = lazy(() => import("../src/componentes/Proveedores/Productos/Tecnologia/TecnologiaInsertar"));
const Utensilios = lazy(() => import("../src/componentes/Proveedores/Productos/Utensilios/Utensilios"));
const UtensiliosInsertar = lazy(() => import("../src/componentes/Proveedores/Productos/Utensilios/UtensiliosInsertar"));

// ADMINISTRACION
const Administracion = lazy(() => import("../src/componentes/Administracion/Administracion"));

const Empleados = lazy(() => import("../src/componentes/Administracion/Empleados/Empleados"));
const EmpleadosInsertar = lazy(() => import("../src/componentes/Administracion/Empleados/EmpleadosInsertar"));
const Mesas = lazy(() => import("../src/componentes/Administracion/Mesas/Mesas"));
const MesasInsertar = lazy(() => import("../src/componentes/Administracion/Mesas/MesasInsertar"));
const Puestos = lazy(() => import("../src/componentes/Administracion/Puestos/Puestos"));
const PuestosInsertar = lazy(() => import("../src/componentes/Administracion/Puestos/PuestosInsertar"));

const Especiales = lazy(() => import("../src/componentes/Administracion/Especiales/Especiales"));
const Buffet = lazy(() => import("../src/componentes/Administracion/Especiales/Buffet/Buffet"));
const BuffetInsertar = lazy(() => import("../src/componentes/Administracion/Especiales/Buffet/BuffetInsertar"));
const Especialidades = lazy(() => import("../src/componentes/Administracion/Especiales/Especialidades/Especialidades"));
const EspecialidadesInsertar = lazy(() => import("../src/componentes/Administracion/Especiales/Especialidades/EspecialidadesInsertar"));

const Bebidas = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Bebidas"));
const Calientes = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Calientes/Calientes"));
const CalientesInsertar = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Calientes/CalientesInsertar"));
const Heladas = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Heladas/Heladas"));
const HeladasInsertar = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Heladas/HeladasInsertar"));
const Gaseosas = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Gaseosas/Gaseosas"));
const GaseosasInsertar = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Gaseosas/GaseosasInsertar"));
const Vinos = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Vinos/Vinos"));
const VinosInsertar = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Vinos/VinosInsertar"));
const Licores = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Licores/Licores"));
const LicoresInsertar = lazy(() => import("../src/componentes/Administracion/Especiales/Bebidas/Licores/LicoresInsertar"));

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
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={UsuariosInsertar}
                    path="/usuarios/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad || usuario.administradorCuentas}
                    component={Cajas}
                    path="/cajas"
                    exact
                />
                {/* <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad || usuario.administradorCuentas}
                    component={CajasInsertar}
                    path="/cajas/insertar"
                    exact
                /> */}
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
                    component={RolesInsertar}
                    path="/roles/insertar"
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
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={UnidadMedidaInsertar}
                    path="/medidas/insertar"
                    exact
                />


                {/* RESTAURANTES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Restaurantes}
                    token={token}
                    path="/restaurantes"
                    exact
                />


                {/* CLIENTES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Clientes}
                    token={token}
                    path="/clientes"
                    exact
                />


                {/* PROVEEDORES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ProveedoresInicio}
                    path="/proveedores-inicio"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Proveedores}
                    path="/proveedores"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ProveedoresInsertar}
                    path="/proveedores/insertar"
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
                    token={token}
                    path="/comestibles"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ComestiblesInsertar}
                    token={token}
                    path="/comestibles/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Desechables}
                    token={token}
                    path="/desechables"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={DesechablesInsertar}
                    token={token}
                    path="/desechables/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Limpieza}
                    token={token}
                    path="/limpieza"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={LimpiezaInsertar}
                    token={token}
                    path="/limpieza/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Tecnologia}
                    token={token}
                    path="/tecnologia"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={TecnologiaInsertar}
                    token={token}
                    path="/tecnologia/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Utensilios}
                    token={token}
                    path="/utensilios"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={UtensiliosInsertar}
                    token={token}
                    path="/utensilios/insertar"
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
                    token={token}
                    path="/empleados"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={EmpleadosInsertar}
                    token={token}
                    path="/empleados/insertar"
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
                    token={token}
                    path="/puestos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={PuestosInsertar}
                    token={token}
                    path="/puestos/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Buffet}
                    token={token}
                    path="/buffet"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={BuffetInsertar}
                    token={token}
                    path="/buffet/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Especialidades}
                    token={token}
                    path="/especialidades"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={EspecialidadesInsertar}
                    token={token}
                    path="/especialidades/insertar"
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
                    token={token}
                    path="/bebidas-calientes"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={CalientesInsertar}
                    token={token}
                    path="/bebidas-calientes/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Heladas}
                    token={token}
                    path="/bebidas-heladas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={HeladasInsertar}
                    token={token}
                    path="/bebidas-heladas/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Gaseosas}
                    token={token}
                    path="/gaseosas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={GaseosasInsertar}
                    token={token}
                    path="/gaseosas/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Vinos}
                    token={token}
                    path="/vinos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={VinosInsertar}
                    token={token}
                    path="/vinos/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Licores}
                    token={token}
                    path="/licores"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={LicoresInsertar}
                    token={token}
                    path="/licores/insertar"
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