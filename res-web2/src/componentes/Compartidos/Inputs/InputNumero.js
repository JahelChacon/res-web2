import React from "react";
import { Col } from "react-bootstrap"

export default function InputNumero({
    value,
    currentValue,
    label,
    name,
    placeholder,
    register,
    errors,
    required = true,
    size = 'grande',
    disabled = false,
    readOnly = false,
}) {
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
                    defaultValue={value}
                    value={currentValue}
                    disabled={disabled}
                    readOnly={readOnly}
                    type={"number"}
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