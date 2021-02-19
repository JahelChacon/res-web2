import { React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonesFiltros({ filtrar, limpiar, insertarURL, inserta }){
    return(
        <div>
            <Button type="button" variant="outline-success" onClick={filtrar}>Filtrar</Button>{' '}
            <Button type="reset" variant="outline-warning" onClick={limpiar}>Limpiar</Button>{' '}
            {inserta && (
                <>
                <Link to={insertarURL} className="btn btn-outline-primary">Agregar</Link>{' '}
                </>
            )}
        </div>
    )
}