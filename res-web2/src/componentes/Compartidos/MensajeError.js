import React from "react";
import { Alert } from "react-bootstrap";

export default function MensajeError({ mensajeError }){
    return(
        <>
            {mensajeError && (
                <Alert variant="danger" style={{textAlign: "center"}}>
                    Ocurrió un problema
                </Alert>
            )}
        </>
    )
}