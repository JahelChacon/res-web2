import React, { useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeRequest } from "../../utils/API";
import SelectFromApi from "../Compartidos/Inputs/SelectFromApi";
import InputNumero from "../Compartidos/Inputs/InputNumero";
import BotonesCajas from "../Compartidos/Botones/BotonesCajas";
import MensajeError from "../Compartidos/Mensajes/MensajeError";

export default function CierreCaja({ token, usuario, logout }) {
    const { register, handleSubmit, reset, errors } = useForm();
    const [mostrarFallo, setMostrarFallo] = useState(false);
    const [insertando, setInsertando] = useState(false);

    const onAceptar = (form) => {


        setInsertando(true);
        const hoy = new Date();
        const hoyFormato = [hoy.getMonth() + 1, hoy.getDate(), hoy.getFullYear()].join('/') + ' ' +
            [hoy.getHours(), hoy.getMinutes()].join(':');
        const objectData = {
            fecha: hoyFormato,
            dineroRecibido: form.montoCierre,
            aperturaCaja: false,
            cierreCaja: true,
            descripcion: "Cierre de caja",
            restaurante: usuario.restaurante,
        };
        // Agregar Cierre de caja
        makeRequest('POST', `/facturas/add`, token, objectData, false)
            .then(response => {
                if (response.status === 200) {
                    logout();
                } else {
                    setMostrarFallo(true);
                    setInsertando(false);
                }
            })
    };

    return (
        <Container >
            <form>
                <Row className="justify-content-center">
                    <Col className="text-left" xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Card className="text-center">
                            <Card.Header className="bg-primary text-white">
                                <h2>Cierre de Caja</h2>
                            </Card.Header>
                            <Card.Body className="text-left">
                                <SelectFromApi
                                    token={token}
                                    value={usuario.restaurante}
                                    tabla='restaurantes'
                                    label='Restaurantes'
                                    name='restaurantes'
                                    size='grande'
                                    disabled={true}
                                    register={register}
                                    errors={errors} />
                                <InputNumero
                                    label='Monto de Cierre'
                                    name='montoCierre'
                                    placeholder='Monto de Cierre'
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
                                        <BotonesCajas cancelar={true} aceptar={handleSubmit(onAceptar)} limpiar={reset} />
                                }
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}
