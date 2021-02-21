import React, { useState } from "react";
import { Col } from "react-bootstrap"

export default function InputImagen({
    value,
    label,
    name,
    register,
    errors,
    required = true,
    size = 'grande'
}) {
    const [file, setFile] = useState(null)

    // ***FALTA: Cambiar imagen al limpiar campos

    const fileHandler = (e) => {
        console.log('change!!, new file is: ', e.target.files[0]);
        setFile(e.target.files[0])
    }

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
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    name={name}
                    className="form-control-file"
                    onChange={fileHandler}
                    ref={register({
                        required: required && "Port favor ingrese un valor",
                    })}
                />
                <img style={{ maxWidth: '200px', height: 'auto' }} src={file ? URL.createObjectURL(file) : value} alt={file ? file.name : null} />
                {errors[name] && (<div style={{ color: "red", fontSize: "14px" }}>{errors[name].message}</div>)}
            </div>
        </Col>
    )
}