import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Modal, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { formatearFecha } from "../../../utils/utils";
import { makeRequest } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputFecha from "../Inputs/InputFecha";
import SelectFromApi from "../Inputs/SelectFromApi";
import BotonesAgregarModal from "../Botones/BotonesAgregarModal";

export default function AgregarClienteBarra({
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
            detalle: [{
                silla: '',
                pedido: '',
                buffet: form.detalle
            }],
            fecha: formatearFecha(form.fecha),
            reservacion: false,
            restaurante: form.restaurante,
            barra: true,
            horaEntrada: form.horaEntrada,
            montoPago: 0
        };
        // Agregar cliente
        makeRequest('POST', `/clientes/add`, token, data)
            .then(response => {
                if (response.status === 200) {
                    exitoAgregar();
                    setAgregando(false);
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
                            <h2>Agregar Cliente en Barra</h2>
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
                                <InputFecha
                                    label='Fecha de Llegada'
                                    name='fecha'
                                    size='x-pequeno'
                                    value={fechaFormateada}
                                    readOnly={true}
                                    required={false}
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
                                    label='Duración en la Barra'
                                    name='duracion'
                                    size='x-pequeno'
                                    required={false}
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                            </Row>
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
