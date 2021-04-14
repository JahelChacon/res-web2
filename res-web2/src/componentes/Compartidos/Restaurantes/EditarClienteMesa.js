import React, { useState, useEffect } from "react";
import { Spinner, } from "react-bootstrap";
import { Modal, Card, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { restarTiempos, esNumeroValido, formatearFecha, STATUS_MESA } from "../../../utils/utils";
import { makeRequest } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputCheckbox from "../Inputs/InputCheckbox";
import InputFecha from "../Inputs/InputFecha";
import SelectPedido from "../Inputs/SelectPedido";
import SelectFromApi from "../Inputs/SelectFromApi";
import InputSelect from "../Inputs/InputSelect";
import BotonesEditar from "../Botones/BotonesEditar";
import Divider from "../Divider";
import MensajeError from "../Mensajes/MensajeError";

export default function EditarClienteMesa({
    show,
    close,
    token,
    titulo,
    exitoEditar,
    falloEditar,
    tamano = 'lg',
    cliente
}) {
    const { control, register, reset, handleSubmit, errors } = useForm();
    const [editando, setEditando] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [falloMesa, setFalloMesa] = useState(false);
    const [mesa, setMesa] = useState(false);
    const [montoTotal, setMontoTotal] = useState(0);
    const fechaActual = new Date();
    const horaActualFormateada = [fechaActual.getHours(), fechaActual.getMinutes()].join(':');

    const onEditar = (form) => {
        setEditando(true);
        // Agrupar los dedidos por silla
        const detalleSillas = [];
        mesa.sillas && [...Array(mesa.sillas)].forEach((elemento, index) => {
            const silla = index + 1;
            if (form['pedidoSilla' + silla] || form['buffetSilla' + silla]) {
                detalleSillas.push({
                    silla: silla,
                    pedido: form['pedidoSilla' + silla] ? form['pedidoSilla' + silla] : '',
                    buffet: form['buffetSilla' + silla] ? form['buffetSilla' + silla] : []
                });
            }
        })
        const data = {
            nombre: form.nombre,
            fecha: formatearFecha(form.fechaLlegada),
            reservacion: form.reservacion ? true : false,
            restaurante: form.restaurante,
            barra: false,
            mesa: mesa._id,
            horaEntrada: form.horaEntrada,
            horaSalida: form.facturacion === "pagado" ? form.horaSalida : '00:00',
            detalle: detalleSillas,
            montoPago: form.facturacion === "pagado" ? parseInt(form.montoPago) : 0
        };
        // Editar cliente
        makeRequest('POST', `/clientes/update/${cliente._id}`, token, data)
            .then(response => {
                if (response.status === 200) {
                    // Actualizar status de Mesa
                    const nuevoStatusMesa = form.facturacion === "pagado" ? STATUS_MESA.LIBRE : form.reservacion ? STATUS_MESA.RESERVADA : STATUS_MESA.OCUPADA;
                    if (nuevoStatusMesa !== mesa.status) {
                        mesa.status = nuevoStatusMesa;
                        makeRequest('POST', `/mesas/update/${mesa._id}`, token, mesa)
                            .then(response => {
                                if (response.status === 200) {
                                    exitoEditar();
                                } else {
                                    falloEditar();
                                }
                                setEditando(false);
                            })
                    } else {
                        exitoEditar();
                        setEditando(false);
                    }
                } else {
                    falloEditar();
                }
            })
    };

    const calcularPrecioBuffet = (buffetArray) => {
        let precio = 0;
        buffetArray.forEach((elemento) => {
            if (elemento.precio) {
                precio = precio + parseInt(elemento.precio);
            }
        });
        return precio;
    }

    const calcularPrecio = (form) => {
        const precioSilla1 = esNumeroValido(form.precio1) ? parseInt(form.precio1) : 0;
        const precioSilla2 = esNumeroValido(form.precio2) ? parseInt(form.precio2) : 0;
        const precioSilla3 = esNumeroValido(form.precio3) ? parseInt(form.precio3) : 0;
        const precioSilla4 = esNumeroValido(form.precio4) ? parseInt(form.precio4) : 0;
        const precioBuffet1 = form.buffetSilla1 && form.buffetSilla1.length > 0 ? calcularPrecioBuffet(form.buffetSilla1) : 0;
        const precioBuffet2 = form.buffetSilla2 && form.buffetSilla2.length > 0 ? calcularPrecioBuffet(form.buffetSilla2) : 0;
        const precioBuffet3 = form.buffetSilla3 && form.buffetSilla3.length > 0 ? calcularPrecioBuffet(form.buffetSilla3) : 0;
        const precioBuffet4 = form.buffetSilla4 && form.buffetSilla4.length > 0 ? calcularPrecioBuffet(form.buffetSilla4) : 0;
        const total = precioSilla1 + precioSilla2 + precioSilla3 + precioSilla4 + precioBuffet1 + precioBuffet2 + precioBuffet3 + precioBuffet4;
        setMontoTotal(total);
    }

    useEffect(() => {
        // Cargar mesas
        if (cliente.mesa) {
            setCargando(true);
            makeRequest('GET', '/mesas/' + cliente.mesa, token)
                .then(response => response.json())
                .then(data => {
                    setMesa(data);
                    setCargando(false);
                })
                .catch(() => {
                    setFalloMesa(true);
                });
        }
    }, [token, cliente.mesa]);

    return (
        <Modal show={show} onHide={close} centered size={tamano}>
            <Modal.Body>
                {
                    cargando && !falloMesa
                        ?
                        <div className="ml-4">
                            <Spinner animation="border" />
                        </div>
                        : !cargando && !falloMesa &&
                        <form>
                            <Card>
                                <Card.Header className="bg-primary text-white text-center">
                                    <h2>{titulo}</h2>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <InputTexto
                                            value={cliente.codigo}
                                            label='Codigo del Cliente'
                                            name='codigo'
                                            size='x-pequeno'
                                            required={false}
                                            readOnly={true}
                                            register={register}
                                            errors={errors} />
                                        <InputTexto
                                            value={cliente.nombre}
                                            label='Nombre del Cliente'
                                            name='nombre'
                                            placeholder='Nombre del Cliente'
                                            size='x-pequeno'
                                            readOnly={cliente.montoPago !== 0}
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
                                            value={cliente.restaurante}
                                            token={token}
                                            tabla='restaurantes'
                                            label='Restaurante'
                                            name='restaurante'
                                            size='x-pequeno'
                                            readOnly={true}
                                            register={register}
                                            errors={errors} />
                                        <InputTexto
                                            value={cliente.horaEntrada}
                                            label='Hora de Entrada'
                                            name='horaEntrada'
                                            size='x-pequeno'
                                            readOnly={true}
                                            register={register}
                                            errors={errors} />
                                        <InputTexto
                                            value={cliente.montoPago === 0 ? horaActualFormateada : cliente.horaSalida}
                                            label='Hora de Salida'
                                            name='horaSalida'
                                            size='x-pequeno'
                                            readOnly={true}
                                            register={register}
                                            errors={errors} />
                                        <InputTexto
                                            value={restarTiempos(cliente.horaEntrada, cliente.montoPago === 0 ? horaActualFormateada : cliente.horaSalida)}
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
                                            value={cliente.fecha}
                                            readOnly={true}
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
                                            size='x-pequeno'
                                            readOnly={true}
                                            register={register}
                                            errors={errors} />
                                    </Row>
                                    <Row>
                                        <InputCheckbox
                                            value={cliente.reservacion}
                                            label='Reservación'
                                            name='reservacion'
                                            size='x-pequeno'
                                            disabled={cliente.montoPago !== 0}
                                            register={register} />
                                    </Row>
                                    <Divider />
                                    {
                                        mesa.sillas && [...Array(mesa.sillas)].map(((silla, index) =>
                                            <SelectPedido
                                                pedidos={cliente.detalle}
                                                key={index}
                                                token={token}
                                                label={`Pedido Silla ${index + 1}`}
                                                name={`pedidoSilla${index + 1}`}
                                                silla={index + 1}
                                                size='x-pequeno'
                                                readOnly={cliente.montoPago !== 0}
                                                control={control}
                                                register={register}
                                                errors={errors} />
                                        ))
                                    }
                                    <h3>Facturación</h3>
                                    <Row>
                                        <InputTexto
                                            currentValue={montoTotal}
                                            label='Monto Total'
                                            name='montoPago'
                                            placeholder='Monto Total'
                                            size='x-pequeno'
                                            required={false}
                                            readOnly={true}
                                            register={register}
                                            errors={errors} />
                                        <Button className='mt-4 mb-3' type="button" variant="outline-success" onClick={handleSubmit(calcularPrecio)}>Calcular precio total</Button>
                                    </Row>
                                    <Row>
                                        <InputSelect
                                            readOnly={cliente.montoPago !== 0}
                                            value={cliente.montoPago === 0 ? 'sin-pagar' : 'pagado'}
                                            label='Estado de la Cuenta'
                                            name='facturacion'
                                            size='x-pequeno'
                                            register={register}
                                            errors={errors}>
                                            <option value='sin-pagar'>SIN PAGAR</option>
                                            <option value='pagado'>PAGADO</option>
                                        </InputSelect>
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
                }
                <MensajeError error={falloMesa} />
            </Modal.Body>
        </Modal>
    );
}
