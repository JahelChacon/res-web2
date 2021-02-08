import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BotonesFiltros from "../Botones/BotonesFiltros";

export default function Filtro({
    titulo,
    reset,
    insertarURL,
    children
}) {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <Card>
                    <Card.Header className="bg-primary text-white">
                        <h2>{titulo}</h2>
                    </Card.Header>
                    <Card.Body style={{ textAlign: "left" }}>
                        <Card.Title>
                            Filtros:
                        </Card.Title>
                        {children}
                    </Card.Body>
                    <Card.Footer style={{ textAlign: "right" }}>
                        <BotonesFiltros limpiar={reset} insertarURL={insertarURL} inserta />
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}
