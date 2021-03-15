import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Modal, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import BotonesAgregarModal from "../Botones/BotonesAgregarModal";

export default function AgregarClienteBarra({
    show,
    close,
    token,
    exitoAgregar,
    falloAgregar
}) {
    const { reset, handleSubmit } = useForm();
    const [agregando] = useState(false);

    const onAgregar = (form) => {
        console.log('Agregando cliente en Barra: ', form);
        exitoAgregar();
        // makeRequest('POST', `/${tabla}/update/${elemento._id}`, token, form)
        //     .then(response => {
        //         if (response.status === 200) {
        //             exitoEditar();
        //         } else {
        //             falloEditar();
        //         }
        //         setAgregando(false);
        //     })
    };

    return (
        <Modal show={show} onHide={close} centered size="lg">
            <Modal.Body>
                <form>
                    <Card>
                        <Card.Header className="bg-primary text-white text-center">
                            <h2>Agregar Cliente en Barra</h2>
                        </Card.Header>
                        <Card.Body>
                            <Row>





                            </Row>
                        </Card.Body>
                        <footer>
                            {agregando ?
                                <div className="ml-4">
                                    <Spinner animation="border" />
                                </div>
                                :
                                <BotonesAgregarModal agregar={handleSubmit(onAgregar)} cerrar={close} limpiar={reset} />
                            }
                        </footer>
                    </Card>
                </form>
            </Modal.Body>
        </Modal>
    );
}
