import { React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonesFiltros({ limpiar, insertar }){
    return(
        <div>
            <Button variant="outline-success" type={"submit"}>Filtrar</Button>{' '}
            <Button type="reset" variant="outline-warning" onClick={limpiar}>Limpiar</Button>{' '}
            <Link to={insertar} className="btn btn-outline-primary">Agregar</Link>{' '}
        </div>
    )
}