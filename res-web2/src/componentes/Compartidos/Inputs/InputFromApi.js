import React, { useState, useEffect, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/api";
import InputSelect from "./InputSelect";
import MensajeError from "../Mensajes/MensajeError";

export default function InputFromApi({
    register,
    errors,
    label,
    name,
    size,
    required,
    tipo,
    token
}) {
    const [lista, setLista] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [fallo, setFallo] = useState(false);

    useEffect(() => {
        makeRequest('GET', '/' + tipo, null, token)
            .then(response => response.json())
            .then(data => {
                setLista(data);
                setCargando(false);
            })
            .catch((error) => {
                console.log('Error: ', error);
                setFallo(true);
            });
    }, [tipo, token]);

    return (
        <Fragment>
            {
                cargando && !fallo
                    ?
                    <Spinner animation="border" />
                    : !cargando && !fallo &&
                    <InputSelect required={required} label={label} name={name} size={size} register={register} errors={errors}>
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
