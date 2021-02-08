import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

export default function MensajeError({ error }){
    return(
        <Fragment>
            {error && (
                <Alert variant="danger" style={{textAlign: "center"}}>
                    Ocurrió un problema
                </Alert>
            )}
        </Fragment>
    )
}
