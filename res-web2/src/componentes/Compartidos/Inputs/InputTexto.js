import React from "react";
import { Col } from "react-bootstrap"

export default function InputTexto({
  label,
  name,
  placeholder,
  register,
  errors,
  required = true,
  size = 'grande',
  disabled = false,
}){
    return(
        <Col
            xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
            md={size === 'grande' ? 12 : 6}
            sm={12}
            xs={12}>
            <div className="form-group">
                <label>{label}</label>
                <input
                    disabled={disabled}
                    type={"text"}
                    name={name}
                    placeholder={placeholder}
                    className="form-control"
                    ref={register && register({
                        required: required && "Por favor ingrese un valor",
                    })}
                />
                {errors[name] && (<div style={{color: "red", fontSize: "14px"}}>{errors[name].message}</div>)}
            </div>
        </Col>
    )
}