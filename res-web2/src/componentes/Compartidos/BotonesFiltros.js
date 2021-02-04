import { React } from "react";
import { Button } from "react-bootstrap";

export default function BotonesFiltros({ limpiar }){
    return(
        <div>
            <Button variant="outline-success" type={"submit"}>Filtrar</Button>{' '}
            <Button type="reset" variant="outline-warning" onClick={limpiar}>Limpiar</Button>{' '}
            <Button variant="outline-primary">Agregar</Button>{' '}
        </div>
    )
}