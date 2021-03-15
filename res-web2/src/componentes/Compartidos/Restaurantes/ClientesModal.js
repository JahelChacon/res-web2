import React from "react";
import { Modal, Card, ListGroup, Button, Container } from "react-bootstrap";
import clientesImagen from "../../../img/Restaurantes/clientes.png";

export default function ClientesModal({
    show,
    close,
    clientes
}) {
    return (
        <Modal show={show} onHide={close} centered>
            <Modal.Body>
                <Card>
                    <Card.Header className="bg-primary text-white text-center">
                        <h2>Información de Clientes</h2>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <img src={clientesImagen} alt={'Clientes'} style={{ height: "120px", width: "120px", objectFit: "cover" }}></img>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Mesas: </strong>0</ListGroup.Item>
                            <ListGroup.Item><strong>Barra: </strong>0</ListGroup.Item>
                            <ListGroup.Item><strong>Reservaciones: </strong>0</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <footer>
                        <Container className="text-center bg-light border-top p-3">
                            <Button type="button" variant="outline-danger" onClick={close}>Cerrar</Button>
                        </Container>
                    </footer>
                </Card>
            </Modal.Body>
        </Modal >
    );
}
