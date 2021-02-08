import React from "react";
import { Col } from "react-bootstrap"

export default function InputTexto({
    label,
    name,
    register,
    errors,
    required = true,
    size = 'grande'
}) {
    return (
        <Col
            xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            md={size === 'grande' ? 12 : 6}
            sm={12}
            xs={12}>
            <div className="form-group">
                <label>{label}</label>
                <input
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    name={name}
                    className="form-control-file"
                    ref={register({
                        required: required && "Port favor ingrese un valor",
                    })}
                />
                {errors[name] && (<div style={{ color: "red", fontSize: "14px" }}>{errors[name].message}</div>)}
            </div>
        </Col>
    )
}