import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

export default function MensajeCargando({ cargando }){
    return(
        <Fragment>
            {cargando && (
                <Alert variant="warning" style={{textAlign: "center"}}>
                    Cargando elementos
                </Alert>
            )}
        </Fragment>
    )
}
