import { React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonesInsertar({ limpiar, cancelar }){
    return(
        <div>
            <Button variant="outline-primary" type={"submit"}>Agregar</Button>{' '}
            <Button type="reset" variant="outline-warning" onClick={limpiar}>Limpiar</Button>{' '}
            <Link to={cancelar} className="btn btn-outline-danger">Cancelar</Link>{' '}
        </div>
    )
}