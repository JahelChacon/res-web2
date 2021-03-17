import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import { Spinner } from "react-bootstrap";
import InputTexto from "../../Compartidos/Inputs/InputTexto";
import InputImagen from "../Inputs/InputImagen";
import InputRadio from "../Inputs/InputRadio";
import InputNumero from "../Inputs/InputNumero";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputPassword from "../Inputs/InputPassword";
import InputFecha from "../Inputs/InputFecha";
import InsertarPassword from "../Inputs/InsertarPassword";
import SelectProductos from "../Inputs/SelectProductos";
import SelectFromApi from "../Inputs/SelectFromApi";
import BotonesInsertar from "../../Compartidos/Botones/BotonesInsertar";
import ModalExito from "../Mensajes/ModalExito";
import ModalError from "../Mensajes/ModalError";

export default function Insertar({
    titulo,
    tabla,
    camposDerecha,
    camposIzquierda,
    cancelarURL,
    token,
    isFormData
}) {
    const { control, register, handleSubmit, reset, errors } = useForm();
    const [mostrarExito, setMostrarExito] = useState(false);
    const [mostrarFallo, setMostrarFallo] = useState(false);
    const [insertando, setInsertando] = useState(false);

    // ***FALTA: Agregar campo de codigo de forma automatica

    const onAgregar = (form) => {
        setInsertando(true);
        let formData = null;
        let objectData = !isFormData ? form : null;

        // Formatea las fechas a MM/DD/YYY
        Object.keys(form).forEach(function (key) {
            if (key === 'fechaIngreso' || key === 'fecha') {
                const fecha = new Date(form[key]);
                const fechaFormateada = [fecha.getMonth() + 1, fecha.getDate() + 1, fecha.getFullYear()].join('/');
                form[key] = fechaFormateada;
            }
        });

        // Crear form data si es necesario
        if (isFormData) {
            formData = new FormData();
            Object.keys(form).forEach(function (key) {
                const value = form[key];
                if (value instanceof FileList) {
                    formData.append(key, value[0]);
                } else if (value instanceof Array) {
                    formData.append(key, JSON.stringify(value))
                } else {
                    formData.append(key, value);
                }
            });
        }
        makeRequest('POST', `/${tabla}/add`, token, objectData, formData)
            .then(response => {
                if (response.status === 200) {
                    setMostrarExito(true);
                    reset();
                } else {
                    setMostrarFallo(true);
                }
                setInsertando(false);
            })
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onAgregar)}>
                <Row>
                    <Col xl={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Header className="bg-primary text-white">
                                <h2>{titulo}</h2>
                            </Card.Header>
                            <Card.Body style={{ textAlign: "left" }}>
                                <Row>
                                    <Col>
                                        {(camposDerecha && camposDerecha.titulo) && <h3>{camposDerecha.titulo}</h3>}
                                        {
                                            (camposDerecha && camposDerecha.campos.length > 0) && camposDerecha.campos.map(((campo, index) =>
                                                campo.tipo === 'texto'
                                                    ?
                                                    <InputTexto
                                                        key={index}
                                                        label={campo.label}
                                                        name={campo.name}
                                                        placeholder={campo.placeholder}
                                                        size={campo.size}
                                                        disabled={campo.disabled && campo.disabled}
                                                        register={register}
                                                        required={campo.name === 'codigo' ? false : true}
                                                        errors={errors} />
                                                    : campo.tipo === 'SelectFromApi'
                                                        ?
                                                        <SelectFromApi
                                                            key={index}
                                                            token={token}
                                                            label={campo.label}
                                                            name={campo.name}
                                                            size={campo.size}
                                                            register={register}
                                                            tabla={campo.tabla}
                                                            required={campo.required}
                                                            errors={errors} />
                                                        : campo.tipo === 'imagen'
                                                            ?
                                                            <InputImagen
                                                                key={index}
                                                                label={campo.label}
                                                                name={campo.name}
                                                                size={campo.size}
                                                                register={register}
                                                                errors={errors} />
                                                            : campo.tipo === 'numero'
                                                                ?
                                                                <InputNumero
                                                                    key={index}
                                                                    label={campo.label}
                                                                    name={campo.name}
                                                                    placeholder={campo.placeholder}
                                                                    size={campo.size}
                                                                    register={register}
                                                                    errors={errors} />
                                                                : campo.tipo === 'radio'
                                                                    ?
                                                                    <InputRadio
                                                                        key={index}
                                                                        label={campo.label}
                                                                        name={campo.name}
                                                                        value={campo.value}
                                                                        size={campo.size}
                                                                        register={register} />
                                                                    : campo.tipo === 'checkbox'
                                                                        ?
                                                                        <InputCheckbox
                                                                            key={index}
                                                                            label={campo.label}
                                                                            name={campo.name}
                                                                            value={campo.value}
                                                                            size={campo.size}
                                                                            register={register} />
                                                                        : campo.tipo === 'password'
                                                                            ?
                                                                            <InputPassword
                                                                                key={index}
                                                                                label={campo.label}
                                                                                name={campo.name}
                                                                                placeholder={campo.placeholder}
                                                                                size={campo.size}
                                                                                required={false}
                                                                                register={register}
                                                                                errors={errors} />
                                                                            : campo.tipo === 'SelectProductos'
                                                                                ?
                                                                                <SelectProductos
                                                                                    key={index}
                                                                                    label={campo.label}
                                                                                    name={campo.name}
                                                                                    size={campo.size}
                                                                                    control={control}
                                                                                    token={token} />
                                                                                : campo.tipo === 'fecha'
                                                                                    ?
                                                                                    <InputFecha
                                                                                        key={index}
                                                                                        label={campo.label}
                                                                                        name={campo.name}
                                                                                        size={campo.size}
                                                                                        register={register}
                                                                                        errors={errors} />
                                                                                    : campo.tipo === 'InsertarPassword' &&
                                                                                    <InsertarPassword
                                                                                        key={index}
                                                                                        name={campo.name}
                                                                                        size={campo.size}
                                                                                        register={register}
                                                                                        errors={errors} />
                                            ))
                                        }
                                    </Col>
                                    <Col>
                                        {(camposIzquierda && camposIzquierda.titulo) ? <h3>{camposIzquierda.titulo}</h3> : <h3>&nbsp;&nbsp;</h3>}
                                        {
                                            (camposIzquierda && camposIzquierda.campos.length > 0) && camposIzquierda.campos.map(((campo, index) =>
                                                campo.tipo === 'texto'
                                                    ?
                                                    <InputTexto
                                                        key={index}
                                                        label={campo.label}
                                                        name={campo.name}
                                                        placeholder={campo.placeholder}
                                                        size={campo.size}
                                                        disabled={campo.disabled && campo.disabled}
                                                        register={register}
                                                        errors={errors} />
                                                    : campo.tipo === 'SelectFromApi'
                                                        ?
                                                        <SelectFromApi
                                                            key={index}
                                                            token={token}
                                                            label={campo.label}
                                                            name={campo.name}
                                                            size={campo.size}
                                                            register={register}
                                                            required={campo.required}
                                                            tabla={campo.tabla}
                                                            errors={errors} />
                                                        : campo.tipo === 'imagen'
                                                            ?
                                                            <InputImagen
                                                                key={index}
                                                                label={campo.label}
                                                                name={campo.name}
                                                                size={campo.size}
                                                                register={register}
                                                                errors={errors} />
                                                            : campo.tipo === 'numero'
                                                                ?
                                                                <InputNumero
                                                                    key={index}
                                                                    label={campo.label}
                                                                    name={campo.name}
                                                                    placeholder={campo.placeholder}
                                                                    size={campo.size}
                                                                    register={register}
                                                                    errors={errors} />
                                                                : campo.tipo === 'radio'
                                                                    ?
                                                                    <InputRadio
                                                                        key={index}
                                                                        label={campo.label}
                                                                        name={campo.name}
                                                                        value={campo.value}
                                                                        size={campo.size}
                                                                        register={register} />
                                                                    : campo.tipo === 'checkbox'
                                                                        ?
                                                                        <InputCheckbox
                                                                            key={index}
                                                                            label={campo.label}
                                                                            name={campo.name}
                                                                            value={campo.value}
                                                                            size={campo.size}
                                                                            register={register} />
                                                                        : campo.tipo === 'password'
                                                                            ?
                                                                            <InputPassword
                                                                                key={index}
                                                                                label={campo.label}
                                                                                name={campo.name}
                                                                                placeholder={campo.placeholder}
                                                                                size={campo.size}
                                                                                required={false}
                                                                                register={register}
                                                                                errors={errors} />
                                                                            : campo.tipo === 'SelectProductos'
                                                                                ?
                                                                                <SelectProductos
                                                                                    key={index}
                                                                                    label={campo.label}
                                                                                    name={campo.name}
                                                                                    size={campo.size}
                                                                                    control={control}
                                                                                    token={token} />
                                                                                : campo.tipo === 'InsertarPassword' &&
                                                                                <InsertarPassword
                                                                                    key={index}
                                                                                    name={campo.name}
                                                                                    size={campo.size}
                                                                                    register={register}
                                                                                    errors={errors} />
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                {
                                    insertando ?
                                        <div className="mr-4">
                                            <Spinner animation="border" />
                                        </div>
                                        :
                                        <BotonesInsertar limpiar={reset} cancelar={cancelarURL ? cancelarURL : "/" + tabla} />
                                }
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </form>
            <ModalExito close={() => setMostrarExito(false)} show={mostrarExito} texto='Elemento Insertado con éxito!' />
            <ModalError close={() => setMostrarFallo(false)} show={mostrarFallo} texto='Ocurrió un error al Insertar el elemento. Por favor, intente de nuevo.' />
        </Container>
    )
}
