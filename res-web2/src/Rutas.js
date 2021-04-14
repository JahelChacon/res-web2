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
const UsuariosInsertar = lazy(() => import("../src/componentes/Seguridad/Usuarios/UsuariosInsertar"));
const Cajas = lazy(() => import("../src/componentes/Seguridad/Cajas/Cajas"));
const Consecutivos = lazy(() => import("../src/componentes/Seguridad/Consecutivos/Consecutivos"));
const Roles = lazy(() => import("../src/componentes/Seguridad/Roles/Roles"));
const RolesInsertar = lazy(() => import("../src/componentes/Seguridad/Roles/RolesInsertar"));
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

// RESTAURANTES CHEF
const AperturaCaja = lazy(() => import("../src/componentes/RestaurantesChef/AperturaCaja"));
const CierreCaja = lazy(() => import("../src/componentes/RestaurantesChef/CierreCaja"));
const PiccolaStella = lazy(() => import("../src/componentes/RestaurantesChef/PiccolaStella"));
const TurinAnivo = lazy(() => import("../src/componentes/RestaurantesChef/TurinAnivo"));
const NotteDiFuoco = lazy(() => import("../src/componentes/RestaurantesChef/NotteDiFuoco"));
const ProcesosMesas = lazy(() => import("../src/componentes/RestaurantesChef/ProcesosMesas"));
const ProcesosBarras = lazy(() => import("../src/componentes/RestaurantesChef/ProcesosBarras"));

export function Rutas({ usuario, token, logout }) {
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
                    <Login token={token} usuario={usuario} />
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
                    token={token}
                    usuario={usuario}
                    path="/usuarios"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={UsuariosInsertar}
                    token={token}
                    usuario={usuario}
                    path="/usuarios/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad || usuario.administradorCuentas}
                    component={Cajas}
                    token={token}
                    usuario={usuario}
                    path="/cajas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Consecutivos}
                    token={token}
                    usuario={usuario}
                    path="/consecutivos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Roles}
                    token={token}
                    usuario={usuario}
                    path="/roles"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={RolesInsertar}
                    token={token}
                    usuario={usuario}
                    path="/roles/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={Paises}
                    token={token}
                    usuario={usuario}
                    path="/paises"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={PaisesInsertar || usuario.administradorSeguridad}
                    token={token}
                    usuario={usuario}
                    path="/paises/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={UnidadMedida}
                    token={token}
                    usuario={usuario}
                    path="/medidas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorSeguridad}
                    component={UnidadMedidaInsertar}
                    token={token}
                    usuario={usuario}
                    path="/medidas/insertar"
                    exact
                />


                {/* RESTAURANTES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Restaurantes}
                    token={token}
                    usuario={usuario}
                    path="/restaurantes"
                    exact
                />


                {/* CLIENTES */}
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Clientes}
                    token={token}
                    usuario={usuario}
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
                    token={token}
                    usuario={usuario}
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ProveedoresInsertar}
                    path="/proveedores/insertar"
                    token={token}
                    usuario={usuario}
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Marcas}
                    token={token}
                    usuario={usuario}
                    path="/marcas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={MarcasInsertar}
                    token={token}
                    usuario={usuario}
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
                    usuario={usuario}
                    path="/comestibles"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ComestiblesInsertar}
                    token={token}
                    usuario={usuario}
                    path="/comestibles/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Desechables}
                    token={token}
                    usuario={usuario}
                    path="/desechables"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={DesechablesInsertar}
                    token={token}
                    usuario={usuario}
                    path="/desechables/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Limpieza}
                    token={token}
                    usuario={usuario}
                    path="/limpieza"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={LimpiezaInsertar}
                    token={token}
                    usuario={usuario}
                    path="/limpieza/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Tecnologia}
                    token={token}
                    usuario={usuario}
                    path="/tecnologia"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={TecnologiaInsertar}
                    token={token}
                    usuario={usuario}
                    path="/tecnologia/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Utensilios}
                    token={token}
                    usuario={usuario}
                    path="/utensilios"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={UtensiliosInsertar}
                    token={token}
                    usuario={usuario}
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
                    usuario={usuario}
                    path="/empleados"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={EmpleadosInsertar}
                    token={token}
                    usuario={usuario}
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
                    usuario={usuario}
                    path="/mesas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={MesasInsertar}
                    token={token}
                    usuario={usuario}
                    path="/mesas/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Puestos}
                    token={token}
                    usuario={usuario}
                    path="/puestos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={PuestosInsertar}
                    token={token}
                    usuario={usuario}
                    path="/puestos/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Buffet}
                    token={token}
                    usuario={usuario}
                    path="/buffet"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={BuffetInsertar}
                    token={token}
                    usuario={usuario}
                    path="/buffet/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Especialidades}
                    token={token}
                    usuario={usuario}
                    path="/especialidades"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={EspecialidadesInsertar}
                    token={token}
                    usuario={usuario}
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
                    usuario={usuario}
                    path="/bebidas-calientes"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={CalientesInsertar}
                    token={token}
                    usuario={usuario}
                    path="/bebidas-calientes/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Heladas}
                    token={token}
                    usuario={usuario}
                    path="/bebidas-heladas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={HeladasInsertar}
                    token={token}
                    usuario={usuario}
                    path="/bebidas-heladas/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Gaseosas}
                    token={token}
                    usuario={usuario}
                    path="/gaseosas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={GaseosasInsertar}
                    token={token}
                    usuario={usuario}
                    path="/gaseosas/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Vinos}
                    token={token}
                    usuario={usuario}
                    path="/vinos"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={VinosInsertar}
                    token={token}
                    usuario={usuario}
                    path="/vinos/insertar"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={Licores}
                    token={token}
                    usuario={usuario}
                    path="/licores"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={LicoresInsertar}
                    token={token}
                    usuario={usuario}
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
                    token={token}
                    usuario={usuario}
                    path="/bitacoras"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema}
                    component={ReporteUsuarios}
                    token={token}
                    usuario={usuario}
                    path="/reporte-usuarios"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorSistema || usuario.administradorCuentas}
                    component={Facturas}
                    token={token}
                    usuario={usuario}
                    path="/facturas"
                    exact
                />

                {/* RESTAURANTES CHEF */}
                <PrivateRoute
                    hasRole={usuario.administradorRestaurante}
                    component={AperturaCaja}
                    token={token}
                    usuario={usuario}
                    path="/apertura-caja"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorRestaurante}
                    component={CierreCaja}
                    token={token}
                    logout={logout}
                    usuario={usuario}
                    path="/cierre-caja"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorRestaurante}
                    component={PiccolaStella}
                    token={token}
                    path="/piccola-stella"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorRestaurante}
                    component={TurinAnivo}
                    token={token}
                    path="/turin-anivo"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorRestaurante}
                    component={NotteDiFuoco}
                    token={token}
                    path="/notte-di-fuoco"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorRestaurante}
                    component={ProcesosMesas}
                    token={token}
                    path="/procesos-mesas"
                    exact
                />
                <PrivateRoute
                    hasRole={usuario.administradorRestaurante}
                    component={ProcesosBarras}
                    token={token}
                    path="/procesos-barras"
                    exact
                />

            </Switch>

        </Suspense>
    )
}