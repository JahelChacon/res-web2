import React from "react";
import { Container, Table } from "react-bootstrap";

export default function TemplateTablas({ columnas }) {
  
  return (
      <Container>
      <Table striped bordered responsive>
        <thead> 
          <tr>
            {columnas.map((columna, key) => (
                <th key={key}>
                    {columna.titulo}
                </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
                <tr>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <td key={index}>
                            Celda {index + 1}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
      </Table>
      </Container>
  )
}