import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card } from "react-bootstrap";
import InputTexto from "../../Compartidos/Inputs/InputTexto";
import BotonesInsertar from "../../Compartidos/BotonesInsertar";
import InputSelect from "../../Compartidos/Inputs/InputSelect";
import ImputImagen from "../../Compartidos/Inputs/ImputImagen";

export default function MarcasInsertar() {
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        fetch('https://backend-web2ulacit.herokuapp.com/paises')
            .then(response => response.json())
            .then(data => {
                setPaises(data)
            });
    }, []);

    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (formData) => console.log(formData);
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xl={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Header className="bg-primary text-white">
                                <h2>Insertar Marcas</h2>
                            </Card.Header>
                            <Card.Body style={{ textAlign: "left" }}>
                                <Row>
                                    <Col>
                                        <h3>Información de la Marca</h3>
                                        <InputTexto register={register} errors={errors} label='Código' name='codigo' placeholder='Código' />
                                        <InputTexto register={register} errors={errors} label='Nombre' name='nombre' placeholder='Nombre' />
                                        <InputSelect register={register} errors={errors} label='Nacionalidad' name='nacionalidad' placeholder='Nacionalidad'>
                                            {
                                                paises.map(((pais, index) =>
                                                    <option value={pais.nombre}>{pais.nombre}</option>
                                                ))
                                            }
                                        </InputSelect>
                                        <InputTexto register={register} errors={errors} label='Descripcion' name='descripcion' placeholder='Descripcion' />
                                        <ImputImagen register={register} errors={errors} label='Foto de la marca' name='foto_marca' />
                                    </Col>
                                    <Col>
                                        <h3>Información del Contacto</h3>
                                        <InputTexto register={register} errors={errors} label='Cedula Juridica' name='cedula_juridica' placeholder='Cedula Juridica' />
                                        <InputTexto register={register} errors={errors} label='Nombre de la Empresa' name='nombre_empresa' placeholder='Nombre de la Empresa' />
                                        <InputTexto register={register} errors={errors} label='Detalle de la Empresa' name='detalle_empresa' placeholder='Detalle de la Empresa' />
                                        <InputTexto register={register} errors={errors} label='Teléfono' name='telefono' placeholder='Teléfono' />
                                        <ImputImagen register={register} errors={errors} label='Foto de la Empresa' name='foto_empresa' />
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                <BotonesInsertar limpiar={reset} cancelar={"/marcas"} />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}