import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function MensajeExito({ texto }) {
    const [show, setShow] = useState(true);

    return (
        <React.Fragment>
            {
                show &&
                <Alert
                    dismissible
                    variant="success"
                    style={{ textAlign: "center" }}
                    onClose={() => setShow(false)}>
                    {texto}
                </Alert>
            }
        </React.Fragment>

    )

}
