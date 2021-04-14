import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeRequest } from "../../../utils/API";
import { formatearFecha } from "../../../utils/utils";
import InputTexto from "../Inputs/InputTexto";
import InputNumero from "../Inputs/InputNumero";
import InputRadio from "../Inputs/InputRadio";
import InputFecha from "../Inputs/InputFecha";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputPassword from "../Inputs/InputPassword";
import SelectFromApi from "../Inputs/SelectFromApi";
import SelectProductos from "../Inputs/SelectProductos";
import Filtro from "./Filtro";
import Tabla from "./Tabla";
import MensajeCargando from "../Mensajes/MensajeCargando";
import MensajeError from "../Mensajes/MensajeError";
import MensajeExito from "../Mensajes/MensajeExito";
import BotonAtras from "../Botones/BotonAtras";

export default function Busqueda({
    titulo,
    tabla,
    columnas,
    filtros,
    insertarURL,
    backURL,
    editarTitulo,
    editarCampos,
    soloBusqueda,
    soloEditar,
    isFormData,
    token,
    tamano,
    barra,
    mesas,
    usuario
}) {
    const { control, register, handleSubmit, reset, errors } = useForm();
    const [tablaData, setTablaData] = useState([]);
    const [dataFiltrada, setDataFiltrada] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [falloTabla, setFalloTabla] = useState(false);
    const [exitoFiltro, setExitoFiltro] = useState(false);
    const [noDataFiltro, setNoDataFiltro] = useState(false);

    const onFiltrar = (filtros) => {
        setExitoFiltro(false);
        setNoDataFiltro(false);

        const data = tablaData.filter(function (item) {
            for (var filtroKey in filtros) {
                // Formatea las fechas de los filtros a MM/DD/YYY
                if (filtros[filtroKey] !== "" && filtroKey === "fecha") {
                    filtros[filtroKey] = formatearFecha(filtros[filtroKey]);
                }

                // Cambia valores numericos a String para hacer comparacion de filtros
                if (typeof item[filtroKey] === "number") {
                    item[filtroKey] = item[filtroKey].toString();
                }

                if (filtroKey !== "fechaInicio" && filtroKey !== "fechaFinal") {
                    // Si el filtro no es vacio y no hace match no el item, no agrega el elemento al array
                    if (filtros[filtroKey] !== "" && item[filtroKey] !== filtros[filtroKey]) {
                        return false;
                    }
                }
            }

            // Filtro rango de fechas
            if ((item.fecha || item.fechaHora) && (filtros.fechaInicio || filtros.fechaFinal)) {
                const itemFecha = item.fecha ? new Date(`${item.fecha} 00:00`) : new Date(`${item.fechaHora}`);
                const fechaInicio = filtros.fechaInicio && new Date(`${filtros.fechaInicio} 00:00`);
                const fechaFinal = filtros.fechaFinal && new Date(`${filtros.fechaFinal} 00:00`);
                if (filtros.fechaInicio !== "" && filtros.fechaFinal === "") {
                    return fechaInicio <= itemFecha;
                } else if (filtros.fechaInicio === "" && filtros.fechaFinal !== "") {
                    return itemFecha <= fechaFinal;
                } else if (filtros.fechaInicio !== "" && filtros.fechaFinal !== "") {
                    return fechaInicio <= itemFecha && itemFecha <= fechaFinal;
                }
            }

            return true;
        });
        if (data.length > 0) {
            setExitoFiltro(true);
        } else {
            setNoDataFiltro(true);
        }
        setDataFiltrada(data);
    };

    const cargarTabla = () => {
        // ** Falta: ty catch
        setCargando(true);
        makeRequest('GET', '/' + tabla, token)
            .then(response => response.json())
            .then(data => {
                if (barra) {
                    data = data.filter(elemento => elemento.barra);
                } else if (mesas) {
                    data = data.filter(elemento => !elemento.barra);
                }
                setTablaData(data);
                setCargando(false);
                setDataFiltrada([]);
                setExitoFiltro(false);
                setNoDataFiltro(false);
            })
            .catch(() => {
                setFalloTabla(true);
            });
    };

    const limpiarFiltros = () => {
        setDataFiltrada([]);
        reset();
        setExitoFiltro(false);
        setNoDataFiltro(false);
    };

    useEffect(cargarTabla, [tabla, token, barra, mesas]);

    return (
        <Container>
            <form>
                <Row>
                    <Col className="text-left" xl={12} lg={12} md={12} sm={12} xs={12}>
                        <BotonAtras url={backURL} />
                    </Col>
                </Row>
                {filtros &&
                    <Filtro
                        soloEditar={soloEditar}
                        soloBusqueda={soloBusqueda}
                        filtrar={handleSubmit(onFiltrar)}
                        titulo={titulo}
                        limpiar={limpiarFiltros}
                        insertarURL={insertarURL ? insertarURL : tabla + '/insertar'}>
                        <Row>
                            {
                                filtros.length > 0 && filtros.map(((filtro, index) =>
                                    filtro.tipo === 'texto'
                                        ?
                                        <InputTexto
                                            key={index}
                                            label={filtro.label}
                                            name={filtro.name}
                                            placeholder={filtro.placeholder}
                                            size={filtro.size}
                                            required={false}
                                            register={register}
                                            errors={errors} />
                                        : filtro.tipo === 'SelectFromApi'
                                            ?
                                            <SelectFromApi
                                                key={index}
                                                token={token}
                                                tabla={filtro.tabla}
                                                label={filtro.label}
                                                name={filtro.name}
                                                size={filtro.size}
                                                required={false}
                                                register={register}
                                                errors={errors} />
                                            : filtro.tipo === 'numero'
                                                ?
                                                <InputNumero
                                                    key={index}
                                                    label={filtro.label}
                                                    name={filtro.name}
                                                    placeholder={filtro.placeholder}
                                                    size={filtro.size}
                                                    required={false}
                                                    register={register}
                                                    errors={errors} />
                                                : filtro.tipo === 'radio'
                                                    ?
                                                    <InputRadio
                                                        key={index}
                                                        label={filtro.label}
                                                        name={filtro.name}
                                                        value={filtro.value}
                                                        size={filtro.size}
                                                        register={register} />
                                                    : filtro.tipo === 'fecha'
                                                        ?
                                                        <InputFecha
                                                            key={index}
                                                            label={filtro.label}
                                                            name={filtro.name}
                                                            size={filtro.size}
                                                            required={false}
                                                            register={register}
                                                            errors={errors} />
                                                        : filtro.tipo === 'checkbox'
                                                            ?
                                                            <InputCheckbox
                                                                key={index}
                                                                label={filtro.label}
                                                                name={filtro.name}
                                                                value={filtro.value}
                                                                size={filtro.size}
                                                                register={register} />
                                                            : filtro.tipo === 'password'
                                                                ?
                                                                <InputPassword
                                                                    key={index}
                                                                    label={filtro.label}
                                                                    name={filtro.name}
                                                                    placeholder={filtro.placeholder}
                                                                    size={filtro.size}
                                                                    required={false}
                                                                    register={register}
                                                                    errors={errors} />
                                                                : filtro.tipo === 'SelectProductos' &&
                                                                <SelectProductos
                                                                    key={index}
                                                                    label={filtro.label}
                                                                    name={filtro.name}
                                                                    size={filtro.size}
                                                                    control={control}
                                                                    token={token} />
                                ))
                            }
                        </Row>
                    </Filtro>
                }
                {exitoFiltro && <MensajeExito texto="Filtros aplicados con éxito!"></MensajeExito>}
                <MensajeError error={noDataFiltro} mensaje='No existen resultados para los filtros aplicados' />
                <br></br>
            </form>

            <MensajeCargando cargando={cargando && !falloTabla} />
            <MensajeError error={falloTabla} />
            {
                (!cargando && !falloTabla) &&
                <Tabla
                    tamano={tamano}
                    isFormData={isFormData}
                    soloBusqueda={soloBusqueda}
                    editarCampos={editarCampos}
                    editarTitulo={editarTitulo}
                    token={token}
                    usuario={usuario}
                    tablaData={dataFiltrada.length > 0 ? dataFiltrada : tablaData}
                    cargarTabla={cargarTabla}
                    columnas={columnas}
                    tabla={tabla} />
            }
        </Container>
    )
}
