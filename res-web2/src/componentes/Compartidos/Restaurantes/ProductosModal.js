import React, { useEffect, useState } from "react";
import { Modal, Card, Button, Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { makeRequest, API_URL } from "../../../utils/API";
import productosImagen from "../../../img/Restaurantes/productos.png";

export default function ProductosModal({
    show,
    close,
    token
}) {
    const [platillos, setPlatillos] = useState([]);
    const [platillo, setPlatillo] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [fallo, setFallo] = useState(false);

    const seleccionPlatillo = (e) => {
        let platillo = platillos.find(function (elemento) {
            return elemento._id === e.target.value;
        });
        if (typeof platillo === 'undefined') {
            platillo = false;
        }
        setPlatillo(platillo);
    }

    const onBrokenImage = (e) => {
        e.target.src = productosImagen;
    }

    useEffect(() => {
        setCargando(true);
        makeRequest('GET', '/platillos', token)
            .then(response => response.json())
            .then(data => {
                setPlatillos(data);
                setCargando(false);
            })
            .catch((error) => {
                console.log('Error: ', error);
                setFallo(true);
            });
    }, [token]);

    return (
        <Modal show={show} onHide={close} centered>
            <Modal.Body>
                <Card>
                    <Card.Header className="bg-primary text-white text-center">
                        <h2>Información de Productos</h2>
                    </Card.Header>

                    {
                        cargando && !fallo
                            ?
                            <div className="ml-4">
                                <Spinner animation="border" />
                            </div>
                            : !cargando && !fallo &&
                            <Card.Body className="text-center">
                                <img onError={onBrokenImage} src={platillo ? API_URL + platillo.foto : productosImagen} alt={'Platillo'} style={{ height: "120px", width: "120px", objectFit: "cover" }}></img>
                                <select
                                    name='platillos'
                                    className="form-control mt-3"
                                    onChange={seleccionPlatillo}>
                                    <option key="default" value="">Select</option>
                                    {
                                        platillos.map(((elemento, index) =>
                                            <option
                                                key={index}
                                                value={elemento._id}>
                                                {elemento.nombre} - ₡{elemento.precio}
                                            </option>
                                        ))
                                    }
                                </select>
                            </Card.Body>
                    }
                    <footer>
                        <Container className="text-center bg-light border-top p-3">
                            <Button type="button" variant="outline-danger" onClick={close}>Cerrar</Button>
                        </Container>
                    </footer>
                </Card>
            </Modal.Body>
        </Modal >
    );
}
