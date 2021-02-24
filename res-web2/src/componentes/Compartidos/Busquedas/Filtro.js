import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BotonesFiltros from "../Botones/BotonesFiltros";
import BotonAtras from "../Botones/BotonAtras";

export default function Filtro({
    titulo,
    reset,
    insertarURL,
    backURL,
    filtrar,
    soloBusqueda,
    soloEditar,
    children
}) {
    return (
        <Row>
            <Col className="text-left" xl={12} lg={12} md={12} sm={12} xs={12}>
                <BotonAtras url={backURL}/>
                <Card className="text-center">
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
                        <BotonesFiltros filtrar={filtrar} limpiar={reset} insertarURL={insertarURL} inserta={!soloBusqueda && !soloEditar} />
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}
