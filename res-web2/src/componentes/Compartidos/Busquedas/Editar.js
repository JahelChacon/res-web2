import React from "react";
import { Modal, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../utils/API"
import InputTexto from "../Inputs/InputTexto";
import InputNumero from "../Inputs/InputNumero";
import InputRadio from "../Inputs/InputRadio";
import InputImagen from "../Inputs/InputImagen";
import SelectFromApi from "../Inputs/SelectFromApi";
import BotonesEditar from "../Botones/BotonesEditar";

export default function Editar({
    show,
    close,
    token,
    campos,
    titulo,
    elemento,
    editar
}) {
    const { register, reset, handleSubmit, errors } = useForm();
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
                                                        : campo.tipo === 'imagen' &&
                                                        <InputImagen
                                                            key={index}
                                                            value={API_URL + elemento[campo.name]}
                                                            label={campo.label}
                                                            name={campo.name}
                                                            size={campo.size}
                                                            required={false}
                                                            register={register}
                                                            errors={errors} />
                                    ))
                                }
                            </Row>
                        </Card.Body>
                        <footer>
                            <BotonesEditar editar={handleSubmit(editar)} cerrar={close} limpiar={reset} />
                        </footer>
                    </Card>
                </form>
            </Modal.Body>
        </Modal>
    );
}
