import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card } from "react-bootstrap";
import InputTexto from "../../Compartidos/Inputs/InputTexto";
import BotonesInsertar from "../../Compartidos/BotonesInsertar";
import ImputImagen from "../../Compartidos/Inputs/ImputImagen";


export default function PaisesInsertar() {
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append('nombre', data.nombre);
        formData.append('imagen', data.imagen[0]);
        fetch('https://backend-web2ulacit.herokuapp.com/paises/add', {
            method: 'POST',
            body: formData
        });
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xl={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Header className="bg-primary text-white">
                                <h2>Insertar Paises</h2>
                            </Card.Header>
                            <Card.Body style={{ textAlign: "left" }}>
                                <Row>
                                    <InputTexto errors={errors} label='Codigo' name='codigo' placeholder='Codigo' size='mediano' disabled/>
                                    <InputTexto register={register} errors={errors} label='Nombre' name='nombre' placeholder='Nombre' size='mediano'/>
                                    <ImputImagen register={register} errors={errors} label='Bandera' name='imagen' size='mediano'/>
                                </Row>
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                <BotonesInsertar limpiar={reset} cancelar={"/paises"} />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}