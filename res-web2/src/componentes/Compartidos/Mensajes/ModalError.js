import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import xRed from "../../../img/General/x_red.png";

export default function ModalError({
    texto,
    show,
    close
}) {
    return (
        <Modal
            onHide={close}
            show={show}
            centered>
            <Modal.Body>
                <Container>
                    <div className="text-center"><img src={xRed} alt='Icono de éxito' style={{ height: "200px", width: "200px" }} /></div>
                    <div className="text-center m-4"><strong style={{ 'fontSize': '20px' }}>{texto}</strong></div>
                    <div className="text-center"><Button variant='secondary' onClick={close}>Cerrar</Button></div>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
