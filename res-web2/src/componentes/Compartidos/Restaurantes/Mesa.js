import React from "react";
import { Button } from "react-bootstrap";
import { STATUS_MESA } from "../../../utils/utils";
import mesaDosSillas from "../../../img/Restaurantes/mesa-2-sillas.png";
import mesaCuatroSillas from "../../../img/Restaurantes/mesa-4-sillas.png";

export default function Mesa({ status, nombre, sillas, agregarCliente }) {
    return (
        <React.Fragment>
            <label style={{ width: '100%' }}>{nombre}</label>
            <Button
                disabled={status === STATUS_MESA.OCUPADA || status === STATUS_MESA.RESERVADA}
                className='p-2'
                variant={status === STATUS_MESA.OCUPADA ? "primary" : status === STATUS_MESA.RESERVADA ? "danger" : "outline-secondary"}
                type="button"
                onClick={agregarCliente}>
                <img
                    src={sillas === 2 ? mesaDosSillas : mesaCuatroSillas}
                    alt={'Mesa de dos sillas'}
                    style={{ height: "140px", width: "140px", objectFit: "cover" }} />
            </Button>
        </React.Fragment>
    )
}
