import React, { useState, useEffect, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { API_URL } from "../../../utils/API";
import InputSelect from "../../Compartidos/Inputs/InputSelect";
import MensajeError from "../../Compartidos/Mensajes/MensajeError";

export default function InputNacionalidad({
    register,
    errors,
    label,
    name,
    size,
    required
}) {
    const [paises, setPaises] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [fallo, setFallo] = useState(false);

    useEffect(() => {
        fetch(API_URL + '/paises')
            .then(response => response.json())
            .then(data => {
                setPaises(data);
                setCargando(false);
            })
            .catch((error) => {
                setFallo(true);
            });
    }, []);

    return (
        <Fragment>
            {
                cargando
                    ?
                    <Spinner animation="border" />
                    : !fallo &&
                    <InputSelect required={required} label={label} name={name} size={size} register={register} errors={errors}>
                        {
                            paises.map(((pais, index) =>
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
