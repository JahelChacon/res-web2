import React from "react";
import TemplateTablas from "../../Compartidos/TemplateTablas";

export default function TablaMarcas({ marcas }) {
  return (
    <TemplateTablas
      data={marcas}
      columnas={[
        { text: "Codigo", dataField: "codigo" },
        { text: "Nombre", dataField: "nombreMarca" },
        { text: "Descripcion", dataField: "descripcionMarca" },
        { text: "Nacionalidad", dataField: "nacionalidad" },
        { text: "Empresa", dataField: "nombreEmpresa" },
        { text: "Telefono", dataField: "telefonoEmpresa" }
      ]} />
  )
}