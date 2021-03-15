import React from "react";
import { Modal, Card, Button, Container } from "react-bootstrap";
import productosImagen from "../../../img/Restaurantes/productos.png";

export default function ProductosModal({
    show,
    close,
    productos
}) {
    return (
        <Modal show={show} onHide={close} centered>
            <Modal.Body>
                <Card>
                    <Card.Header className="bg-primary text-white text-center">
                        <h2>Información de Productos</h2>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <img src={productosImagen} alt={'Clientes'} style={{ height: "120px", width: "120px", objectFit: "cover" }}></img>
                        {/* Falta agregar lista de productos */}
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
