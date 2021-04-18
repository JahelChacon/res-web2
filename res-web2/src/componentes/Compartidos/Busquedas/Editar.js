import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Modal, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../utils/API"
import { formatearFecha, insertarBitacora } from "../../../utils/utils";
import { makeRequest } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputNumero from "../Inputs/InputNumero";
import InputRadio from "../Inputs/InputRadio";
import InputImagen from "../Inputs/InputImagen";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputPassword from "../Inputs/InputPassword";
import InputFecha from "../Inputs/InputFecha";
import EditPassword from "../Inputs/EditPassword";
import SelectProductos from "../Inputs/SelectProductos";
import SelectFromApi from "../Inputs/SelectFromApi";
import SelectStatus from "../Inputs/SelectStatus";
import BotonesEditar from "../Botones/BotonesEditar";

export default function Editar({
    tabla,
    show,
    close,
    token,
    usuario,
    campos,
    titulo,
    exitoEditar,
    falloEditar,
    elemento,
    tamano = 'lg',
    isFormData
}) {
    const { control, register, reset, handleSubmit, errors } = useForm();
    const [editando, setEditando] = useState(false);

    const onEditar = (form) => {
        setEditando(true);
        let formData = null;
        let objectData = !isFormData ? form : null;
        Object.keys(form).forEach(function (key) {
            // Formatea las fechas a MM/DD/YYY
            if (key === 'fechaIngreso' || key === 'fecha') {
                form[key] = formatearFecha(form[key]);
            }

            // Cambio de contraseña
            if (key === 'cambioContrasena' && !form[key]) {
                form.contrasena = "";
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
        makeRequest('POST', `/${tabla}/update/${elemento._id}`, token, objectData, formData)
            .then(response => {
                if (response.status === 200) {
                    exitoEditar();
                    insertarBitacora(token, usuario.login, `Elemento ${elemento._id} de la tabla ${tabla} editado con éxito!`);
                } else {
                    falloEditar();
                    insertarBitacora(token, usuario.login, `Fallo al editar elemento ${elemento._id} de la tabla ${tabla}`);
                }
                setEditando(false);
            })
    };

    return (
        <Modal show={show} onHide={close} centered size={tamano}>
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
                                                readOnly={campo.readOnly}
                                                register={register}
                                                required={campo.required}
                                                errors={errors} />
                                            : campo.tipo === 'SelectFromApi'
                                                ?
                                                <SelectFromApi
                                                    value={elemento[campo.name] && elemento[campo.name]}
                                                    key={index}
                                                    texto={campo.texto && campo.texto}
                                                    token={token}
                                                    disabled={campo.disabled}
                                                    tabla={campo.tabla}
                                                    label={campo.label}
                                                    name={campo.name}
                                                    size={campo.size}
                                                    required={campo.required}
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
                                                        readOnly={campo.readOnly}
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
                                                                    disabled={campo.disabled}
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
                                                                            value={elemento[campo.name] && elemento[campo.name]}
                                                                            label={campo.label}
                                                                            name={campo.name}
                                                                            size={campo.size}
                                                                            required={false}
                                                                            disabled={campo.disabled}
                                                                            register={register}
                                                                            errors={errors} />
                                                                        : campo.tipo === 'SelectProductos'
                                                                            ?
                                                                            <SelectProductos
                                                                                value={(elemento.productos && elemento.productos.length > 0) && elemento.productos}
                                                                                key={index}
                                                                                label={campo.label}
                                                                                name={campo.name}
                                                                                size={campo.size}
                                                                                control={control}
                                                                                token={token} />
                                                                            : campo.tipo === 'EditPassword'
                                                                                ?
                                                                                <EditPassword
                                                                                    key={index}
                                                                                    name={campo.name}
                                                                                    size={campo.size}
                                                                                    register={register}
                                                                                    errors={errors} />
                                                                                : campo.tipo === 'SelectStatus' &&
                                                                                <SelectStatus
                                                                                    value={elemento[campo.name]}
                                                                                    key={index}
                                                                                    label={campo.label}
                                                                                    name={campo.name}
                                                                                    disabled={campo.disabled}
                                                                                    register={register}
                                                                                    errors={errors}
                                                                                    size={campo.size} />
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
