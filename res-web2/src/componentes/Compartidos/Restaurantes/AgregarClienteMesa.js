import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Modal, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputTexto from "../Inputs/InputTexto";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputFecha from "../Inputs/InputFecha";
import SelectFromApi from "../Inputs/SelectFromApi";
import BotonesAgregarModal from "../Botones/BotonesAgregarModal";

export default function AgregarClienteMesa({
    show,
    close,
    token,
    exitoAgregar,
    falloAgregar,
    restaurante,
    mesa
}) {
    const { register, reset, handleSubmit, errors } = useForm();
    const [agregando] = useState(false);

    const onAgregar = (form) => {
        console.log('Agregando cliente de mesa: ', mesa);
        exitoAgregar();
        // makeRequest('POST', `/${tabla}/update/${elemento._id}`, token, form)
        //     .then(response => {
        //         if (response.status === 200) {
        //             exitoEditar();
        //         } else {
        //             falloEditar();
        //         }
        //         setAgregando(false);
        //     })
    };

    return (
        <Modal show={show} onHide={close} centered size="xl">
            <Modal.Body>
                <form>
                    <Card>
                        <Card.Header className="bg-primary text-white text-center">
                            <h2>Agregar Cliente en Mesa {mesa.numero}</h2>
                        </Card.Header>
                        <Card.Body>
                            <h3>Datos del Cliente</h3>
                            <Row>
                                <InputTexto
                                    label='Codigo del Cliente'
                                    name='codigo'
                                    placeholder='Codigo del Cliente'
                                    size='medium'
                                    disabled={true}
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    label='Nombre del Cliente'
                                    name='nombre'
                                    placeholder='Nombre del Cliente'
                                    size='medium'
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    value={mesa.nombre}
                                    label='Nombre de la Mesa'
                                    name='mesa'
                                    placeholder='Nombre de la Mesa'
                                    size='medium'
                                    disabled={true}
                                    register={register}
                                    errors={errors} />
                                <SelectFromApi
                                    value={restaurante}
                                    token={token}
                                    tabla='restaurantes'
                                    label='Restaurante'
                                    name='restaurante'
                                    size='medium'
                                    disabled={true}
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    label='Hora de Entrada'
                                    name='horaEntrada'
                                    placeholder='Hora de Entrada'
                                    size='medium'
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    label='Hora de Salida'
                                    name='horaSalida'
                                    placeholder='Hora de Salida'
                                    size='medium'
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    label='Duración en la Mesa'
                                    name='duracion'
                                    placeholder='Duración en la Mesa'
                                    size='medium'
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    label='Monto de Pago'
                                    name='pago'
                                    placeholder='Monto de Pago'
                                    size='medium'
                                    register={register}
                                    errors={errors} />
                            </Row>
                            <h3>Fechas del Cliente</h3>
                            <Row>
                                <InputCheckbox
                                    label='Reservación'
                                    name='reservacion'
                                    size='medium'
                                    register={register} />
                            </Row>
                            <Row>
                                <InputFecha
                                    label='Fecha de Llegada'
                                    name='fechaLlegada'
                                    size='medium'
                                    register={register}
                                    errors={errors} />
                                <InputFecha
                                    label='Fecha de Reservación'
                                    name='fechaReservacion'
                                    size='medium'
                                    register={register}
                                    errors={errors} />
                            </Row>
                            <h3>Información del Pedido</h3>
                            <Row>
                                <InputTexto
                                    value={mesa.numero}
                                    label='Numero de la Mesa'
                                    name='mesaNumero'
                                    placeholder='Numero de la Mesa'
                                    size='medium'
                                    disabled={true}
                                    register={register}
                                    errors={errors} />
                            </Row>
                            {
                                mesa.sillas && [...Array(mesa.sillas)].map(((silla, index) =>
                                    <Row key={index}>
                                        <InputTexto
                                            key={index}
                                            label={`Pedido Silla ${index + 1}`}
                                            name={`pedidoSilla${index + 1}`}
                                            placeholder={`Pedido Silla ${index + 1}`}
                                            size='medium'
                                            register={register}
                                            errors={errors} />
                                    </Row>
                                ))
                            }
                            <h3>Facturación</h3>
                            <Row>
                                <InputTexto
                                    label='Estado de la Cuenta'
                                    name='estadoCuenta'
                                    placeholder='Estado de la Cuenta'
                                    size='medium'
                                    disabled={true}
                                    register={register}
                                    errors={errors} />
                            </Row>
                        </Card.Body>
                        <footer>
                            {agregando ?
                                <div className="ml-4">
                                    <Spinner animation="border" />
                                </div>
                                :
                                <BotonesAgregarModal agregar={handleSubmit(onAgregar)} cerrar={close} limpiar={reset} />
                            }
                        </footer>
                    </Card>
                </form>
            </Modal.Body>
        </Modal>
    );
}
