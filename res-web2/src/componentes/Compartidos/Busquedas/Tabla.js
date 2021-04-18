import React, { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { makeRequest } from "../../../utils/API";
import { insertarBitacora } from "../../../utils/utils";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./tabla.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import Editar from "./Editar";
import ModalExito from "../Mensajes/ModalExito";
import ModalError from "../Mensajes/ModalError";
import ModalConfirmacion from "../Mensajes/ModalConfirmacion";
import EditarClienteMesa from "../Restaurantes/EditarClienteMesa";
import EditarClienteBarra from "../Restaurantes/EditarClienteBarra";

export default function Tabla({
    columnas,
    token,
    usuario,
    editarTitulo,
    editarCampos,
    soloBusqueda,
    isFormData,
    cargarTabla,
    noEliminar,
    tablaData,
    tamano,
    tabla
}) {
    const [filaSeleccionada, setfilaSeleccionada] = useState(false);
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const [exitoEliminar, setExitoEliminar] = useState(false);
    const [exitoEditar, setExitoEditar] = useState(false);
    const [mostrarConfirmacionEliminar, setMostrarConfirmacionEliminar] = useState(false);
    const [eliminando, setEliminando] = useState(false);
    const [falloEliminar, setFalloEliminar] = useState(false);
    const [falloEditar, setFalloEditar] = useState(false);

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        bgColor: soloBusqueda ? null : '#969696',
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
                    insertarBitacora(token, usuario.login, `Elemento ${filaSeleccionada._id} de la tabla ${tabla} eliminado con éxito!`);
                } else {
                    setFalloEliminar(true);
                    insertarBitacora(token, usuario.login, `Fallo al eliminar elemento ${filaSeleccionada._id} de la tabla ${tabla}`);
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

    const onAceptarEliminar = () => {
        onEliminar();
        setMostrarConfirmacionEliminar(false);
    };

    const habilitarSort = () => {
        if (columnas && columnas.length > 0) {
            columnas.forEach(function (columna, index) {
                columnas[index] = {
                    ...columna,
                    sort: true,
                    sortCaret: (order, column) => {
                        if (!order) return (<span style={{ fontSize: '12px', color: '#636363' }}>&nbsp;&#9650;&nbsp;&#9660;</span>);
                        else if (order === 'asc') return (<span style={{ fontSize: '12px', color: '#636363' }}>&nbsp;&#9650;</span>);
                        else if (order === 'desc') return (<span style={{ fontSize: '12px', color: '#636363' }}>&nbsp;&#9660;</span>);
                        return null;
                    }
                }
            });
        }
    };

    useEffect(habilitarSort, [columnas]);

    return (
        <React.Fragment>
            { (tablaData && tablaData.length > 0) &&
                <React.Fragment>
                    {!soloBusqueda &&
                        <Container className="text-left bg-light border p-3">
                            {
                                !noEliminar && eliminando ?
                                    <Spinner animation="border" />
                                    : 
                                    !noEliminar &&
                                    <Button className="mr-1" disabled={!filaSeleccionada} onClick={() => setMostrarConfirmacionEliminar(true)} variant='outline-dark' type={"button"}>Eliminar</Button>
                            }
                            <Button disabled={!filaSeleccionada} onClick={() => setMostrarEditar(true)} variant='outline-info' type={"button"}>Editar</Button>
                        </Container>
                    }
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            {tablaData && <div className='p-3 text-right'>Total de elementos: <strong>{tablaData.length}</strong></div>}
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
                    {
                        editarCampos === "EditarClienteMesa"
                            ?
                            <EditarClienteMesa
                                tamano={tamano}
                                titulo={editarTitulo}
                                exitoEditar={onEditarExito}
                                falloEditar={onEditarFallo}
                                token={token}
                                close={() => setMostrarEditar(false)}
                                show={mostrarEditar}
                                cliente={filaSeleccionada} />
                            : editarCampos === "EditarClienteBarra" ?
                                <EditarClienteBarra
                                    tamano={tamano}
                                    titulo={editarTitulo}
                                    exitoEditar={onEditarExito}
                                    falloEditar={onEditarFallo}
                                    token={token}
                                    close={() => setMostrarEditar(false)}
                                    show={mostrarEditar}
                                    cliente={filaSeleccionada} />
                                :
                                <Editar
                                    tamano={tamano}
                                    tabla={tabla}
                                    titulo={editarTitulo}
                                    exitoEditar={onEditarExito}
                                    falloEditar={onEditarFallo}
                                    token={token}
                                    usuario={usuario}
                                    close={() => setMostrarEditar(false)}
                                    show={mostrarEditar}
                                    elemento={filaSeleccionada}
                                    isFormData={isFormData}
                                    campos={editarCampos} />
                    }

                    <ModalExito close={onCerrarExitoModal} show={exitoEditar} texto='Elemento Editado con éxito!' />
                    <ModalExito close={onCerrarErorModal} show={exitoEliminar} texto='Elemento Eliminado con éxito!' />
                    <ModalError close={() => setFalloEditar(false)} show={falloEditar} texto='Ocurrió un error al Editar el elemento. Por favor, intente de nuevo.' />
                    <ModalError close={() => setFalloEliminar(false)} show={falloEliminar} texto='Ocurrió un error al Eliminar el elemento. Por favor, intente de nuevo.' />
                </React.Fragment>
            }
            <ModalConfirmacion onAceptar={onAceptarEliminar} close={() => setMostrarConfirmacionEliminar(false)} show={mostrarConfirmacionEliminar} texto='¿Desea eliminar el elemento seleccionado?' />
        </React.Fragment>
    )
}