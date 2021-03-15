import React from "react";
import { Button } from "react-bootstrap";
import mesaDosSillas from "../../../img/Restaurantes/mesa-2-sillas.png";
import mesaCuatroSillas from "../../../img/Restaurantes/mesa-4-sillas.png";

export default function Mesa({ nombre, sillas, agregarCliente }) {
    return (
        <React.Fragment>
            <label style={{ width: '100%' }}>{nombre}</label>
            {
                sillas === 2 ?
                    <Button className='p-2' variant="outline-secondary" type="button" onClick={agregarCliente}>
                        <img
                            src={mesaDosSillas}
                            alt={'Mesa de dos sillas'}
                            style={{ height: "140px", width: "140px", objectFit: "cover" }} />
                    </Button>
                    :
                    <Button className='p-2'variant="outline-secondary" type="button" onClick={agregarCliente}>
                        <img
                            src={mesaCuatroSillas}
                            alt={'Mesa de dos sillas'}
                            style={{ height: "140px", width: "140px", objectFit: "cover" }} />
                    </Button>
            }
        </React.Fragment>
    )
}
