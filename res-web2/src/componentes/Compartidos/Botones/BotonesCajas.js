import { React } from "react";
import { Button } from "react-bootstrap";

export default function BotonesCajas({ aceptar, limpiar }) {
    return (
        <div>
            <Button type="button" variant="outline-success" onClick={aceptar}>Aceptar</Button>{' '}
            <Button type="reset" variant="outline-warning" onClick={limpiar}>Limpiar</Button>{' '}
        </div>
    )
}
