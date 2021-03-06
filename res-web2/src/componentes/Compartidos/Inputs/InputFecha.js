import React from "react";
import { Col } from "react-bootstrap"

export default function InputFecha({
    value,
    label,
    name,
    placeholder,
    register,
    errors,
    readOnly,
    required = true,
    size = 'grande',
    disabled = false,
}) {
    const fecha = new Date(`${value} 00:00`);
    const defaultValue = value !== undefined && value !== 'NaN/NaN/NaN' ? fecha.toISOString().substr(0, 10) : null;

    return (
        <Col
            xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : size === 'pequeno' ? 4 : 3}
            lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            md={size === 'grande' ? 12 : 6}
            sm={12}
            xs={12}>
            <div className="form-group">
                <label>{label}</label>
                <input
                    readOnly={readOnly}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    type={"date"}
                    name={name}
                    placeholder={placeholder}
                    className="form-control"
                    ref={register && register({
                        required: required && "Por favor ingrese un valor",
                    })}
                />
                {errors[name] && (<div style={{ color: "red", fontSize: "14px" }}>{errors[name].message}</div>)}
            </div>
        </Col>
    )
}