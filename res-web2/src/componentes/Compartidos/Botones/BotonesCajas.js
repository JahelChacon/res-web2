import { React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonesCajas({ aceptar, limpiar, cancelar }) {
    return (
        <div>
            <Button type="button" variant="outline-success" onClick={aceptar}>Aceptar</Button>{' '}
            <Button type="reset" variant="outline-warning" onClick={limpiar}>Limpiar</Button>{' '}
            {
                cancelar &&
                <Link to='/' className="btn btn-outline-danger">Cancelar</Link>
            }
        </div>
    )
}
