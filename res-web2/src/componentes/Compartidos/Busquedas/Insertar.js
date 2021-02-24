import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card } from "react-bootstrap";
import InputTexto from "../../Compartidos/Inputs/InputTexto";
import InputImagen from "../Inputs/InputImagen";
import InputRadio from "../Inputs/InputRadio";
import InputNumero from "../Inputs/InputNumero";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputPassword from "../Inputs/InputPassword";
import SelectFromApi from "../Inputs/SelectFromApi";
import BotonesInsertar from "../../Compartidos/Botones/BotonesInsertar";
import ModalExito from "../Modales/ModalExito";

export default function Insertar({
    titulo,
    tabla,
    camposDerecha,
    camposIzquierda,
    cancelarURL,
    token
}) {
    const [mostrarExito, setMostrarExito] = useState(false);

    // ***FALTA: Agregar campo de codigo de forma automatica

    const onAgregar = (data) => {
        console.log('Agregando! ', data);
        setMostrarExito(true);
        // Agregar POST /delete
    };

    const { register, handleSubmit, reset, errors } = useForm();
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
                                                                        : campo.tipo === 'password' &&
                                                                        <InputPassword
                                                                            key={index}
                                                                            label={campo.label}
                                                                            name={campo.name}
                                                                            placeholder={campo.placeholder}
                                                                            size={campo.size}
                                                                            required={false}
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
                                                                        : campo.tipo === 'password' &&
                                                                        <InputPassword
                                                                            key={index}
                                                                            label={campo.label}
                                                                            name={campo.name}
                                                                            placeholder={campo.placeholder}
                                                                            size={campo.size}
                                                                            required={false}
                                                                            register={register}
                                                                            errors={errors} />
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                <BotonesInsertar limpiar={reset} cancelar={cancelarURL ? cancelarURL : "/" + tabla} />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </form>
            <ModalExito close={() => setMostrarExito(false)} show={mostrarExito} texto='Elemento insertado con éxito!' />
        </Container>
    )
}
