import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

export default function InputSelect({
    label,
    name,
    children,
    register,
    errors,
    required = true,
    size = 'grande'
}) {
    return (
        <Col
            xl={size == 'grande' ? 12 : size == 'mediano' ? 6 : 4}
            lg={size == 'grande' ? 12 : size == 'mediano' ? 6 : 4}
            md={size == 'grande' ? 12 : 6}
            sm={12}
            xs={12}>
            <div className="form-group">
                <label>{label}</label>
                <select
                    name={name}
                    className="form-control"
                    ref={register({
                        required: required && "Port favor ingrese un valor",
                    })}>
                    {children}
                </select>
                {errors[name] && (<div style={{ color: "red", fontSize: "14px" }}>{errors[name].message}</div>)}
            </div>
        </Col>
    )
}
