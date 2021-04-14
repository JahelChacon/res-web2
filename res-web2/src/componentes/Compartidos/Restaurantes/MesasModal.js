import React, { useEffect, useState } from "react";
import { Modal, Card, ListGroup, Button, Container } from "react-bootstrap";
import { STATUS_MESA } from "../../../utils/utils";
import mesasImagen from "../../../img/Restaurantes/mesas.png";

export default function MesasModal({
    show,
    close,
    mesas
}) {
    const [ocupadas, setOcupadas] = useState([]);

    useEffect(() => {
        if (mesas) {
            const ocupadasYreservadas = mesas.filter(function (mesa) {
                return mesa.status === STATUS_MESA.OCUPADA || mesa.status === STATUS_MESA.RESERVADA;
            }).length;
            setOcupadas(ocupadasYreservadas);
        }
    }, [mesas]);

    return (
        <Modal show={show} onHide={close} centered>
            <Modal.Body>
                <Card>
                    <Card.Header className="bg-primary text-white text-center">
                        <h2>Información de Mesas</h2>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <img src={mesasImagen} alt={'Mesas'} style={{ height: "120px", width: "120px", objectFit: "cover" }}></img>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Mesas Libres: </strong>{mesas.length - ocupadas}</ListGroup.Item>
                            <ListGroup.Item><strong>Mesas Ocupadas: </strong>{ocupadas}</ListGroup.Item>
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
