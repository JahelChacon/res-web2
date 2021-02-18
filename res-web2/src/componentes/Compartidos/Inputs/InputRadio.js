import React from "react";
import { Col, Form } from "react-bootstrap"
import "./inputs.css";

export default function InputRadio({
    label,
    name,
    register,
    value,
    size = 'grande'
}) {
    return (
        <Col
            xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            md={size === 'grande' ? 12 : 6}
            sm={12}
            xs={12}>
            <Form.Group>
                <Form.Check
                    type="radio"
                    name={name}
                    value={value}
                    className="form-control"
                    label={label}
                    ref={register()}
                />
            </Form.Group>
        </Col>
    )
}