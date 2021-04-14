import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import Mesa from "./Mesa";
import Barra from "./Barra";
import AgregarClienteMesa from "./AgregarClienteMesa";
import AgregarClienteBarra from "./AgregarClienteBarra";
import ModalExito from "../Mensajes/ModalExito";
import ModalError from "../Mensajes/ModalError";
import CardRestaurante from "../Cards/CardRestaurante";
import mesasImagen from "../../../img/Restaurantes/mesas.png";
import reservacionImagen from "../../../img/Restaurantes/reservacion.png";
import clientesImagen from "../../../img/Restaurantes/clientes.png";
import productosImagen from "../../../img/Restaurantes/productos.png";
import MesasModal from "./MesasModal";
import ReservacionesModal from "./ReservacionesModal";
import ClientesModal from "./ClientesModal";
import ProductosModal from "./ProductosModal";
import MensajeError from "../Mensajes/MensajeError";

export default function RestauranteTemplate({ token, restaurante, barras }) {
    const [mesas, setMesas] = useState([]);
    const [mesaSeleccionada, setMesaSeleccionada] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [falloMesas, setFalloMesas] = useState(false);
    // Modales
    const [mostrarMesas, setMostrarMesas] = useState(false);
    const [mostrarReservaciones, setMostrarReservaciones] = useState(false);
    const [mostrarClientes, setMostrarClientes] = useState(false);
    const [mostrarProductos, setMostrarProductos] = useState(false);
    // Agregar Cliente
    const [mostrarAgregarClienteMesa, setMostrarAgregarClienteMesa] = useState(false);
    const [mostrarAgregarClienteBarra, setMostrarAgregarClienteBarra] = useState(false);
    const [agregarClienteExito, setAgregarClienteExito] = useState(false);
    const [agregarClienteFallo, setAgregarClienteFallo] = useState(false);

    const cargarMesas = () => {
        setCargando(true);
        makeRequest('GET', '/mesas', token)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.numero - b.numero);
                const mesas = data.filter(function (item) {
                    return item.restaurante === restaurante;
                });
                setMesas(mesas);
                setCargando(false);
            })
            .catch(() => {
                setFalloMesas(true);
            });
    };

    // Agregar Cliente
    const onMostrarAgregarClienteMesa = (mesa) => {
        setMesaSeleccionada(mesa);
        setMostrarAgregarClienteMesa(true);
    };

    const onAgregarClienteExito = () => {
        setMostrarAgregarClienteMesa(false);
        setMostrarAgregarClienteBarra(false);
        setMesaSeleccionada(false);
        setAgregarClienteExito(true);
        cargarMesas();
    };

    const onAgregarClientefallo = () => {
        setMostrarAgregarClienteMesa(false);
        setMostrarAgregarClienteBarra(false);
        setMesaSeleccionada(false);
        setAgregarClienteFallo(true);
    };

    useEffect(cargarMesas, [token, restaurante]);

    return (
        <React.Fragment>
            <Container>
                <Card>
                    <Card.Body>
                        <Row>
                            <CardRestaurante onClick={() => setMostrarMesas(true)} img={mesasImagen} titulo='Ver Mesas' alt='ver mesas'></CardRestaurante>
                            <CardRestaurante onClick={() => setMostrarReservaciones(true)} img={reservacionImagen} titulo='Ver Reservaciones' alt='ver reservaciones'></CardRestaurante>
                            <CardRestaurante onClick={() => setMostrarClientes(true)} img={clientesImagen} titulo='Ver Clientes' alt='ver clientes'></CardRestaurante>
                            <CardRestaurante onClick={() => setMostrarProductos(true)} img={productosImagen} titulo='Ver Productos' alt='ver productos'></CardRestaurante>
                        </Row>
                    </Card.Body>
                </Card>
                <Row className='m-2 justify-content-between' style={{ width: '100%', 'alignItems': 'center' }}>
                    <div className="text-left">
                        <Link to="/cierre-caja" className="pl-5 pr-5 btn btn-danger">Cerrar Caja</Link>
                        <Card>
                            <Card.Body>
                                <Row className='justify-content-center'><strong className='pr-3 pl-3' style={{ color: 'red' }}>Reservadas</strong></Row>
                                <Row className='justify-content-center'><strong className='pr-3 pl-3' style={{ color: 'blue' }}>Ocupadas</strong></Row>
                            </Card.Body>
                        </Card>
                    </div>
                    <Barra
                        name='barra-1'
                        label='Barra 1'
                        agregarCliente={() => setMostrarAgregarClienteBarra(true)}
                    />
                </Row>
                <Row style={{ width: '100%' }}>

                    {
                        cargando && !falloMesas
                            ?
                            <div className="ml-4">
                                <Spinner animation="border" />
                            </div>
                            : !cargando && !falloMesas &&
                            mesas.length > 0 && mesas.map(((mesa, index) =>
                                <Col className='m-2' key={index}>
                                    <Mesa
                                        key={index}
                                        status={mesa.status}
                                        nombre={mesa.nombre}
                                        sillas={mesa.sillas}
                                        agregarCliente={() => onMostrarAgregarClienteMesa(mesa)} />
                                </Col>
                            ))
                    }
                    <MensajeError error={falloMesas} />
                </Row>
                {
                    barras > 1 &&
                    <Barra
                        name='barra-2'
                        label='Barra 2'
                        agregarCliente={() => setMostrarAgregarClienteBarra(true)}
                    />
                }

            </Container>
            <AgregarClienteMesa
                close={() => setMostrarAgregarClienteMesa(false)}
                show={mostrarAgregarClienteMesa}
                token={token}
                exitoAgregar={onAgregarClienteExito}
                falloAgregar={onAgregarClientefallo}
                restaurante={restaurante}
                mesa={mesaSeleccionada} />
            <AgregarClienteBarra
                close={() => setMostrarAgregarClienteBarra(false)}
                show={mostrarAgregarClienteBarra}
                token={token}
                restaurante={restaurante}
                exitoAgregar={onAgregarClienteExito}
                falloAgregar={onAgregarClientefallo} />



            {/* Modales */}
            <MesasModal mesas={mesas} close={() => setMostrarMesas(false)} show={mostrarMesas} />
            <ReservacionesModal mesas={mesas} close={() => setMostrarReservaciones(false)} show={mostrarReservaciones} />
            <ClientesModal mesas={mesas} close={() => setMostrarClientes(false)} show={mostrarClientes} />
            <ProductosModal token={token} close={() => setMostrarProductos(false)} show={mostrarProductos} />
            {/* Agregar cliente */}
            <ModalExito close={() => setAgregarClienteExito(false)} show={agregarClienteExito} texto='Cliente agregado con Éxito!' />
            <ModalError close={() => setAgregarClienteFallo(false)} show={agregarClienteFallo} texto='Ocurrió un error al Agregar el Cliente. Por favor, intente de nuevo.' />
        </React.Fragment>
    )
}
