import React, { useState, useEffect, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import { Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import MensajeError from "../Mensajes/MensajeError";
import Select from 'react-select'

export default function SelectProductos({
    label,
    name,
    size,
    control,
    token
}) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [fallo, setFallo] = useState(false);

    // ***FALTA: Mensajes de error

    useEffect(() => {
        makeRequest('GET', '/productos', null, token)
            .then(response => response.json())
            .then(data => {
                const productosOptions = data.map( producto => ({
                    value: producto._id,
                    label: producto.nombre
                }) );
                setProductos(productosOptions);
                setCargando(false);
            })
            .catch((error) => {
                console.log('Error: ', error);
                setFallo(true);
            });
    }, [token]);

    return (
        <Fragment>
            {
                cargando && !fallo
                    ?
                    <Spinner animation="border" />
                    : !cargando && !fallo &&
                    <Col
                        xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : size === 'pequeno' ? 4 : 3}
                        lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
                        md={size === 'grande' ? 12 : 6}
                        sm={12}
                        xs={12}>
                        <div className="form-group">
                            <label>{label}</label>


                            <Controller
                                name={name}
                                control={control}
                                options={productos}
                                isMulti={true}
                                defaultValue={false}
                                rules={{ required: true }}
                                as={Select}
                            />
                            {/* {errors[name] && (<div style={{ color: "red", fontSize: "14px" }}>{errors[name].message}</div>)} */}
                        </div>
                    </Col>
            }
            <MensajeError error={fallo} />
        </Fragment>
    )
}
