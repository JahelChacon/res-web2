import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TemplateComponentesContext = React.createContext(null);

export default function TemplateComponentes({titulo, filtros}){
    return(
        <TemplateComponentesContext.Provider>
            <Container>
                <Row>
                    <Col xl={12} md={12} sm={12} xs={12}>
                        <Card>
                            <Card.Header className="bg-primary text-white">
                                <h2>{titulo}</h2>
                            </Card.Header>
                            <Card.Body style={{textAlign: "left"}}>
                                <Card.Title>
                                    Filtros:
                                </Card.Title>
                                    {filtros}
                            </Card.Body>
                            <Card.Footer style={{textAlign: "right"}}>
                                <Button variant="outline-success">Filtrar</Button>{' '}
                                <Button variant="outline-warning">Limpiar</Button>{' '}
                                <Button variant="outline-primary">Agregar</Button>{' '}
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </TemplateComponentesContext.Provider>
    )
}