import { React } from "react";
import { Button, Container } from "react-bootstrap";

export default function BotonesAgregarModal({ agregar, limpiar, cerrar }) {
    return (
        <Container className="text-left bg-light border p-3">
            <Button type="button" variant="outline-success" onClick={agregar}>Agregar</Button>{' '}
            <Button type="reset" variant="outline-warning" onClick={limpiar}>Limpiar</Button>{' '}
            <Button type="button" variant="outline-danger" onClick={cerrar}>Cerrar</Button>{' '}
        </Container>
    )
}
