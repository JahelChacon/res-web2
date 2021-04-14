import React, { useState, useEffect, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import { Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import Select from 'react-select'
import MensajeError from "../Mensajes/MensajeError";
export default function SelectBuffet({
    value,
    label,
    name,
    size,
    control,
    disable,
    token
}) {
    const [buffetOptions, setBuffetOptions] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [fallo, setFallo] = useState(false);

    useEffect(() => {
        setCargando(true);
        makeRequest('GET', '/buffet', token)
            .then(response => response.json())
            .then(data => {
                const options = data.map(buffet => ({
                    value: buffet._id,
                    label: buffet.nombre + ' - ₡' + buffet.precio,
                    precio: buffet.precio,
                }));
                setBuffetOptions(options);
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
                    <div className="ml-4">
                        <Spinner animation="border" />
                    </div>
                    : !cargando && !fallo &&
                    <Fragment>
                        <Col
                            xl={size === 'grande' ? 12 : size === 'mediano' ? 6 : size === 'pequeno' ? 4 : 3}
                            lg={size === 'grande' ? 12 : size === 'mediano' ? 6 : 4}
                            md={size === 'grande' ? 12 : 6}
                            sm={12}
                            xs={12}>
                            <div className="form-group">
                                <label>{label}</label>
                                <Controller
                                    as={
                                        <Select
                                            options={buffetOptions}
                                            isMulti
                                            isDisabled={disable}
                                        />
                                    }
                                    name={name}
                                    control={control}
                                    defaultValue={value}
                                />
                            </div>
                        </Col>
                    </Fragment>
            }
            <MensajeError error={fallo} />
        </Fragment>
    )
}
