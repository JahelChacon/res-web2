import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../utils/API";
import InputTexto from "../Inputs/InputTexto";
import InputNacionalidad from "../Inputs/InputNacionalidad";
import Filtro from "./Filtro";
import Tabla from "./Tabla";
import MensajeCargando from "../Mensajes/MensajeCargando";
import MensajeError from "../Mensajes/MensajeError";

export default function Busqueda({
    titulo,
    tabla,
    columnas,
    filtros
}) {
    const [tablaData, setTablaData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [fallo, setFallo] = useState(false);

    useEffect(() => {
        fetch(API_URL + '/' + tabla)
            .then(response => response.json())
            .then(data => {
                setTablaData(data);
                setCargando(false);
            })
            .catch((error) => {
                setFallo(true);
            });
    }, []);

    const onSubmit = (formData) => {
        console.log(formData)
    };

    const { register, handleSubmit, reset, errors } = useForm();
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Filtro titulo={titulo} limpiar={reset} insertarURL={tabla + '/insertar'}>
                    <Row>
                        {
                            filtros.length > 0 && filtros.map(((filtro, index) =>
                                filtro.tipo === 'texto'
                                    ?
                                    <InputTexto
                                        key={index}
                                        label={filtro.label}
                                        name={filtro.name}
                                        placeholder={filtro.placeholder}
                                        size={filtro.size}
                                        required={false}
                                        register={register}
                                        errors={errors} />
                                    : filtro.tipo === 'nacionalidad'
                                    &&
                                    <InputNacionalidad
                                        label={filtro.label}
                                        name={filtro.name}
                                        size={filtro.size}
                                        required={false}
                                        register={register}
                                        errors={errors} />
                            ))
                        }
                    </Row>
                </Filtro>
                <br></br>
                <MensajeCargando cargando={cargando}/>
                <MensajeError error={fallo}/>
                {
                    (!cargando && !fallo) &&
                    <Tabla columnas={columnas} filas={tablaData} />
                }
            </form>
        </Container>
    )
}
