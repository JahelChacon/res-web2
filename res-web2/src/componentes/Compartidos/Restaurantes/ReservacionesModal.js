import React, {useState, useEffect} from "react";
import { Modal, Card, ListGroup, Button, Container } from "react-bootstrap";
import { STATUS_MESA } from "../../../utils/utils";
import reservacionImagen from "../../../img/Restaurantes/reservacion.png";

export default function ReservacionesModal({
    show,
    close,
    mesas
}) {
    const [reservadas, setReservadas] = useState([]);

    useEffect(() => {
        if (mesas) {
            const mesasReservadas = mesas.filter(function (mesa) {
                return mesa.status === STATUS_MESA.RESERVADA;
            }).length;
            setReservadas(mesasReservadas);
        }
    }, [mesas]);

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
                            <ListGroup.Item><strong>Reservadas: </strong>{reservadas}</ListGroup.Item>
                            <ListGroup.Item><strong>No Reservadas: </strong>{mesas.length - reservadas}</ListGroup.Item>
                            <ListGroup.Item><strong>Total: </strong>{mesas.length}</ListGroup.Item>
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
