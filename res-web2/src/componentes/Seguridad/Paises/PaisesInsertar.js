import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card } from "react-bootstrap";
import CampoCodigo from "../../Compartidos/CampoCodigo";
import CampoNombre from "../../Compartidos/CampoNombre";
import CampoURL from "../../Compartidos/CampoURL";
import BotonesInsertar from "../../Compartidos/BotonesInsertar";


export default function PaisesInsertar(){
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (formData) => console.log(formData);

    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xl={12} md={12} sm={12} xs={12}>
                            <Card>
                                <Card.Header className="bg-primary text-white">
                                    <h2>Insertar Marcas</h2>
                                </Card.Header>
                                <Card.Body style={{textAlign: "left"}}>
                                    <Row>
                                    <CampoCodigo register={register} errors={errors}/>
                                    <CampoNombre register={register} errors={errors}/>
                                    <CampoURL register={register} errors={errors}/>
                                    </Row>      
                                </Card.Body>
                                <Card.Footer style={{textAlign: "right"}}>
                                    <BotonesInsertar limpiar={reset} cancelar={"/paises"} />
                                </Card.Footer>
                            </Card>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}