import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeRequest } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputNumero from "../Inputs/InputNumero";
import InputRadio from "../Inputs/InputRadio";
import SelectFromApi from "../Inputs/SelectFromApi";
import Filtro from "./Filtro";
import Tabla from "./Tabla";
import MensajeCargando from "../Mensajes/MensajeCargando";
import MensajeError from "../Mensajes/MensajeError";

export default function Busqueda({
    titulo,
    tabla,
    columnas,
    filtros,
    insertarURL,
    backURL,
    editarTitulo,
    editarCampos,
    token
}) {
    const { register, getValues, reset, errors } = useForm();
    const [tablaData, setTablaData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [fallo, setFallo] = useState(false);

    useEffect(() => {
        makeRequest('GET', '/' + tabla, null, token)
            .then(response => response.json())
            .then(data => {
                setTablaData(data);
                setCargando(false);
            })
            .catch((error) => {
                setFallo(true);
            });
    }, [tabla, token]);

    const onFiltrar = () => {
        console.log('Filtrando: ', getValues());
    };

    return (
        <Container>
            <form>
                <Filtro filtrar={onFiltrar} backURL={backURL} titulo={titulo} limpiar={reset} insertarURL={insertarURL ? insertarURL : tabla + '/insertar'}>
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
                                            : filtro.tipo === 'radio' &&
                                            <InputRadio
                                                key={index}
                                                label={filtro.label}
                                                name={filtro.name}
                                                value={filtro.value}
                                                size={filtro.size}
                                                register={register} />
                            ))
                        }
                    </Row>
                </Filtro>
                <br></br>
            </form>
            <MensajeCargando cargando={cargando && !fallo} />
            <MensajeError error={fallo} />
            {
                (!cargando && !fallo) &&
                <Tabla
                    editarCampos={editarCampos}
                    editarTitulo={editarTitulo}
                    token={token}
                    columnas={columnas}
                    filas={tablaData} />
            }
        </Container>
    )
}
