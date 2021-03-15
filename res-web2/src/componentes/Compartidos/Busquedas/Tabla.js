import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./tabla.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import Editar from "./Editar";
import ModalExito from "../Mensajes/ModalExito";
import ModalError from "../Mensajes/ModalError";

export default function Tabla({
    columnas,
    token,
    editarTitulo,
    editarCampos,
    soloBusqueda,
    isFormData,
    cargarTabla,
    tablaData,
    tabla
}) {
    const [filaSeleccionada, setfilaSeleccionada] = useState(false);
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const [exitoEliminar, setExitoEliminar] = useState(false);
    const [exitoEditar, setExitoEditar] = useState(false);
    const [eliminando, setEliminando] = useState(false);
    const [falloEliminar, setFalloEliminar] = useState(false);
    const [falloEditar, setFalloEditar] = useState(false);

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
        setEliminando(true);
        makeRequest('DELETE', `/${tabla}/${filaSeleccionada._id}`, token)
            .then(response => {
                if (response.status === 200) {
                    setExitoEliminar(true);
                } else {
                    setFalloEliminar(true);
                }
                setEliminando(false);
            })
    };

    const onEditarExito = () => {
        setMostrarEditar(false);
        setfilaSeleccionada(false);
        setExitoEditar(true);
    };

    const onEditarFallo = () => {
        setMostrarEditar(false);
        setFalloEditar(true);
    };

    const onCerrarExitoModal = () => {
        setExitoEditar(false)
        cargarTabla();
    };

    const onCerrarErorModal = () => {
        setExitoEliminar(false)
        cargarTabla();
    };

    return (
        <React.Fragment>
            { (tablaData && tablaData.length > 0) &&
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
                                pagination={paginationFactory()} />
                        </Col>
                    </Row>

                </React.Fragment>
            }
            {!soloBusqueda &&
                <React.Fragment>
                    <Editar
                        tabla={tabla}
                        titulo={editarTitulo}
                        exitoEditar={onEditarExito}
                        falloEditar={onEditarFallo}
                        token={token}
                        close={() => setMostrarEditar(false)}
                        show={mostrarEditar}
                        elemento={filaSeleccionada}
                        isFormData={isFormData}
                        campos={editarCampos} />
                    <ModalExito close={onCerrarExitoModal} show={exitoEditar} texto='Elemento Editado con éxito!' />
                    <ModalExito close={onCerrarErorModal} show={exitoEliminar} texto='Elemento Eliminado con éxito!' />
                    <ModalError close={() => setFalloEditar(false)} show={falloEditar} texto='Ocurrió un error al Editar el elemento. Por favor, intente de nuevo.' />
                    <ModalError close={() => setFalloEliminar(false)} show={falloEliminar} texto='Ocurrió un error al Eliminar el elemento. Por favor, intente de nuevo.' />
                </React.Fragment>
            }
        </React.Fragment>
    )
}