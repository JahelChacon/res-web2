import React, { useState, useEffect, useCallback } from "react";
import { Spinner, Col, Row } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputCheckbox from "../Inputs/InputCheckbox";
import MensajeError from "../Mensajes/MensajeError";
import SelectBuffet from "../Inputs/SelectBuffet";
import Divider from "../Divider";

export default function SelectPedido({
    register,
    errors,
    label,
    name,
    silla,
    size,
    required,
    pedidos,
    readOnly,
    control,
    token
}) {
    const [pedidoActual, setPedidoActual] = useState(false);
    const [especialidades, setEspecialidades] = useState([]);
    const [especialidad, setEspecialidad] = useState(false);
    const [seleccionarBuffet, setSeleccionarBuffet] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [fallo, setFallo] = useState(false);

    const obtenerEspecialidad = useCallback((id) => {
        const pedido = especialidades.find(function (elemento) {
            return elemento._id === id;
        });
        return typeof pedido === 'undefined' ? false : pedido;
    }, [especialidades]);

    const seleccionPedido = (e) => {
        const especialidadDetalle = obtenerEspecialidad(e.target.value)
        setEspecialidad(especialidadDetalle);
    }

    const seleccionBuffet = () => {
        setSeleccionarBuffet(!seleccionarBuffet);
    }

    useEffect(() => {
        makeRequest('GET', '/especialidades', token)
            .then(response => response.json())
            .then(data => {
                setEspecialidades(data);
                setCargando(false);
            })
            .then(() => {

            })
            .catch((error) => {
                console.log('Error: ', error);
                setFallo(true);
            });
    }, [token]);

    useEffect(() => {
        if (pedidos && pedidos.length > 0 && especialidades.length > 0) {
            pedidos.forEach(pedido => {
                if (pedido.silla === silla.toString()) {
                    const especialidadDetalle = obtenerEspecialidad(pedido.pedido);
                    setPedidoActual(pedido);
                    setSeleccionarBuffet(pedido.buffet.length > 0);
                    setEspecialidad(especialidadDetalle);
                }
            });
        } else {
            setPedidoActual(false);
        }
    }, [especialidades, pedidos, obtenerEspecialidad, pedidoActual, silla]);

    return (
        <React.Fragment>
            {
                cargando && !fallo
                    ?
                    <div className="ml-4">
                        <Spinner animation="border" />
                    </div>
                    : !cargando && !fallo &&

                    // Select
                    <React.Fragment>
                        <Row>
                            <Col
                                xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : size === 'pequeno' ? 4 : 3}
                                lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
                                md={size === 'grande' ? 12 : 6}
                                sm={12}
                                xs={12}>
                                <div className="form-group">
                                    <label>{label}</label>
                                    <select
                                        readOnly={seleccionarBuffet || readOnly}
                                        defaultValue={(pedidoActual && pedidoActual.pedido !== "") && pedidoActual.pedido}
                                        name={name}
                                        className="form-control"
                                        onChange={seleccionPedido}
                                        ref={register({
                                            required: required && "Port favor ingrese un valor",
                                        })}>
                                        <option key="default" value="">Select</option>
                                        {
                                            especialidades.map(((elemento, index) =>
                                                <option
                                                    key={index}
                                                    value={elemento._id}>
                                                    {elemento.nombre}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    {errors[name] && (<div style={{ color: "red", fontSize: "14px" }}>{errors[name].message}</div>)}
                                </div>
                            </Col>
                            <InputTexto
                                currentValue={(!seleccionarBuffet && especialidad && especialidad.precio) ? especialidad.precio : ''}
                                label='Precio'
                                name={'precio' + silla}
                                size={size}
                                readOnly={true}
                                required={false}
                                register={register}
                                errors={errors} />
                            <InputCheckbox
                                value={pedidoActual && pedidoActual.buffet.length > 0}
                                style={{ marginTop: 30 }}
                                label='Buffet'
                                name={'buffet' + silla}
                                size={size}
                                disabled={readOnly}
                                onChange={seleccionBuffet} />
                        </Row>
                        <Row>
                            {seleccionarBuffet &&
                                <SelectBuffet
                                    value={pedidoActual && pedidoActual.buffet.length > 0 ? pedidoActual.buffet : false}
                                    label='Buffet'
                                    name={'buffetSilla' + silla}
                                    size='mediano'
                                    control={control}
                                    disable={readOnly}
                                    token={token} />
                            }
                        </Row>
                        <Divider />
                    </React.Fragment>
            }
            <MensajeError error={fallo} />
        </React.Fragment>
    )
}
