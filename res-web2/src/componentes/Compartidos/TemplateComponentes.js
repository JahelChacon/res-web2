import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BotonesFiltros from "../Compartidos/BotonesFiltros";

const TemplateComponentesContext = React.createContext(null);

export default function TemplateComponentes({titulo, filtros, reset, onSubmit, insertarURL, inserta= true, children }){
    return(
        <TemplateComponentesContext.Provider>
            <Container>
                <form onSubmit={onSubmit}>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
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
                                    <BotonesFiltros limpiar={reset} insertarURL={insertarURL} inserta={inserta}/>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </form>
                <br></br>
                {children}
            </Container>
        </TemplateComponentesContext.Provider>
    )
}