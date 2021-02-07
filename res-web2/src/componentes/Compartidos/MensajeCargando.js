import React from "react";
import { Alert } from "react-bootstrap";

export default function MensajeCargando({ cargando }){
    return(
        <>
            {cargando && (
                <Alert variant="warning" style={{textAlign: "center"}}>
                    Cargando elementos
                </Alert>
            )}
        </>
    )
}