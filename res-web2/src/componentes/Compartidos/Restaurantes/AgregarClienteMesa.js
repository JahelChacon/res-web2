import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Modal, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { formatearFecha, STATUS_MESA } from "../../../utils/utils";
import { makeRequest } from "../../../utils/API";
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
    const [agregando, setAgregando] = useState(false);
    const fechaActual = new Date();
    const fechaFormateada = [fechaActual.getMonth() + 1, fechaActual.getDate(), fechaActual.getFullYear()].join('/');
    const horaFormateada = [fechaActual.getHours(), fechaActual.getMinutes()].join(':');

    const onAgregar = (form) => {
        setAgregando(true);
        const data = {
            nombre: form.nombre,
            fecha: formatearFecha(form.fechaLlegada),
            reservacion: form.reservacion ? true : false,
            restaurante: form.restaurante,
            barra: false,
            mesa: mesa._id,
            horaEntrada: form.horaEntrada,
            detalle: [],
            montoPago: 0
        };
        // Agregar cliente
        makeRequest('POST', `/clientes/add`, token, data)
            .then(response => {
                if (response.status === 200) {
                    // Actualizar status de Mesa
                    mesa.status = form.reservacion ? STATUS_MESA.RESERVADA : STATUS_MESA.OCUPADA;
                    makeRequest('POST', `/mesas/update/${mesa._id}`, token, mesa)
                        .then(response => {
                            if (response.status === 200) {
                                exitoAgregar();
                            } else {
                                falloAgregar();
                            }
                            setAgregando(false);
                        })
                } else {
                    falloAgregar();
                }
            })
    };

    return (
        <Modal show={show} onHide={close} centered size="xl">
            <Modal.Body>
                <form>
                    <Card>
                        <Card.Header className="bg-secondary text-white text-center">
                            <h2>Agregar Cliente en Mesa {mesa.numero}</h2>
                        </Card.Header>
                        <Card.Body>
                            <h3>Datos del Cliente</h3>
                            <Row>
                                <InputTexto
                                    label='Codigo del Cliente'
                                    name='codigo'
                                    size='x-pequeno'
                                    required={false}
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    label='Nombre del Cliente'
                                    name='nombre'
                                    placeholder='Nombre del Cliente'
                                    size='x-pequeno'
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    value={mesa.nombre}
                                    label='Nombre de la Mesa'
                                    name='mesa'
                                    placeholder='Nombre de la Mesa'
                                    size='x-pequeno'
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                                <SelectFromApi
                                    value={restaurante}
                                    token={token}
                                    tabla='restaurantes'
                                    label='Restaurante'
                                    name='restaurante'
                                    size='x-pequeno'
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    value={horaFormateada}
                                    label='Hora de Entrada'
                                    name='horaEntrada'
                                    size='x-pequeno'
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    value="00:00"
                                    label='Duración en la Mesa'
                                    name='duracion'
                                    size='x-pequeno'
                                    required={false}
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                            </Row>
                            <h3>Fechas del Cliente</h3>
                            <Row>
                                <InputFecha
                                    label='Fecha de Llegada'
                                    name='fechaLlegada'
                                    size='x-pequeno'
                                    required={false}
                                    value={fechaFormateada}
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                            </Row>
                            <Row>
                                <InputCheckbox
                                    label='Reservación'
                                    name='reservacion'
                                    size='x-pequeno'
                                    register={register} />
                            </Row>
                            {/* <h3>Información del Pedido</h3>
                            <Row>
                                <InputTexto
                                    value={mesa.numero}
                                    label='Numero de la Mesa'
                                    name='mesaNumero'
                                    placeholder='Numero de la Mesa'
                                    size='x-pequeno'
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                            </Row>
                            <Divider />
                            {
                                mesa.sillas && [...Array(mesa.sillas)].map(((silla, index) =>
                                    <SelectPedido
                                        key={index}
                                        token={token}
                                        label={`Pedido Silla ${index + 1}`}
                                        name={`pedidoSilla${index + 1}`}
                                        silla={index + 1}
                                        size='x-pequeno'
                                        control={control}
                                        getValues={getValues}
                                        register={register}
                                        errors={errors} />
                                ))
                            } */}
                            <h3>Facturación</h3>
                            <Row>
                                <InputTexto
                                    value="SIN PAGAR"
                                    label='Estado de la Cuenta'
                                    name='estadoCuenta'
                                    placeholder='Estado de la Cuenta'
                                    size='x-pequeno'
                                    readOnly={true}
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
