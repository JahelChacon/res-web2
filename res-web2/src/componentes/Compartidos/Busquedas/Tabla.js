import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Row, Col } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./tabla.css";

export default function Tabla({ columnas, filas }) {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                {filas && <BootstrapTable
                    keyField="codigo"
                    striped
                    bordered
                    wrapperClasses="table-responsive"
                    keyField="id"
                    data={filas}
                    columns={columnas} />
                }
            </Col>
        </Row>
    )
}