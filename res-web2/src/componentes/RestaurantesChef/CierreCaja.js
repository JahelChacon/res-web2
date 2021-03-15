import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeRequest } from "../../utils/API";
import SelectFromApi from "../Compartidos/Inputs/SelectFromApi";
import InputTexto from "../Compartidos/Inputs/InputTexto";
import BotonesCajas from "../Compartidos/Botones/BotonesCajas";

export default function CierreCaja({ token }) {
    const { register, handleSubmit, reset, errors } = useForm();

    const onAceptar = (form) => {
        console.log('form submit', form);
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
                                    value='Piccola Stella'
                                    tabla='restaurantes'
                                    label='Restaurantes'
                                    name='restaurantes'
                                    size='grande'
                                    disabled={true}
                                    register={register}
                                    errors={errors} />
                                <InputTexto
                                    label='Monto de Cierre'
                                    name='montoCierre'
                                    placeholder='Monto de Cierre'
                                    size='grande'
                                    register={register}
                                    errors={errors} />
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                <BotonesCajas aceptar={handleSubmit(onAceptar)} limpiar={reset} />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}
