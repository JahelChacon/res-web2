import React, { useState } from "react";
import { Spinner, } from "react-bootstrap";
import { Modal, Card, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { restarTiempos, formatearFecha } from "../../../utils/utils";
import { makeRequest } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputFecha from "../Inputs/InputFecha";
import SelectBuffet from "../Inputs/SelectBuffet";
import SelectFromApi from "../Inputs/SelectFromApi";
import InputSelect from "../Inputs/InputSelect";
import BotonesEditar from "../Botones/BotonesEditar";

export default function EditarClienteBarra({
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
    const [montoTotal, setMontoTotal] = useState(0);
    const fechaActual = new Date();
    const horaActualFormateada = [fechaActual.getHours(), fechaActual.getMinutes()].join(':');

    const onEditar = (form) => {
        setEditando(true);
        const data = {
            nombre: form.nombre,
            fecha: formatearFecha(form.fechaLlegada),
            reservacion: false,
            restaurante: form.restaurante,
            barra: true,
            horaEntrada: form.horaEntrada,
            horaSalida: form.facturacion === "pagado" ? form.horaSalida : '00:00',
            detalle: [{
                silla: '',
                pedido: '',
                buffet: form.detalle
            }],
            montoPago: form.facturacion === "pagado" ? parseInt(form.montoPago) : 0
        };
        // Editar cliente
        makeRequest('POST', `/clientes/update/${cliente._id}`, token, data)
            .then(response => {
                if (response.status === 200) {
                    exitoEditar();
                    setEditando(false);
                } else {
                    falloEditar();
                }
            })
    };

    const calcularPrecio = (form) => {
        let precio = 0;
        if (form.detalle && form.detalle.length > 0) {
            form.detalle.forEach((elemento) => {
                if (elemento.precio) {
                    precio = precio + parseInt(elemento.precio);
                }
            });
        }
        setMontoTotal(precio);
    }

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

                                <InputFecha
                                    label='Fecha de Llegada'
                                    name='fechaLlegada'
                                    size='x-pequeno'
                                    required={false}
                                    value={cliente.fecha}
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
                                    label='Duración en la Barra'
                                    name='duracion'
                                    size='x-pequeno'
                                    required={false}
                                    readOnly={true}
                                    register={register}
                                    errors={errors} />
                            </Row>
                            <h3>Información del Pedido</h3>
                            <Row>
                                <SelectBuffet
                                    value={(cliente.detalle && cliente.detalle.length > 0) && cliente.detalle[0].buffet}
                                    label='Buffet'
                                    name={'detalle'}
                                    size='mediano'
                                    disable={cliente.montoPago !== 0}
                                    control={control}
                                    token={token} />
                            </Row>
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
            </Modal.Body>
        </Modal>
    );
}
