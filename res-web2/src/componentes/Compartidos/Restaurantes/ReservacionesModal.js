import React from "react";
import { Modal, Card, ListGroup, Button, Container } from "react-bootstrap";
import reservacionImagen from "../../../img/Restaurantes/reservacion.png";

export default function ReservacionesModal({
    show,
    close,
    reservaciones
}) {
    return (
        <Modal show={show} onHide={close} centered>
            <Modal.Body>
                <Card>
                    <Card.Header className="bg-primary text-white text-center">
                        <h2>Información de Reservaciones</h2>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <img src={reservacionImagen} alt={'Reservaciones'} style={{ height: "120px", width: "120px", objectFit: "cover" }}></img>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Reservadas: </strong>0</ListGroup.Item>
                            <ListGroup.Item><strong>No Reservadas: </strong>0</ListGroup.Item>
                            <ListGroup.Item><strong>Total: </strong>0</ListGroup.Item>
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
