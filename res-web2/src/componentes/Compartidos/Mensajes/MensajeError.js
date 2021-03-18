import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

export default function MensajeError({
    error,
    mensaje = 'Ocurrio un error'
}) {
    return (
        <Fragment>
            {error && (
                <Alert variant="danger" style={{ textAlign: "center" }}>
                    {mensaje}
                </Alert>
            )}
        </Fragment>
    )
}
