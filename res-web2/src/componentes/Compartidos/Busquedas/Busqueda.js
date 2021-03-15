import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeRequest } from "../../../utils/API";
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
    token
}) {
    const { control, register, handleSubmit, reset, errors } = useForm();
    const [tablaData, setTablaData] = useState([]);
    const [dataFiltrada, setDataFiltrada] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [falloTabla, setFalloTabla] = useState(false);
    const [exitoFiltro, setExitoFiltro] = useState(false);

    const onFiltrar = (filtros) => {
        const data = tablaData.filter(function (item) {
            for (var key in filtros) {
                if (filtros[key] !== "" && item[key] !== filtros[key]) {
                    return false;
                }
            }
            return true;
        });
        setDataFiltrada(data);
        setExitoFiltro(true);
    };

    const cargarTabla = () => {
        // ** Falta: ty catch
        setCargando(true);
        makeRequest('GET', '/' + tabla, token)
            .then(response => response.json())
            .then(data => {
                setTablaData(data);
                setCargando(false);
            })
            .catch(() => {
                setFalloTabla(true);
            });
    };

    const limpiarFiltros = () => {
        setDataFiltrada([]);
        reset();
        if (exitoFiltro) {
            setExitoFiltro(false);
        }
    };

    useEffect(cargarTabla, [tabla, token]);

    return (
        <Container>
            <form>
                <Filtro
                    soloEditar={soloEditar}
                    soloBusqueda={soloBusqueda}
                    filtrar={handleSubmit(onFiltrar)}
                    backURL={backURL}
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
                {exitoFiltro && <MensajeExito texto="Filtros aplicados con éxito!"></MensajeExito>}
                <br></br>
            </form>

            <MensajeCargando cargando={cargando && !falloTabla} />
            <MensajeError error={falloTabla} />
            {
                (!cargando && !falloTabla) &&
                <Tabla
                    isFormData={isFormData}
                    soloBusqueda={soloBusqueda}
                    editarCampos={editarCampos}
                    editarTitulo={editarTitulo}
                    token={token}
                    tablaData={dataFiltrada.length > 0 ? dataFiltrada : tablaData}
                    cargarTabla={cargarTabla}
                    columnas={columnas}
                    tabla={tabla} />
            }
        </Container>
    )
}
