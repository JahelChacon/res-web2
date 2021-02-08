import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import checkGreen from "../../../img/General/check_green.png";

export default function ModalExito({
    texto,
    show,
    close
}) {
    return (
        <Modal
            show={show}
            centered>
            <Modal.Body>
                <Container>
                    <div className="text-center"><img src={checkGreen} alt='Icono de éxito' style={{ height: "200px", width: "200px" }} /></div>
                    <div className="text-center m-4"><strong style={{ 'font-size': '20px' }}>{texto}</strong></div>
                    <div className="text-center"><Button variant='secondary' onClick={close}>Cerrar</Button></div>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
