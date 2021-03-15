import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

export default function Barra({ name, label, agregarCliente, float = 'float-left' }) {
    const [barraAbierta, setBarraAbierta] = useState(false);

    return (
        <Col className={`mt-5 mb-5 ${float}`} xl={3} md={3} sm={6} xs={12}>
            <label>{label}</label>
            <Form.Group>
                <Form.Check
                    type="radio"
                    name={name}
                    checked={!barraAbierta}
                    className="form-control"
                    label='Barra Cerrada'
                    onChange={() => setBarraAbierta(false)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Check
                    type="radio"
                    name={name}
                    checked={barraAbierta}
                    className="form-control"
                    label='Barra Abierta'
                    onChange={() => setBarraAbierta(true)}
                />
            </Form.Group>
            {
                barraAbierta &&
                <Button variant='primary' type="button" onClick={agregarCliente}>Agregar Cliente</Button>
            }
        </Col>
    )
}
