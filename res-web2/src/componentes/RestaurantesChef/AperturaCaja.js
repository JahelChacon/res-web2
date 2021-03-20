import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeRequest } from "../../utils/API";
import { TABLAS } from "../../utils/utils";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import SelectFromApi from "../Compartidos/Inputs/SelectFromApi";
import InputTexto from "../Compartidos/Inputs/InputTexto";
import BotonesCajas from "../Compartidos/Botones/BotonesCajas";
import MensajeError from "../Compartidos/Mensajes/MensajeError";

export default function AperturaCaja({ token, usuario }) {
    const { register, handleSubmit, reset, errors } = useForm();
    const [redirectRestaurante, setRedirectRestaurante] = useState(false);
    const [mostrarFallo, setMostrarFallo] = useState(false);
    const [insertando, setInsertando] = useState(false);

    const onAceptar = (form) => {
        setInsertando(true);
        const hoy = new Date();
        const hoyFormato = [hoy.getMonth() + 1, hoy.getDate(), hoy.getFullYear()].join('/') + ' ' +
            [hoy.getHours(), hoy.getMinutes()].join(':');
        const objectData = {
            fecha: hoyFormato,
            dineroRecibido: form.montoApertura,
            aperturaCaja: true,
            cierreCaja: false,
            descripcion: "Apertura de caja",
            restaurante: usuario.restaurante,
        };
        // Agregar Apertura de caja
        makeRequest('POST', `/facturas/add`, token, objectData, false)
            .then(response => {
                if (response.status === 200) {
                    restauranteRedirect();
                } else {
                    setMostrarFallo(true);
                }
                setInsertando(false);
            })

    };

    const restauranteRedirect = () => {
        switch (usuario.restaurante) {
            case 'Turin Anivo':
                setRedirectRestaurante('turin-anivo');
                break;
            case 'Notte di Fuoco':
                setRedirectRestaurante('notte-di-fuoco');
                break;
            default:
                setRedirectRestaurante('piccola-stella');
        }
    }

    useEffect(() => {
        // Toma la fecha de hoy y valida si ya hay aperturas de caja
        makeRequest('GET', `/${TABLAS.CAJAS}`, token)
            .then(response => response.json())
            .then(data => {
                var today = new Date();
                today.setHours(0, 0, 0, 0);
                const existeCaja = data.some(function (item) {
                    var fechaCaja = new Date(item.fecha);
                    fechaCaja.setHours(0, 0, 0, 0);
                    return (+today === +fechaCaja) && (item.aperturaCaja === true);
                });

                if (existeCaja) {
                    restauranteRedirect();
                }
            })
    }, [token]);

    return (
        <React.Fragment>
            <Container >
                <form>
                    <Row className="justify-content-center">
                        <Col className="text-left" xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Card className="text-center">
                                <Card.Header className="bg-primary text-white">
                                    <h2>Apertura de Caja</h2>
                                </Card.Header>
                                <Card.Body className="text-left">
                                    <SelectFromApi
                                        token={token}
                                        value={usuario.restaurante}
                                        tabla='restaurantes'
                                        label='Restaurantes'
                                        name='restaurante'
                                        size='grande'
                                        disabled={true}
                                        register={register}
                                        errors={errors} />
                                    <InputTexto
                                        label='Monto de Apertura'
                                        name='montoApertura'
                                        placeholder='Monto de Apertura'
                                        size='grande'
                                        register={register}
                                        errors={errors} />
                                    <MensajeError error={mostrarFallo} />
                                </Card.Body>
                                <Card.Footer style={{ textAlign: "right" }}>
                                    {
                                        insertando ?
                                            <div className="mr-4">
                                                <Spinner animation="border" />
                                            </div>
                                            :
                                            <BotonesCajas aceptar={handleSubmit(onAceptar)} limpiar={reset} />
                                    }
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </form>
            </Container>
            {
                redirectRestaurante &&
                <Redirect to={redirectRestaurante} />
            }
        </React.Fragment>
    )
}
