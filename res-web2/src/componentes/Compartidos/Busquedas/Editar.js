import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Modal, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../utils/API"
import { makeRequest } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputNumero from "../Inputs/InputNumero";
import InputRadio from "../Inputs/InputRadio";
import InputImagen from "../Inputs/InputImagen";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputPassword from "../Inputs/InputPassword";
import InputFecha from "../Inputs/InputFecha";
import SelectProductos from "../Inputs/SelectProductos";
import SelectFromApi from "../Inputs/SelectFromApi";
import BotonesEditar from "../Botones/BotonesEditar";

export default function Editar({
    tabla,
    show,
    close,
    token,
    campos,
    titulo,
    exitoEditar,
    falloEditar,
    elemento,
    isFormData
}) {
    const { control, register, reset, handleSubmit, errors } = useForm();
    const [editando, setEditando] = useState(false);

    const onEditar = (form) => {
        setEditando(true);
        let formData = null;
        let objectData = !isFormData ? form : null;
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
        makeRequest('POST', `/${tabla}/update/${elemento._id}`, token, objectData, formData)
            .then(response => {
                if (response.status === 200) {
                    exitoEditar();
                } else {
                    falloEditar();
                }
                setEditando(false);
            })
    };

    return (
        <Modal show={show} onHide={close} centered size="lg">
            <Modal.Body>
                <form>
                    <Card>
                        <Card.Header className="bg-primary text-white text-center">
                            <h2>{titulo}</h2>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                {
                                    (campos && campos.length > 0) && campos.map(((campo, index) =>
                                        campo.tipo === 'texto'
                                            ?
                                            <InputTexto
                                                value={elemento[campo.name] && elemento[campo.name]}
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
                                                    value={elemento[campo.name] && elemento[campo.name]}
                                                    key={index}
                                                    texto={campo.texto && campo.texto}
                                                    token={token}
                                                    tabla={campo.tabla}
                                                    label={campo.label}
                                                    name={campo.name}
                                                    size={campo.size}
                                                    register={register}
                                                    errors={errors} />
                                                : campo.tipo === 'numero'
                                                    ?
                                                    <InputNumero
                                                        value={elemento[campo.name] && elemento[campo.name]}
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
                                                        : campo.tipo === 'imagen'
                                                            ?
                                                            <InputImagen
                                                                key={index}
                                                                value={API_URL + elemento[campo.name]}
                                                                label={campo.label}
                                                                name={campo.name}
                                                                size={campo.size}
                                                                required={false}
                                                                register={register}
                                                                errors={errors} />
                                                            : campo.tipo === 'checkbox'
                                                                ?
                                                                <InputCheckbox
                                                                    key={index}
                                                                    label={campo.label}
                                                                    name={campo.name}
                                                                    value={elemento[campo.name] && elemento[campo.name]}
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
                                                                    : campo.tipo === 'fecha'
                                                                        ?
                                                                        <InputFecha
                                                                            key={index}
                                                                            label={campo.label}
                                                                            name={campo.name}
                                                                            size={campo.size}
                                                                            required={false}
                                                                            register={register}
                                                                            errors={errors} />
                                                                        : campo.tipo === 'SelectProductos' &&
                                                                        <SelectProductos
                                                                            value={elemento.productos && JSON.parse(elemento.productos)}
                                                                            key={index}
                                                                            label={campo.label}
                                                                            name={campo.name}
                                                                            size={campo.size}
                                                                            control={control}
                                                                            token={token} />
                                    ))
                                }
                            </Row>
                        </Card.Body>
                        <footer>
                            {editando ?
                                <div className="ml-4">
                                    <Spinner animation="border" />
                                </div>
                                :
                                <BotonesEditar editar={handleSubmit(onEditar)} cerrar={close} limpiar={reset} />
                            }
                        </footer>
                    </Card>
                </form>
            </Modal.Body>
        </Modal>
    );
}
