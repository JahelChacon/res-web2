import React from "react";
import { Col, Form } from "react-bootstrap"
import "./inputs.css";

export default function InputCheckbox({
    label,
    name,
    register,
    value,
    onChange,
    disabled,
    size = 'grande',
    style
}) {
    return (
        <Col
            xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : size === 'pequeno' ? 4 : 3}
            lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            md={size === 'grande' ? 12 : 6}
            sm={12}
            xs={12}
            style={style}>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    name={name}
                    disabled={disabled}
                    defaultChecked={value}
                    className="form-control"
                    label={label}
                    ref={register && register()}
                    onChange={onChange}
                />
            </Form.Group>
        </Col>
    )
}