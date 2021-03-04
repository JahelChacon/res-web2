import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./tabla.css";
import BootstrapTable from "react-bootstrap-table-next";
import Editar from "./Editar";
import ModalExito from "../Modales/ModalExito";

export default function Tabla({
    columnas,
    filas,
    token,
    editarTitulo,
    editarCampos,
    soloBusqueda
}) {
    const [filaSeleccionada, setfilaSeleccionada] = useState(false);
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const [exitoEditar, setExitoEditar] = useState(false);
    const [exitoEliminar, setExitoEliminar] = useState(false);

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
        console.log('eliminando: ', filaSeleccionada)
        setExitoEliminar(true);
        // Agregar POST /delete
    };

    const onFinalizarEditar = () => {
        setMostrarEditar(false);
        setExitoEditar(true);
    };

    return (
        <React.Fragment>
            { !soloBusqueda &&
                <Container className="text-left bg-light border p-3">
                    <Button className="mr-1" disabled={!filaSeleccionada} onClick={onEliminar} variant='outline-dark' type={"button"}>Eliminar</Button>
                    <Button disabled={!filaSeleccionada} onClick={() => setMostrarEditar(true)} variant='outline-info' type={"button"}>Editar</Button>
                </Container>
            }
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    {filas && <BootstrapTable
                        keyField="_id"
                        striped
                        bordered
                        wrapperClasses="table-responsive"
                        data={filas}
                        selectRow={selectRow}
                        columns={columnas} />
                    }
                </Col>
            </Row>
            { !soloBusqueda &&
                <React.Fragment>
                    <Editar
                        titulo={editarTitulo}
                        finalizarEditar={onFinalizarEditar}
                        token={token}
                        close={() => setMostrarEditar(false)}
                        show={mostrarEditar}
                        elemento={filaSeleccionada}
                        campos={editarCampos} />
                    <ModalExito close={() => setExitoEditar(false)} show={exitoEditar} texto='Elemento Editado con éxito!' />
                    <ModalExito close={() => setExitoEliminar(false)} show={exitoEliminar} texto='Elemento Eliminado con éxito!' />
                </React.Fragment>
            }
        </React.Fragment>
    )
}