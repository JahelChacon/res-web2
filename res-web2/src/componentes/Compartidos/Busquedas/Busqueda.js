import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
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
    const [camposFiltro, setcamposFiltro] = useState(false);

    const onFiltrar = (form) => {
        setcamposFiltro(form);
    };

    return (
        <Container>
            <form>
                <Filtro
                    soloEditar={soloEditar}
                    soloBusqueda={soloBusqueda}
                    filtrar={handleSubmit(onFiltrar)}
                    backURL={backURL}
                    titulo={titulo}
                    limpiar={reset}
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
                <br></br>
            </form>
            <Tabla
                isFormData={isFormData}
                soloBusqueda={soloBusqueda}
                editarCampos={editarCampos}
                editarTitulo={editarTitulo}
                token={token}
                columnas={columnas}
                filtros={camposFiltro}
                tabla={tabla}/>
        </Container>
    )
}
