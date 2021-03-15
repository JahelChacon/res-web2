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
    disabled,
    tabla,
    token
}) {
    const [lista, setLista] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [fallo, setFallo] = useState(false);

    useEffect(() => {
        makeRequest('GET', '/' + tabla, token)
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
                    <div className="ml-4">
                        <Spinner animation="border" />
                    </div>
                    : !cargando && !fallo &&
                    <InputSelect
                        value={value}
                        required={required}
                        disabled={disabled}
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
                                    value={elemento.nombre ? elemento.nombre : elemento.nombreMarca ? elemento.nombreMarca : elemento.unidad ? elemento.unidad : ''}>
                                    {elemento.nombre ? elemento.nombre : elemento.nombreMarca ? elemento.nombreMarca : elemento.unidad ? elemento.unidad : ''}
                                </option>
                            ))
                        }
                    </InputSelect>
            }
            <MensajeError error={fallo} />
        </Fragment>
    )
}
