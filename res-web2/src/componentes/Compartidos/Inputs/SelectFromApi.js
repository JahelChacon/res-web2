import React, { useState, useEffect, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/api";
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
                            lista.map(((elemento, index) =>
                            // *** Falta: Arreglar nombre del campo dinamico
                                <option
                                    key={index}
                                    value={elemento.nombre ? elemento.nombre : elemento.nombreMarca ? elemento.nombreMarca : ''}>
                                    {elemento.nombre ? elemento.nombre : elemento.nombreMarca ? elemento.nombreMarca : ''}
                                </option>
                            ))
                        }
                    </InputSelect>
            }
            <MensajeError error={fallo} />
        </Fragment>
    )
}
