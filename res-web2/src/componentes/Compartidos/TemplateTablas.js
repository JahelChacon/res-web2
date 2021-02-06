import React from "react";
import { Container, Table } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";

export default function TemplateTablas({ columnas, data }) {
  return (
    <Container>
      {data && <BootstrapTable keyField="id" data={data} columns={columnas} />}
    </Container>
  )
}