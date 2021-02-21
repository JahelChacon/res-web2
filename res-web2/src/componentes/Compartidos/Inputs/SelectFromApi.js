import React, { useState, useEffect, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import InputSelect from "./InputSelect";
import MensajeError from "../Mensajes/MensajeError";

export default function SelectFromApi({
    value,
    register,
    errors,
    label,
    name,
    size,
    required,
    tabla,
    token
}) {
    const [lista, setLista] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [fallo, setFallo] = useState(false);

    useEffect(() => {
        makeRequest('GET', '/' + tabla, null, token)
            .then(response => response.json())
            .then(data => {
                setLista(data);
                setCargando(false);
            })
            .catch((error) => {
                console.log('Error: ', error);
                setFallo(true);
            });
    }, [tabla, token]);

    return (
        <Fragment>
            {
                cargando && !fallo
                    ?
                    <Spinner animation="border" />
                    : !cargando && !fallo &&
                    <InputSelect
                        value={value}
                        required={required}
                        label={label}
                        name={name}
                        size={size}
                        register={register}
                        errors={errors}>
                        {
                            lista.map(((pais, index) =>
                                <option
                                    key={index}
                                    value={pais.nombre}>
                                    {pais.nombre}
                                </option>
                            ))
                        }
                    </InputSelect>
            }
            <MensajeError error={fallo} />
        </Fragment>
    )
}
