import React from "react";
import { Container, Table } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "./TemplateTablas.css";

export default function TemplateTablas({ columnas, data }) {
  return (
    <Container>
      {data && <BootstrapTable
        striped
        bordered
        wrapperClasses="table-responsive"
        keyField="id"
        data={data}
        columns={columnas} />
      }
    </Container>
  )
}