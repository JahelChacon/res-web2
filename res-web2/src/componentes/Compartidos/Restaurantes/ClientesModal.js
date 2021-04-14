import React, { useEffect, useState } from "react";
import { Modal, Card, ListGroup, Button, Container } from "react-bootstrap";
import { STATUS_MESA } from "../../../utils/utils";
import clientesImagen from "../../../img/Restaurantes/clientes.png";

export default function ClientesModal({
    show,
    close,
    mesas,
    clientes
}) {
    const [mesasOcupadas, setMesasOcupadas] = useState([]);
    const [reservaciones, setReservaciones] = useState([]);

    useEffect(() => {
        if (mesas) {
            const ocupadas = mesas.filter(function (mesa) {
                return mesa.status === STATUS_MESA.OCUPADA;
            }).length;
            const mesasReservadas = mesas.filter(function (mesa) {
                return mesa.status === STATUS_MESA.RESERVADA;
            }).length;
            setMesasOcupadas(ocupadas);
            setReservaciones(mesasReservadas);
        }
    }, [mesas]);

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
                            <ListGroup.Item><strong>Mesas: </strong>{mesasOcupadas}</ListGroup.Item>
                            <ListGroup.Item><strong>Barra: </strong>0</ListGroup.Item>
                            <ListGroup.Item><strong>Reservaciones: </strong>{reservaciones}</ListGroup.Item>
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
