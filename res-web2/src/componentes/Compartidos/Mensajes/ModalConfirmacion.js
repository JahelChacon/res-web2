import React from "react";
import { Modal, Button, Container } from "react-bootstrap";

export default function ModalConfirmacion({
    texto,
    show,
    close,
    onAceptar
}) {
    return (
        <Modal
            onHide={close}
            show={show}
            centered>
            <Modal.Body>
                <Container>
                    <div className="text-center m-4"><strong style={{ 'fontSize': '20px' }}>{texto}</strong></div>
                    <div className="text-center">
                        <Button className='mr-3' variant='outline-danger' onClick={close}>Cancelar</Button>
                        <Button variant='outline-success' onClick={onAceptar}>Aceptar</Button>
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
