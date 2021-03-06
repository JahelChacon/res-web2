import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import { Spinner } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./tabla.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import Editar from "./Editar";
import ModalExito from "../Modales/ModalExito";
import ModalError from "../Modales/ModalError";
import MensajeCargando from "../Mensajes/MensajeCargando";
import MensajeError from "../Mensajes/MensajeError";

export default function Tabla({
    columnas,
    token,
    editarTitulo,
    editarCampos,
    soloBusqueda,
    isFormData,
    tabla,
    filtros
}) {
    const [filaSeleccionada, setfilaSeleccionada] = useState(false);
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const [exitoEliminar, setExitoEliminar] = useState(false);
    const [exitoEditar, setExitoEditar] = useState(false);
    const [tablaData, setTablaData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [falloTabla, setFalloTabla] = useState(false);
    const [eliminando, setEliminando] = useState(false);
    const [falloEliminar, setFalloEliminar] = useState(false);
    const [falloEditar, setFalloEditar] = useState(false);

    const cargarTabla = () => {
        // ** Falta: ty catch
        setCargando(true);
        makeRequest('GET', '/' + tabla, token)
            .then(response => response.json())
            .then(data => {
                setTablaData(data);
                setCargando(false);
            })
            .catch(() => {
                setFalloTabla(true);
            });
    };

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        bgColor: !soloBusqueda && '#969696',
        hideSelectColumn: soloBusqueda,
        onSelect: (row) => {
            setfilaSeleccionada(row);
        },
    };

    const onEliminar = () => {
        console.log('eliminando: ', filaSeleccionada._id)
        setEliminando(true);
        makeRequest('DELETE', `/${tabla}/${filaSeleccionada._id}`, token)
            .then(response => {
                if (response.status === 200) {
                    setExitoEliminar(true);
                    cargarTabla();
                } else {
                    setFalloEliminar(true);
                }
                setEliminando(false);
            })
    };

    const onFinalizarEditar = () => {
        setMostrarEditar(false);
        setfilaSeleccionada(false);
        cargarTabla();
        setExitoEditar(true);
    };

    const onEditarFallo = () => {
        setMostrarEditar(false);
        setFalloEditar(true);
    };

    useEffect(cargarTabla, [tabla, token]);

    useEffect(() => {
        console.log('filtros', filtros);
        console.log('tablaData', tablaData);

        // const result = words.filter(word => word.length > 6);
        
        // setTablaData(data);
    }, [filtros]);

    return (
        <React.Fragment>
            <MensajeCargando cargando={cargando && !falloTabla} />
            <MensajeError error={falloTabla} />
            { (!cargando && !falloTabla && tablaData.length > 0) &&
                <React.Fragment>
                    {!soloBusqueda &&
                        <Container className="text-left bg-light border p-3">
                            {
                                eliminando ?
                                    <Spinner animation="border" />
                                    :
                                    <Button className="mr-1" disabled={!filaSeleccionada} onClick={onEliminar} variant='outline-dark' type={"button"}>Eliminar</Button>
                            }
                            <Button disabled={!filaSeleccionada} onClick={() => setMostrarEditar(true)} variant='outline-info' type={"button"}>Editar</Button>
                        </Container>
                    }
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <BootstrapTable
                                keyField="_id"
                                striped
                                bordered
                                wrapperClasses="table-responsive"
                                data={tablaData}
                                selectRow={selectRow}
                                columns={columnas} 
                                pagination={paginationFactory()}/>
                        </Col>
                    </Row>

                </React.Fragment>
            }
            {!soloBusqueda &&
                <React.Fragment>
                    <Editar
                        tabla={tabla}
                        titulo={editarTitulo}
                        finalizarEditar={onFinalizarEditar}
                        falloEditar={onEditarFallo}
                        token={token}
                        close={() => setMostrarEditar(false)}
                        show={mostrarEditar}
                        elemento={filaSeleccionada}
                        isFormData={isFormData}
                        campos={editarCampos} />
                    <ModalExito close={() => setExitoEditar(false)} show={exitoEditar} texto='Elemento Editado con éxito!' />
                    <ModalExito close={() => setExitoEliminar(false)} show={exitoEliminar} texto='Elemento Eliminado con éxito!' />
                    <ModalError close={() => setFalloEditar(false)} show={falloEditar} texto='Ocurrió un error al Editar el elemento. Por favor, intente de nuevo.' />
                    <ModalError close={() => setFalloEliminar(false)} show={falloEliminar} texto='Ocurrió un error al Eliminar el elemento. Por favor, intente de nuevo.' />
                </React.Fragment>
            }
        </React.Fragment>
    )
}